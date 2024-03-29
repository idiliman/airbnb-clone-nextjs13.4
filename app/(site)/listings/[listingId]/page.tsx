import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import getReservations from '@/app/actions/getReservations';

import EmptyState from '@/app/components/EmptyState';
import ListingClient from './ListingClient';

interface IParams {
  listingId?: string;
}

async function ListingPage({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservation = await getReservations(params);
  console.log('🚀 ~ ListingPage ~ reservation:', reservation);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }

  return <ListingClient listing={listing} currentUser={currentUser} reservations={reservation} />;
}

export default ListingPage;

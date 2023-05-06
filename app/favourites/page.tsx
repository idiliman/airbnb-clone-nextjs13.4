import EmptyState from '@/app/components/EmptyState';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavouriteListings from '@/app/actions/getFavouriteListings';

import FavouritesClient from './FavouritesClient';

async function FavouritesPage() {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState title='No favourites found' subtitle='Looks like you have no favorite listings.' />;
  }

  return <FavouritesClient listings={listings} currentUser={currentUser} />;
}
export default FavouritesPage;

import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getFavouriteListings from '@/app/actions/getFavouriteListings';

import FavouritesClient from './FavouritesClient';

async function FavouritesPage() {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      // <ClientOnly>
      <EmptyState title='No favourites found' subtitle='Looks like you have no favorite listings.' />
      // </ClientOnly>
    );
  }

  return (
    // <ClientOnly>
    <FavouritesClient listings={listings} currentUser={currentUser} />
    // </ClientOnly>
  );
}
export default FavouritesPage;

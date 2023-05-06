import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getListings from '../actions/getListings';

import PropertiesClient from './PropertiesClient';

async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const listings = await getListings({ userId: currentUser.id });
  console.log('🚀 ~ PropertiesPage ~ listings:', listings);

  if (listings.length === 0) {
    return <EmptyState title='No properties found' subtitle='Looks like you hav no properties.' />;
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
export default PropertiesPage;

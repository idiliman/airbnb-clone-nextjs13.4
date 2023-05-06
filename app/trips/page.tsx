import EmptyState from '@/app/components/EmptyState';
import ClientOnly from '@/app/components/ClientOnly';

import getCurrentUser from '@/app/actions/getCurrentUser';
import getReservations from '@/app/actions/getReservations';

import TripsClient from './TripsClient';

async function TripsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title='Unauthorized' subtitle='Please login' />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  console.log('🚀 ~ TripsPage ~ reservations:', reservations);

  if (reservations.length === 0) {
    return <EmptyState title='No trips found' subtitle='Looks like you havent reserved any trips.' />;
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
export default TripsPage;

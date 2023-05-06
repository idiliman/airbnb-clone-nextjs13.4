import Container from '@/app/components/Container';

import getCurrentUser from '@/app/actions/getCurrentUser';
import ClientOnly from './components/ClientOnly';
import EmptyState from './components/EmptyState';
import getListings, { IListingsParams } from './actions/getListings';
import ListingCard from './components/listings/ListingCard';

interface HomeProps {
  searchParams: IListingsParams;
}

async function Home({ searchParams }: HomeProps) {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  // if (listings.length === 0) {
  //   return (
  //     <Container>
  //       <EmptyState showReset />
  //     </Container>
  //   );
  // }

  return (
    // <ClientOnly>
    <Container>
      <div
        className='
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          '
      >
        {listings.map((listing: any) => (
          <ListingCard currentUser={currentUser} key={listing.id} data={listing} />
        ))}
      </div>
    </Container>
    // </ClientOnly>
  );
}
export default Home;

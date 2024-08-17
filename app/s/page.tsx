import Container from '@/components/Container';
import getListings, { IListingParams } from '../actions/getListings';
import ClientOnly from '@/components/ClientOnly';
import EmptyState from '@/components/EmptyState';
import ListingCard from '@/components/listing/ListingCard';

interface SearchProps {
  searchParams: IListingParams;
}

export default async function s({ searchParams }: SearchProps) {
  const listings = await getListings(searchParams);

  return (
      <Container>
        {listings && listings.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <div className="grid min-h-screen grid-cols-1 gap-8 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {listings &&
              listings.map((listing: any) => {
                return <ListingCard key={listing.id} data={listing} />;
              })}
          </div>
        )}
      </Container>
  );
}

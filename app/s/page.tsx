import Container from "@/components/Container";
import getListings, { IListingParams } from "../actions/getListings";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listing/ListingCard";
import { categories } from "@/lib/icons/navbarIcons";
import CategoryBox from "@/components/categories/CategoryBox";

interface SearchProps {
  searchParams: IListingParams;
}

export default async function s({ searchParams }: SearchProps) {
  const listings = await getListings(searchParams);
  const category = searchParams.category
    ? searchParams.category.split(",")
    : [];

  return (
    <>
      <Container>
        <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category?.includes(item.label)}
              icon={<item.icon />}
            />
          ))}
        </div>
        {listings && listings.length === 0 ? (
          <EmptyState showReset />
        ) : (
          <div className="grid min-h-screen grid-cols-1 gap-8 pt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            {listings &&
              listings.map((listing: any) => {
                return <ListingCard key={listing.id} data={listing} />;
              })}
          </div>
        )}
      </Container>
    </>
  );
}

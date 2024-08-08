import getListings, { IListingParams } from "./actions/getListings";

interface HomeProps {
  searchParams: IListingParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const listing = await getListings(searchParams);

  if (listing.length === 0) {
    return <div>No Lisings</div>;
  }

  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
      {listing.map((list) => {
        return <div>{list.title}</div>;
      })}
    </div>
  );
}

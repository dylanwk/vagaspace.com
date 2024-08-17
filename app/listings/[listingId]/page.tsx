import getListingById from "@/app/actions/getListingById";
import Image from "next/image";

import ListingInfo from "@/components/listing/ListingInfo";
import ListingLink from "@/components/listing/ListingLink";
import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import Heading from "@/components/modals/Heading";
import { categories } from "@/lib/categories";

interface IParams {
  listingId?: string;
}

export default async function listings({ params }: { params: IParams }) {
  const listing = await getListingById(params);

  if (!listing) {
    return <EmptyState />;
  }

  const splitAmenities = listing.amenities.split(",");

  const isDefined = <T,>(item: T | undefined): item is T => item !== undefined;

  const validAmenities = splitAmenities
    .map((amenity) => {
      return categories.find(
        (category) =>
          category.label.toLowerCase() === amenity.trim().toLowerCase()
      );
    })
    .filter(isDefined);

  const maxAmenities = validAmenities.slice(0, 10);
  const offersRowOne = maxAmenities.slice(0, 5);
  const offersRowTwo = maxAmenities.slice(5, 10);

  const amenityPage = (
    <>
      <div className="flex flex-col gap-2">
        {offersRowOne.map((item, index) => (
          <div
            key={index}
            className="my-1 flex items-center justify-start gap-4 text-center"
          >
            <item.icon size={25} className="text-gray-700" />
            <p className="text-neutral-500 text-sm sm:text-base">
              {item?.label}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {offersRowTwo.map((item, index) => (
          <div
            key={index}
            className="my-1 flex items-center justify-start gap-4 text-center"
          >
            <item.icon size={25} className="text-gray-700" />
            <p className="text-neutral-500 text-sm sm:text-base">
              {item?.label}
            </p>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <Container>
      <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="relative aspect-square sm:aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-xl">
            <Image
              alt="Destination Image"
              src={listing.imageSrc}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              priority
              className="object-cover"
              quality={85}
            />
          </div>
          <Heading title={listing.title} />
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-light text-neutral-500 text-sm sm:text-base">
            <div>{listing.guestCount} guests</div>
            <div className="hidden sm:inline">•</div>
            <div>{listing.bedCount} bedroom</div>
            <div className="hidden sm:inline">•</div>
            <div>{listing.bathroomCount} bathrooms</div>
          </div>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:gap-10">
            <div className="w-full md:w-[60%]">
              <ListingInfo
                description={listing.description}
                descriptors={"none"}
                locationValue={listing.locationAttractions}
                location={listing.location}
                amenities={amenityPage}
              />
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-8 col-span-4">
              <div className="mb-6 sm:mb-8 h-[40vh] sm:h-[50vh] w-full">
                <p className="text-xl font-semibold mb-6">Where you&apos;ll be</p>
                <Skeleton className="h-full w-full" />
              </div>
              <hr className="mt-6"/>
              <ListingLink price={listing.price} listingLink={listing.link} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

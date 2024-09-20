// Purpose: Display the listing page for a specific listing
import getListingById from "@/app/actions/getListingById";
import Image from "next/image";

// component imports
import ListingInfo from "@/components/listing/ListingInfo";
import ListingLink from "@/components/listing/ListingLink";
import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import Heading from "@/components/Heading";

// icon imports
import { ALL_AMENITY_ICONS } from "@/lib/icons/amenityIcons";
import { ALL_NAVBAR_CATEGORIES } from "@/lib/icons/navbarIcons";
import dynamic from "next/dynamic";

interface IParams {
  listingId?: string;
}

export default async function listings({ params }: { params: IParams }) {
  const listing = await getListingById(params);

  const isDefined = <T,>(item: T | undefined): item is T => item !== undefined;

  const Map = dynamic(() => import('@/components/Map'), { ssr: false, loading: () => <Skeleton className="h-[50vh]" /> });

  if (!listing) {
    return <EmptyState />;
  }

  // cooridnates parse and validation
  const coordinates: number[] = JSON.parse(listing.latLng);

  // navbar category parse and validation
  const navbarCategories: string[] = JSON.parse(listing.categoryOptions);
  const validatedNavbarCategories = navbarCategories
    .map((cat) => {
      return ALL_NAVBAR_CATEGORIES.find(
        (category) => category.label.toLowerCase() === cat.toLowerCase()
      );
    })
    .filter(isDefined);


  // amenity parse and validation
  const amenities: string[] = JSON.parse(listing.amenities);
  const validAmenities = amenities
    .map((amenity) => {
      return ALL_AMENITY_ICONS.find(
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
            <item.icon className="text-gray-700" />
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
            <item.icon className="text-gray-700" />
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
      <div className="mx-auto mt-6 max-w-screen-lg px-4 sm:px-6 lg:px-8 mb-20">
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
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-light -mt-4 sm:-mt-2 text-neutral-500 text-sm sm:text-base">
            <div>{listing.guestCount} guests</div>
            <div className="inline">•</div>
            <div>{listing.bedCount} bedroom</div>
            <div className="inline">•</div>
            <div>{listing.bathroomCount} bathrooms</div>
          </div>

          <div className="mt-4 flex flex-col gap-6 md:flex-row md:gap-10">
            <div className="w-full md:w-[60%]">
              <ListingInfo
                description={listing.description}
                locationValue={listing.locationAttractions}
                amenities={amenityPage}
                categories={validatedNavbarCategories}
              />
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-8 col-span-4">
              <div className="mb-6 sm:mb-8 h-[40vh] sm:h-[50vh] w-full">
                <p className="text-xl font-semibold mb-6">
                  Where you&apos;ll be
                </p>
                <Map center={coordinates}  />
              </div>
              <hr className="mt-6" />
              <ListingLink price={listing.price} listingLink={listing.link} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

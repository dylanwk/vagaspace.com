"use client";

import { IconType } from "react-icons/lib";
import LocationCard from "./LocationCard";

interface ListingInfoProps {
  description: string;
  descriptors:
    | { label: string; icon: IconType; description: string }[]
    | string;

  locationValue: string;
  location: string;
  amenities: JSX.Element;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  descriptors,
  locationValue,
  location,
  amenities,
}) => {
  const parsed_description = description.replace("Description: ", "");

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="text-lg font-light text-neutral-500">
        {parsed_description}
      </div>

      <hr />
      <p className="-mb-2 text-xl font-semibold">
        Users have rated this space as
      </p>
      {descriptors && <></>}
      <hr />
      <LocationCard location={location} locationData={locationValue} />
      <hr />
      <>
        <p className="text-xl font-semibold">Notable Amenities</p>
        <div className="flex justify-start space-x-12">{amenities}</div>
      </>

      <hr />
    </div>
  );
};

export default ListingInfo;

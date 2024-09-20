"use client";

import { categoryIcon } from "@/lib/icons/navbarIcons";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

interface ListingInfoProps {
  description: string;
  locationValue: string;
  amenities: JSX.Element;
  categories: categoryIcon[];
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  locationValue,
  amenities,
  categories,
}) => {
  
  const parsed_description = description.replace("Description: ", "");
  const locations: string[] = JSON.parse(locationValue);

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="text-lg font-light text-neutral-500">
        {parsed_description}
      </div>

      <hr />
      {categories &&
        categories.map((item, index) => (
          <div className="flex flex-col gap-6" key={index}>
            <div className="flex flex-row items-center gap-4">
              <item.icon />
              <div className="flex flex-col">
                <p className="text-lg font-semibold">{item?.label}</p>
                <p className="text-neutral-500 font-light">
                  {item?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      <hr />
      <div>
        <p className="text-xl font-semibold">Explore what&apos;s nearby</p>
        <div className="flex justify-start space-x-12 pt-6">
          <div className="flex flex-col gap-3 text-lg font-light text-neutral-500">
            {locations &&
              locations.map((item, index) => (
                <div className="flex flex-row gap-2" key={index}>
                  <PlaceOutlinedIcon htmlColor="black" className="mt-1" />
                  {item}
                </div>
              ))}
          </div>
        </div>
      </div>
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

"use client";

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

interface ListingInfoProps {
  description: string;
  locationValue: string;
  amenities: JSX.Element;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  description,
  locationValue,
  amenities,
}) => {
  const parsed_description = description.replace("Description: ", "");

  const parsed_locations = locationValue.split("\n");
  parsed_locations.pop();

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="text-lg font-light text-neutral-500">
        {parsed_description}
      </div>

      <hr />
      <p className="-mb-2 text-xl font-semibold">
        This spaces is as
      </p>
      <hr />
      <div>
        <p className="text-xl font-semibold">Explore what&apos;s nearby</p>
        <div className="flex justify-start space-x-12 pt-6">
          <div className="flex flex-col gap-3 text-lg font-light text-neutral-500">
            {parsed_locations &&
              parsed_locations.map((item, index) => (
                <div className="flex flex-row gap-2" key={index}>
                  <PlaceOutlinedIcon htmlColor='black' className='mt-1' />
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

'use client';

import { HiOutlineLocationMarker } from 'react-icons/hi';

interface LocationCardProps {
  location: string;
  locationData: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  locationData
}) => {
  const locations = locationData.split('\n');
  locations.pop();

  return (
    <div>
      <p className="text-xl font-semibold">Explore what&apos;s nearby</p>
      <div className="flex justify-start space-x-12 pt-6">
        <div className="flex flex-col gap-3 text-lg font-light text-neutral-500">
          {locations &&
            locations.map((item, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <HiOutlineLocationMarker className="mt-1 text-black" />
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

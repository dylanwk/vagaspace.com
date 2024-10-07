'use client';

import { Listing, User } from '@prisma/client';
import Image from 'next/image';

interface ListingCard {
  data: Listing;
}

const ListingCard: React.FC<ListingCard> = ({ data }) => {
  const pricePerWeek = data.price * 7;
  const bed = data.bedCount > 1 ? 'beds' : 'bed';
  const guest = data.guestCount > 1 ? 'guests' : 'guest';

  return (
    <div className="group col-span-1 cursor-pointer">
      <a
        href={`/listings/${data.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full flex-col gap-1.5"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            alt="Listing"
            src={data.imageSrc}
            className="h-full w-full object-cover transition group-hover:scale-110"
            width={200}
            height={200}
            loading="lazy"
          />
        </div>
        <div className="text-lg font-semibold">{data.title}</div>
        <div className="font-light text-neutral-500 -mt-1">{data.locationExact}</div>
        <div className='font-light text-neutral-500'>{data.guestCount} {guest} • {data.bedCount} {bed}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {pricePerWeek}</div>
          <div className="font-light">week</div>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;

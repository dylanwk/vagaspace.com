'use client';

import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

interface NavSearchbarProps {}

const NavSearchbar: React.FC<NavSearchbarProps> = ({}) => {
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const locationValue = params?.get('locationValue');
  const guestCount = params?.get('guestCount');
  const categories = params
    ?.get('category')
    ?.split(',')
    .filter((category) => category !== '');

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return locationValue;
    }

    return 'Anywhere';
  }, [locationValue]);

  const guestLabel = useMemo(() => {
    if (guestCount && guestCount !== '1' && guestCount !== '0') {
      return `${guestCount} Guests`;
    } else if (guestCount && guestCount === '1') {
      return `${guestCount} Guest`;
    }

    return 'Add Guests';
  }, [guestCount]);

  const categoryLabel = useMemo(() => {
    if (categories?.length === 1) {
      return `${categories[0]}`;
    }

    if (categories && categories?.length > 1) {
      return `${categories[0]}...`;
    }

    return 'Customize';
  }, [categories]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="ml-2 w-full cursor-pointer rounded-full border-[1px] py-2 shadow-sm transition hover:shadow-md md:w-auto"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="px-8 text-sm font-semibold">{locationLabel}</div>
        <div className="hidden flex-1 border-x-[1px] px-6 text-center text-sm font-semibold sm:block">
          {guestLabel}
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm font-semibold">
          <div className="hidden sm:block">{categoryLabel}</div>
          <div className=" ml-1 rounded-full bg-primary p-2 text-white">
            <TuneOutlinedIcon fontSize='small' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSearchbar;

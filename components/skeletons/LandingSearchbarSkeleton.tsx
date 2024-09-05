"use client";
import useSearchModal from "@/app/hooks/useSearchModal";

interface LandingSearchbarSkeletonProps {
  PiMapPinBold: JSX.Element;
  MdOutlineKeyboardArrowRight: JSX.Element;
}

const LandingSearchbarSkeleton: React.FC<LandingSearchbarSkeletonProps> = ({
  PiMapPinBold,
  MdOutlineKeyboardArrowRight,
}) => {
  const searchModal = useSearchModal();

  return (
    <div onClick={searchModal.onOpen} className="relative z-20 flex cursor-pointer flex-row justify-center rounded-full border-[2px] bg-transparent py-3.5 align-middle backdrop-blur-md backdrop-filter sm:w-[550px]">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="ml-6 hidden sm:block" aria-hidden="true">
          {PiMapPinBold}
        </div>

        <div className="flex flex-1 items-center justify-center text-left font-bold">
          <div className="relative ml-4 w-full text-center text-white">
            <div className="border-1 w-full rounded-md bg-transparent p-2 text-xl font-semibold outline-none transition">
              Search Destinations
            </div>
            
          </div>
        </div>
        <div
          className="ml-2 mr-3 flex items-center justify-center rounded-full bg-primary p-3 align-middle sm:-ml-6"
          style={{ minWidth: "60px", minHeight: "60px" }}
        >
          <div className="hidden pl-4 pr-3 text-lg font-semibold text-white sm:block">
            Search
          </div>
          <span aria-hidden="true" className="text-white">{MdOutlineKeyboardArrowRight}</span>
        </div>
      </div>
    </div>
  );
};

export default LandingSearchbarSkeleton;

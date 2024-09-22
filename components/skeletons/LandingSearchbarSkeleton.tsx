"use client";
import useSearchModal from "@/app/hooks/useSearchModal";
import MapPinIcon from "@mui/icons-material/PlaceOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

interface LandingSearchbarSkeletonProps {
  
}

const LandingSearchbarSkeleton: React.FC<LandingSearchbarSkeletonProps> = ({
  
}) => {
  const searchModal = useSearchModal();

  return (
    <div onClick={searchModal.onOpen} className="relative z-20 flex cursor-pointer flex-row justify-center rounded-full border-[2px] bg-transparent py-2 align-middle backdrop-blur-md backdrop-filter w-11/12 sm:w-[550px]">
      <div className="flex w-full flex-row items-center justify-between">
        

        <div className="flex flex-1 items-center justify-center text-left font-bold">
          <div className="relative ml-4 w-full text-left text-white">
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
          <span aria-hidden="true" className="text-white"><ArrowForwardIosOutlinedIcon /></span>
        </div>
      </div>
    </div>
  );
};

export default LandingSearchbarSkeleton;

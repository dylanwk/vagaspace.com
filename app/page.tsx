import Image from "next/image";

import ChartIcon from "@mui/icons-material/ShowChartOutlined";
import GlobeIcon from "@mui/icons-material/PublicOutlined";
import MapPinIcon from "@mui/icons-material/PlaceOutlined";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

import LandingSeachbar from "@/components/searchbars/LandingSearchbar";
import LandingSearchbarSkeleton from "@/components/skeletons/LandingSearchbarSkeleton";

const Home = () => {
  return (
    <>
      <section className="relative h-[100vh] overflow-hidden bg-black px-4 py-20 sm:py-36 xl:py-60">
        <div className="absolute inset-0 z-0">
          <div className="opacity-80">
            <Image
              src="/images/rio2.webp"
              alt="Rio de Janeiro"
              quality={100}
              priority
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="z-20 mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center sm:-mt-8">
          <h1 className="z-0 text-left text-7xl font-extrabold leading-none tracking-tight text-white sm:text-center sm:text-7xl">
            Make Travel Easier. <br></br>
          </h1>
          <h1 className="z-0 mb-10 mt-5 text-left text-2xl font-extrabold leading-none  text-white sm:text-center md:mb-10">
            {" "}
            Streamline Your Search for Remote, Work-Friendly Stays.
          </h1>

          <div className="relative w-full sm:w-fit  sm:justify-center">
            <div className="hidden sm:block">
              <LandingSeachbar
                MdOutlineKeyboardArrowRight={<ArrowForwardIosOutlinedIcon />}
                PiMapPinBold={<MapPinIcon fontSize="large" />}
              />
            </div>

            <div className="sm:hidden">
              <LandingSearchbarSkeleton
                MdOutlineKeyboardArrowRight={<ArrowForwardIosOutlinedIcon />}
                PiMapPinBold={<MapPinIcon />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 -> Feature Section */}

      <div className="mx-auto h-auto max-w-6xl px-4 xl:px-0 my-8">
        <div className="grid h-full sm:h-[80vh] gap-20 md:grid-cols-2 items-center mt-4">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black lg:text-6xl">
              Tailored Spaces for Location Flexible Professionals.
            </h2>
            <p className="mt-5 text-xl text-neutral-500 font-light lg:w-3/4">
              We serve people looking to travel and work from all corners of the
              globe.
            </p>
          </div>

          <div className="space-y-8 lg:space-y-16">
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <ChartIcon fontSize="large" />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Research-Backed Spaces
                </h3>
                <p className="mt-1 text-neutral-600 text-lg font-light">
                  All spaces on Vagaspace are suited for working professionals.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <GlobeIcon fontSize="large" />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Wide Range of Sources
                </h3>
                <p className="mt-1 text-neutral-600 font-light text-lg">
                  Discover stays from platforms like Airbnb and Vrbo, to local
                  small-town travel agencies.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <ThumbUp fontSize="large" />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Trusted Spaces
                </h3>
                <p className="mt-1 text-neutral-600 font-light text-lg">
                  Every listing on Vagaspace is verified for saftey and
                  credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3 -> Approach Section */}

      <div className="mx-auto max-w-6xl px-4 py-10 lg:pt-20 xl:px-0">
        <div className="mb-10 max-w-3xl lg:mb-14">
          <h2 className="text-5xl font-bold tracking-tight text-neutral-900 md:text-4xl md:leading-tight lg:text-6xl">
            Our approach
          </h2>
          <p className="mt-3 text-neutral-600 text-lg sm:text-xl font-light">
            Our strategy combines regionial research and continuous feedback from both our team and users,
            ensuring top-quality listings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="flex">
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-black">
                <span>Mi Refugio San Angel</span>
                <span className="w-px flex-1 bg-black"></span>
                <span>Mexico City, Mexico</span>
              </time>
            </div>
            <Image
              className="h-[490px] w-[380px] rounded-xl object-cover md:h-[600px] md:w-[460px]"
              src={"/images/laReformaSpace.png"}
              alt="LaReforma House"
              width={460}
              height={600}
              quality={100}
            />
          </div>

          <div className="h-full">
            <div className="mb-4">
              <h3 className="text-xs font-medium uppercase text-[#8B0000]">
                Steps
              </h3>
            </div>

            <div className="ms-1 flex gap-x-5">
              <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                <div className="size-8 relative z-10 flex items-center justify-center">
                  <span className="ml-1 size-8 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#8B0000]">
                    1
                  </span>
                </div>
              </div>

              <div className="grow pb-8 pt-0.5 sm:pb-20">
                <p className="text-md text-neutral-600 font-light lg:text-lg">
                  <span className="font-semibold text-black lg:text-lg">
                    Location Research:
                  </span>{" "}
                  Our Team finds new trending locations
                  by researching destinations for work-travel compatibility.
                </p>
              </div>
            </div>

            <div className="ms-1 flex gap-x-5">
              <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                <div className="size-8 relative z-10 flex items-center justify-center">
                  <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#8B0000]">
                    2
                  </span>
                </div>
              </div>

              <div className="grow pb-8 pt-0.5 sm:pb-20">
                <p className="text-md text-neutral-600 lg:text-lg font-light">
                  <span className="font-semibold text-black lg:text-lg">
                    Remote Work Compatibility:
                  </span>{" "}
                  Our Team evaluates a large set of listings and filters based on 
                  several criteria including price competitveness, wifi strength, etc.

                </p>
              </div>
            </div>

            <div className="ms-1 flex gap-x-5">
              <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                <div className="size-8 relative z-10 flex items-center justify-center">
                  <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#8B0000]">
                    3
                  </span>
                </div>
              </div>

              <div className="grow pb-8 pt-0.5 sm:pb-20">
                <p className="text-md text-neutral-600 md:text-lg font-light">
                  <span className="font-semibold text-black lg:text-lg">
                    Quality Assurance:
                  </span>{" "}
                  Every space is hand selected and reviewed before entering our
                  database, ensuring complete trust and saftey.
                </p>
              </div>
            </div>

            <div className="ms-1 flex gap-x-5">
              <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:bg-neutral-700 last:after:hidden">
                <div className="size-8 relative z-10 flex items-center justify-center">
                  <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#8B0000]">
                    4
                  </span>
                </div>
              </div>

              <div className="grow pb-8 pt-0.5 sm:pb-12">
                <p className="text-md text-neutral-600 md:text-lg font-light">
                  <span className="font-semibold text-black lg:text-lg">
                    Community Feedback:
                  </span>{" "}
                  We activley seek out our users&apos; feedback of the spaces they have visisted in order 
                  to ensure we only promote quality spaces. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

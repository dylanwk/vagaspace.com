import Image from "next/image";
import ClientOnly from "@/components/ClientOnly";
import { FiThumbsUp } from "react-icons/fi";
import { FaChartLine, FaGlobe } from "react-icons/fa";
import { PiMapPinBold } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LandingSeachbar from "@/components/searchbars/LandingSearchbar";
import { Button } from "@/components/ui/button";
import useSearchModal from "./hooks/useSearchModal";
import LandingSearchbarSkeleton from "@/components/skeletons/LandingSearchbarSkeleton";
//import AutoCompleteInput from '@/components/inputs/AutoCompleteInput';

const Home = () => {
  return (
    <ClientOnly>
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
            Simplify your Journey. <br></br>
          </h1>
          <h1 className="z-0 mb-10 mt-5 text-left text-2xl font-extrabold leading-none  text-white sm:text-center md:mb-10">
            {" "}
            Streamline Your Search for Remote, Work-Friendly Stays.
          </h1>

          <div className="relative w-full sm:w-fit  sm:justify-center">
            <div className="hidden sm:block">
              <LandingSeachbar
                MdOutlineKeyboardArrowRight={
                  <MdOutlineKeyboardArrowRight size={28} color="white" />
                }
                PiMapPinBold={<PiMapPinBold size={30} color="white" />}
              />
            </div>

            <div className="sm:hidden">
              <LandingSearchbarSkeleton
                MdOutlineKeyboardArrowRight={
                  <MdOutlineKeyboardArrowRight size={28} color="white" />
                }
                PiMapPinBold={<PiMapPinBold size={30} color="white" />}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex h-[90vh] max-w-6xl flex-col justify-center px-4 xl:px-0 my-8">
        <div className="grid justify-center gap-20 align-middle md:grid-cols-2">
          <div className="align-middle">
            <div className="flex flex-col align-middle">
              <h2 className="text-5xl font-bold tracking-tight text-gray-800 lg:text-6xl">
                Tailored Spaces for Modern Remote Workers.
              </h2>
              <p className="mt-3 text-lg text-gray-800 lg:w-3/4">
                We serve location flexible professionals looking to travel and
                work from all corners of the globe.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:space-y-16">
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <FaChartLine size={30} />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Research-Backed Spaces
                </h3>
                <p className="mt-1 text-gray-600">
                  All spaces on Vagaspace are safe, remote-work visa friendly,
                  and suitable for any traveler looking to also work.{" "}
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <FaGlobe size={30} />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Wide Range of Sources
                </h3>
                <p className="mt-1 text-gray-600">
                  Discover stays from popular platforms like Airbnb, Vrbo, and
                  Expedia curated for remote work compatibility.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="mx-auto inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full text-gray-800">
                <FiThumbsUp size={30} />
              </span>
              <div className="grow">
                <h3 className="font-semibold tracking-tight text-gray-800 sm:text-2xl">
                  Trusted Spaces
                </h3>
                <p className="mt-1 text-gray-600">
                  Every space is verified for credibility before being listed,
                  giving you peace of mind during your search and stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-10 lg:pt-20 xl:px-0">
          <div className="mb-10 max-w-3xl lg:mb-14">
            <h2 className="text-5xl font-semibold tracking-tight text-white md:text-4xl md:leading-tight lg:text-6xl">
              Our approach
            </h2>
            <p className="mt-3 text-neutral-400">
              Our comprehensive strategy combines market research, advanced data
              analysis, and continuous feedback from both our team and users,
              ensuring top-quality listings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="flex">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-white">
                  <span>Mi Refugio San Angel</span>
                  <span className="w-px flex-1 bg-white"></span>
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
                <h3 className="text-xs font-medium uppercase text-[#ff0]">
                  Steps
                </h3>
              </div>

              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                  <div className="size-8 relative z-10 flex items-center justify-center">
                    <span className="ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#ff0]">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pb-8 pt-0.5 sm:pb-20">
                  <p className="text-sm text-neutral-400 lg:text-base">
                    <span className="font-semibold text-white lg:text-lg">
                      Location Research:
                    </span>{" "}
                    Our dedicated Outreach Team identifies trending locations
                    based on popularity, availability of work visas, and remote
                    work compatibility.
                  </p>
                </div>
              </div>

              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                  <div className="size-8 relative z-10 flex items-center justify-center">
                    <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#ff0]">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pb-8 pt-0.5 sm:pb-20">
                  <p className="text-sm text-neutral-400 lg:text-base">
                    <span className="font-semibold text-white lg:text-lg">
                      Remote Work Compatibility Analysis:
                    </span>{" "}
                    Scripts aggreate listings from multiple sources and evaluate
                    listings based on criteria such as remote work capabilities,
                    and price competitiveness.
                  </p>
                </div>
              </div>

              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:w-px after:-translate-x-[0.5px] after:bg-neutral-700 last:after:hidden">
                  <div className="size-8 relative z-10 flex items-center justify-center">
                    <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#ff0]">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pb-8 pt-0.5 sm:pb-20">
                  <p className="text-sm text-neutral-400 md:text-base">
                    <span className="font-semibold text-white lg:text-lg">
                      Quality Assurance:
                    </span>{" "}
                    The Vagaspace team reviews and manually adds listings to our
                    database, ensuring each listing meets our high standards.
                  </p>
                </div>
              </div>

              <div className="ms-1 flex gap-x-5">
                <div className="relative after:absolute after:bottom-0 after:start-4 after:top-8 after:bg-neutral-700 last:after:hidden">
                  <div className="size-8 relative z-10 flex items-center justify-center">
                    <span className="size-8 ml-1 flex flex-shrink-0 items-center justify-center rounded-full border border-neutral-700 p-2 text-xs font-semibold uppercase text-[#ff0]">
                      4
                    </span>
                  </div>
                </div>

                <div className="grow pb-8 pt-0.5 sm:pb-12">
                  <p className="text-sm text-neutral-400 md:text-base">
                    <span className="font-semibold text-white lg:text-lg">
                      Community Feedback:
                    </span>{" "}
                    Our community of users rates and reviews their stays,
                    providing ongoing feedback to maintain and improve listing
                    quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  );
};

export default Home;

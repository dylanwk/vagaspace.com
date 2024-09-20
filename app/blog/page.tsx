import { Button } from "@/components/ui/button";
import { getCategorizedArticles } from "@/lib/articles";
import Link from "next/link";
import ArticleItemList from "./ArticleItemList";
import Image from "next/image";

export default function Blog() {
  const articles = getCategorizedArticles();

  return (
    <>
      <section className="relative h-[80vh] overflow-hidden bg-black px-4 py-20 sm:py-36 xl:py-60">
        <div className="absolute inset-0 z-0">
          <div className="opacity-60">
            <Image
              src="/images/andreas-brucker-lisbon-picture.jpg"
              alt="Lisbon Portugal"
              quality={100}
              priority
              sizes="100vw"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="z-20 mx-auto flex h-full max-w-7xl flex-col mt-12 items-center justify-center text-center ">
          <h1 className="z-0 text-left text-4xl font-extrabold leading-none tracking-tight text-white sm:text-center sm:text-5xl">
          Nomad Life Hacks
          and Housing Guides. <br></br>
          </h1>
          <h1 className="z-0 mb-10 max-w-2xl mt-5 text-left text-lg sm:text-2xl font-normal leading-none  text-white sm:text-center md:mb-10">
            {" "}
            Learn how to find the best housing and how to pick your remote work destinations around the world.
          </h1>
        </div>
       
      </section>

      {/*-- <!--Container--> --*/}
      <div className="mx-auto max-w-screen-xl px-4 md:px-4">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles !== null &&
              Object.keys(articles).map((article) => (
                <ArticleItemList
                  category={article}
                  articles={articles[article]}
                  key={article}
                />
              ))}
          </div>
        </div>
      </div>

      <div className="flex w-full items-center p-8 font-sans md:p-14">
        <div className="mr-4 h-10 w-10 rounded-full text-4xl">🌴</div>

        <div className="flex-1">
          <p className="mr-6 text-base font-bold leading-none md:text-xl">
            Want to write for us?
          </p>
          <p className="hidden text-xs text-gray-600 sm:block md:text-base">
            Share your expert tips and city guides! Join Vagaspace as a writer
            and help others discover new destinations.{" "}
          </p>
        </div>
        <div className="justify-end">
          <Link href="/blog/write-for-us">
            <Button className="rounded-full border border-primary bg-transparent px-4 py-2 text-xs font-bold text-gray-500 hover:text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

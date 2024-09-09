import { ArticleItem } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
  articles: ArticleItem[];
}

const ArticleItemList = ({ category, articles }: Props) => {
  return (
    <>
      {articles.map((article, id) => (
        <Link
          className="group flex flex-col focus:outline-none"
          href={`/blog/${article.id}`}
          key={id}
        >
          <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <Image
              className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              src={article.image}
              alt="Blog Image"
              height={400}
              width={400}
              blurDataURL="data..."
              placeholder="blur"
              loading="lazy"
            />
          </div>

          <div className="mt-7">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
              {article.title}
            </h3>
            <p className="mt-3 text-gray-800 dark:text-neutral-200">
              {article.description}
            </p>
            <p className="mt-5 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 group-hover:underline group-focus:underline font-medium dark:text-blue-500">
              Read more
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ArticleItemList;

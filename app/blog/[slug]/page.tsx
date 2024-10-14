import Link from "next/link";
import { getArticleData } from "@/lib/articles";
import { ArrowLeft } from "@mui/icons-material";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  // no author no media
  const hasAuthor = articleData.author !== "";

  let authorMedia = <></>;

  if (hasAuthor) {
    authorMedia = (
      <div className="flex justify-between items-center mb-6">
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
          <div className="shrink-0">
            <img
              className="size-12 rounded-full object-cover"
              src={articleData.authorImage}
              alt="Avatar"
            />
          </div>

          <div className="grow">
            <div className="flex justify-between items-center gap-x-2">
              <div>
                <div className="hs-tooltip [--trigger:hover] [--placement:bottom] inline-block">
                  <div className="hs-tooltip-toggle sm:mb-1 block text-start cursor-pointer">
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                      {articleData.author}
                    </span>
                  </div>
                </div>

                <ul className="text-xs text-gray-500 dark:text-neutral-500">
                  <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                    {articleData.date}
                  </li>
                  <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
                    {articleData.readTime}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    authorMedia = (
      <div className="flex justify-between items-center mb-6 -mt-2">
        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
          <ul className="text-sm text-gray-500 dark:text-neutral-500">
            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
              {articleData.date}
            </li>
            <li className="inline-block relative pe-6 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:size-1 before:bg-gray-300 before:rounded-full dark:text-neutral-400 dark:before:bg-neutral-600">
              {articleData.readTime}
            </li>
          </ul> 
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-2 flex w-10/12 flex-col gap-5 md:w-1/2">
      <div className="flex items-center justify-between flex-row">
        <Link
          className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline dark:text-blue-500"
          href="/blog"
        >
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Blog
        </Link>
      </div>

      <div className="pt-6 pb-3 text-left text-3xl font-extrabold tracking-tight md:text-5xl">
        {articleData.title}
      </div>

      {/* Media */}
      {authorMedia}
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;

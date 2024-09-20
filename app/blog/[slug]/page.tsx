import Link from 'next/link';
import { getArticleData } from '@/lib/articles';
import { ArrowLeft } from '@mui/icons-material';

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="mx-auto mt-2 flex w-10/12 flex-col gap-5 md:w-1/2">
      <div className="flex items-center justify-between flex-row">
        <Link href={'/blog'} className="flex flex-row gap-1">
          <ArrowLeft />
          <p className="text-sm mt-0.5">Back to Home</p>
        </Link>
        <p className="text-sm">{articleData.date}</p>
      </div>
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
};

export default Article;

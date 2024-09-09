import Link from 'next/link';
import { getArticleData } from '@/lib/articles';
import { ArrowLeft } from '@mui/icons-material';

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

  return (
    <section className="mx-auto mt-8 flex w-10/12 flex-col gap-5 md:w-1/2">
      <div className="flex flex-col items-center justify-between font-bold md:flex-row">
        <Link href={'/blog'} className="flex flex-row place-items-center gap-1">
          <ArrowLeft />
          <p className="text-sm">Back to Home</p>
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

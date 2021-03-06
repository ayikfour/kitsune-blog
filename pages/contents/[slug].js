import dynamic from 'next/dynamic';
import Date from '../../components/date';
import Header from '../../components/header';
import ReadTime from '../../components/read-time';
import CodeIcon from '../../components/icons/code';
import { getAllContentSlugs, getContentBySlug } from '../../lib/contents';

const Layout = dynamic(() => import('../../components/layout'));
const Image = dynamic(() =>
   import('../../components/image').then((mod) => mod.default)
);

export default function Post({
   title,
   description = null,
   cover = null,
   coverAlt,
   date,
   readingTime,
   renderedHTML,
}) {
   const getArticleClassName = () => {
      return cover ? 'top-0 md:pt-4 pb-16' : 'pt-16 md:pt-32 pb-16';
   };

   return (
      <Layout>
         <Header
            title={title}
            og={cover ? cover : null}
            description={description}
         />
         <article className={getArticleClassName()}>
            {cover ? (
               <div className='justify-center my-12 md:-mx-16'>
                  <Image
                     id='cover-content'
                     url={cover}
                     alt={coverAlt}
                     className='relative w-full rounded-sm object-cover mb-4 shadow-lg'
                  />
                  <h6 className='text-center text-medium-emphasize'>
                     {coverAlt}
                  </h6>
               </div>
            ) : (
               ''
            )}
            <h1 className='mb-4 pt-4 md:text-6xl break-words md:break-words'>
               {title}
            </h1>
            <div className='flex mb-12 flex-row items-center'>
               <ReadTime time={readingTime} />
               <span className='mx-2'>––</span>
               <Date dateString={date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
         </article>
      </Layout>
   );
}

export async function getStaticPaths() {
   const paths = await getAllContentSlugs();
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params, preview = null }) {
   const content = await getContentBySlug(params.slug);

   return {
      props: {
         ...content,
      },
   };
}

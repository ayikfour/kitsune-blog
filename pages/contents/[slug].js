import dynamic from 'next/dynamic';
import Date from '../../components/date';
import Header from '../../components/header';
import ReadTime from '../../components/read-time';
import { getContentPaths, getContentBySlug } from '../../lib/api';
import renderMarkdown from '../../lib/render-markdown';
import ImageComponent from '../../components/image';

const Layout = dynamic(() => import('../../components/layout'));
const Image = dynamic(() =>
   import('react-datocms/dist/Image').then((mod) => mod.Image)
);

export default function Post({
   title,
   description = null,
   cover = null,
   createdAt,
   readingTime,
   contentHtml,
   content,
}) {
   const getArticleClassName = () => {
      return cover ? 'pt-16 md:pt-4 pb-16' : 'pt-16 md:pt-32 pb-16';
   };

   const renderedHTML = renderMarkdown(content);

   return (
      <Layout>
         <Header
            title={title}
            og={cover ? cover.responsiveImage.src : null}
            description={description}
         />
         <article className={getArticleClassName()}>
            {cover ? (
               <div className='justify-center my-12'>
                  <Image
                     data={cover.responsiveImage}
                     className='rounded-sm object-cover mb-4 md:-mx-16 shadow-lg'
                     lazyLoad={true}
                  />
                  <h6 className='text-center text-outline'>
                     {cover.responsiveImage?.alt}
                  </h6>
               </div>
            ) : null}
            <h1 className='mb-4 pt-4 md:text-6xl break-words md:break-words'>
               {title}
            </h1>
            <div className='flex mb-12 flex-row items-center'>
               <ReadTime content={content} />
               <span className='mx-2'>––</span>
               <Date dateString={createdAt} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: renderedHTML }} />
         </article>
      </Layout>
   );
}

export async function getStaticPaths() {
   const paths = await getContentPaths();

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params, preview = null }) {
   const content = await getContentBySlug(params.slug, preview);

   return {
      props: {
         ...content,
      },
   };
}

import dynamic from 'next/dynamic';
import Date from '../../components/date';
import { getAllContentIds, getContentData } from '../../lib/contents';
import Header from '../../components/header';
import LazyLoad from 'react-lazy-load';
// import Layout from '../../components/layout';
// import Image from '../../components/image';

const Image = dynamic(() => import('../../components/image'));
const Layout = dynamic(() => import('../../components/layout'));

export default function Post({
   title,
   description = null,
   cover = null,
   date,
   readingTime,
   contentHtml,
}) {
   const getArticleClassName = () => {
      return cover ? 'pt-16 md:pt-16 pb-16' : 'pt-16 md:pt-32 pb-16';
   };

   return (
      <Layout>
         <Header title={title} og={cover} description={description} />
         <article className={getArticleClassName()}>
            <LazyLoad className='mb-16'>
               <Image title={title} cover={cover} className='mb-16' />
            </LazyLoad>
            <h1 className='mb-4'>{title}</h1>
            <Date date={date} readingTime={readingTime} />
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
         </article>
      </Layout>
   );
}

export async function getStaticPaths() {
   const paths = getAllContentIds();
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params }) {
   const contentData = await getContentData(params.id);
   return {
      props: {
         ...contentData,
      },
   };
}

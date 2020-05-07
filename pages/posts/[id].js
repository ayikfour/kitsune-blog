import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';
import { getAllContentIds, getContentData } from '../../lib/contents';
import Header from '../../components/header';
import ModalImage from 'react-modal-image';
import Image from '../../components/image';

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
            <Image title={title} cover={cover} className='mb-16' />
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

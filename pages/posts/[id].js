import Layout from '../../components/layout';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import { getAllContentIds, getContentData } from '../../lib/contents';

export default function Post({ title, date, contentHtml }) {
   return (
      <Layout>
         <Head>
            <title>{title}</title>
         </Head>
         <article className='py-32'>
            <h1>{title}</h1>
            <p>
               <Date dateString={date} />
            </p>
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
   const { title, date, contentHtml } = await getContentData(params.id);
   return {
      props: {
         title,
         date,
         contentHtml,
      },
   };
}

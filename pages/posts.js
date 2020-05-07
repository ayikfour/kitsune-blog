import Layout, { siteTitle } from '../components/layout';
import { getSortedContentsData } from '../lib/contents';
import Header from '../components/header';
import ContentList from '../components/contents/content-list';

const pageTitle = `Overthought – ${siteTitle}`;

export default function Posts({ allPostsData }) {
   return (
      <Layout>
         <Header title={pageTitle} />
         <section className='pt-16 md:pt-32'>
            <div className='flex flex-col'>
               <div className='mb-16'>
                  <h2 className='mb-4'>
                     <span>Overthought</span>
                  </h2>
                  <p>
                     This is my 2 cent's of overthinking result about design,
                     tech, movies, anime, etc etc...
                  </p>
               </div>
               <ContentList data={allPostsData} />
            </div>
         </section>
      </Layout>
   );
}

export function getStaticProps() {
   const allPostsData = getSortedContentsData();
   return {
      props: {
         allPostsData,
      },
   };
}

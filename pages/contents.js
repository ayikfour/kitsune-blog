import Layout, { siteTitle } from '../components/layout';
import Header from '../components/header';
import ContentList from '../components/contents/content-list';
import { getAllContentsWithLimit } from '../lib/api';

const pageTitle = `Thoughttts – ${siteTitle}`;

export default function Posts({ allContents }) {
   return (
      <Layout>
         <Header title={pageTitle} />
         <section className='pt-16 md:pt-32'>
            <div className='flex flex-col'>
               <div className='mb-16'>
                  <h2 className='mb-4'>
                     <span>Thoughttts</span>
                  </h2>
                  <p>
                     This is my 2 cent's of overthinking result about design,
                     tech, movies, anime, etc etc...
                  </p>
               </div>
               <ContentList data={allContents} />
            </div>
         </section>
      </Layout>
   );
}

export async function getStaticProps() {
   const allContents = await getAllContentsWithLimit(15);

   return {
      props: {
         allContents,
      },
   };
}

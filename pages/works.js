import Layout, { siteTitle } from '../components/layout';
import { getSortedWorksData } from '../lib/works';
import Header from '../components/header';
import ContentList from '../components/contents/content-list';
import WorkList from '../components/works/work-list';

const pageTitle = `Works – ${siteTitle}`;
const description = `I'm impulsively trying something new. Overdo anything until
I'm satisfied. Especially in design, dev, and something
aesthetic.`;

export default function Works({ allWorksData }) {
   return (
      <Layout>
         <Header title={pageTitle} />
         <section className='pt-16 md:pt-32 mb-16'>
            <div className='flex flex-col'>
               <div className='mb-16'>
                  <h2 className='mb-4'>
                     <span>Works</span>
                  </h2>
                  <p>{description}</p>
               </div>
               <WorkList data={allWorksData} />
            </div>
         </section>
      </Layout>
   );
}

export function getStaticProps() {
   const allWorksData = getSortedWorksData();
   return {
      props: {
         allWorksData,
      },
   };
}

import Layout, { siteTitle } from '../components/layout';
import { getSortedWorksData } from '../lib/works';
import Header from '../components/header';
import WorkGrid from '../components/works/work-grid';

const pageTitle = `Works – ${siteTitle}`;
const description = `I'm impulsively trying something new. Overdo anything until
I'm satisfied. Especially in design, dev, and something
aesthetic.`;

const WorkItems = ({ data }) => {
   return data.map((work) => {
      return (
         <div className='work-item-card list-item p-4 rounded-md hover:bg-bg hover:shadow-xl transform hover:-translate-y-4 transition duration-500 ease-in-out'>
            <Link href={work.link} external={work.external}>
               <Image
                  url={work.cover}
                  title={work.title}
                  className='h-64 w-full'
               />
            </Link>
         </div>
      );
   });
};

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
               <WorkGrid data={allWorksData} />
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

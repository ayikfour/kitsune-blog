import Header from '../components/header';
import ContentList from '../components/contents/content-list';
import WorkList from '../components/works/work-list';
import Layout, { siteTitle } from '../components/layout';
import Section from '../components/section/section';
import { getSortedContentsData } from '../lib/contents';
import { getSortedWorksData } from '../lib/works';
import Link from '../components/link';

const description = `The Pragmatic designer, sometime do code for fun, impulsively trying
something new. This website containing my writing, works,
passion, and of course about me ✌`;

export default function Home({ allContentsData, allWorksData }) {
   return (
      <Layout home className='mb-32 min-h-screen'>
         <Header title={siteTitle} description={description} />
         <section className='pt-16 md:pt-40'>
            <h2 className='mb-8 md:mb-16'>
               <span className='font-thin'>Hello, I'm</span> <br />
               Arif Eka Brilian
            </h2>
            <p>
               An{' '}
               <Link external href='https://www.dribbble.com/ayikfour'>
                  user Interface Designer
               </Link>{' '}
               –– The Pragmatic, sometime do code for fun, impulsively trying
               something new. This website containing my writing, works,
               passion, and of course about me ✌
            </p>
         </section>
         <Section name='Overthought' href='/posts'>
            <ContentList data={allContentsData} />
         </Section>
         <Section name='Works' href='/works'>
            <WorkList data={allWorksData} home />
         </Section>
      </Layout>
   );
}

export async function getStaticProps() {
   const allContentsData = getSortedContentsData();
   const allWorksData = getSortedWorksData();

   return {
      props: {
         allContentsData,
         allWorksData,
      },
   };
}

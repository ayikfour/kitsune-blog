import Header from '../components/header';
import ContentList from '../components/contents/content-list';
import WorkList from '../components/works/work-list';
import Layout, { siteTitle } from '../components/layout';
import Section from '../components/section/section';
import { getSortedWorksData } from '../lib/works';
import { getSortedContentsMetadata } from '../lib/contents';
import Link from '../components/link';
import { useHotkeys } from 'react-hotkeys-hook';
import { useState } from 'react';
import Commander from '../components/commander';

const description = `The Pragmatic designer, sometime do code for fun, impulsively trying
something new. This website containing my writing, works,
passion, and of course about me ✌`;

export default function Home({ allContentsData, allWorksData }) {
   return (
      <Layout home>
         <Header title={siteTitle} description={description} />
         <section className='pt-32 md:pt-40'>
            <h2 className='mb-8 md:mb-12'>Arif Eka Brilian</h2>
            <p>
               An{' '}
               <Link external href='https://www.dribbble.com/ayikfour'>
                  User Interface Designer
               </Link>{' '}
               –– The Pragmatic, sometime do code for fun, impulsively trying
               something new. This website containing my writing, works,
               passion, and of course about me.
            </p>
         </section>
         <Section name='Thoughts' href='/contents'>
            <ContentList data={allContentsData} />
         </Section>
         <Section name='Works' href='/works'>
            <WorkList data={allWorksData} home />
         </Section>
      </Layout>
   );
}

export async function getStaticProps() {
   const allContentsData = await getSortedContentsMetadata();
   const allWorksData = getSortedWorksData();

   return {
      props: {
         allContentsData,
         allWorksData,
      },
   };
}

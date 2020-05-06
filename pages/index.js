import Head from 'next/head';
// import Link from 'next/link';
import ContentList from '../components/contents/content-list';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedContentsData } from '../lib/contents';
import useDarkMode from 'use-dark-mode';
import Link from '../components/link';

export default function Home({ allPostsData }) {
   const darkMode = useDarkMode(true);
   return (
      <Layout home className='mb-32 min-h-screen'>
         <Head>
            <title>{siteTitle}</title>
         </Head>
         <section className='pt-24 md:pt-40'>
            <h2 className='mb-8 md:mb-16'>
               <span className='font-thin'>Hello, I'm</span> <br />
               Arif Eka Brilian
            </h2>
            <p>
               <Link external href='https://www.dribbble.com/ayikfour'>
                  User Interface Designer
               </Link>{' '}
               –– The Pragmatic, sometime do code for fun, impulsively trying
               something new. This website containing my writing, works,
               passion, and of course about me ✌
            </p>
         </section>
         <section className='pt-32'>
            <div className='flex flex-col'>
               <h2 className='space-x-2'>
                  <span>Overthought</span>
                  <span className='font-light text-dim'>/</span>
                  <span className='font-light text-dim'>see all →</span>
               </h2>
               <ContentList data={allPostsData} />
            </div>
         </section>
      </Layout>
   );
}

export async function getStaticProps() {
   const allPostsData = getSortedContentsData();
   return {
      props: {
         allPostsData,
      },
   };
}

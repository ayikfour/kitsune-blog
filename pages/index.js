import Head from 'next/head';
import Header from '../components/header';
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
         <Header title={siteTitle} />
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
         <section className='pt-32'>
            <div className='flex flex-col'>
               <div className='flex flex-col md:flex-row md:items-end md:space-x-2 mb-8 md:mb-16'>
                  <h2>
                     <span>Overthought</span>
                  </h2>
                  <p className='font-light text-accent-3'>
                     <Link href='/posts' className='no-underline'>
                        / see all →
                     </Link>
                  </p>
               </div>
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

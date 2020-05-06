import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from './navbar/navbar';
import Header from './header';

const name = 'Ayik Four';
export const siteTitle = 'Ayikfour';

export default function Layout({ children, home }) {
   return (
      <div className=' '>
         <Navbar />
         <Header title={siteTitle} />
         <main className='mx-auto px-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl md:px-0'>
            <div>{children}</div>
            {!home && (
               <div className='mb-16'>
                  <Link href='/'>
                     <a>← Back to home</a>
                  </Link>
               </div>
            )}
         </main>
      </div>
   );
}

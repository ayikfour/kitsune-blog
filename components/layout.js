import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from './navbar/navbar';
import Header from './header';
import Footer from './layouts/footer';

const name = 'Ayik Four';
export const siteTitle = 'Ayik Four';

export const containerStyle =
   'px-4 max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl md:px-0';

export default function Layout({ children, home }) {
   return (
      <div className=''>
         <Navbar />
         <Header title={siteTitle} />
         <main className={`mx-auto ${containerStyle}`}>
            <div>{children}</div>
            {!home && (
               <div>
                  <Link href='/'>
                     <a>← Back to home</a>
                  </Link>
               </div>
            )}
         </main>
         <Footer />
      </div>
   );
}

import Head from 'next/head';
import styles from './layout.module.css';
import Link from './link';
import Navbar from './navbar/navbar';
import Header from './header';
import Footer from './layouts/footer';

const name = 'Ayik Four';
export const siteTitle = 'Ayik Four';

export const containerStyle =
   'px-4 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl md:px-0';

export default function Layout({ children, home }) {
   return (
      <div className='min-h-screen flex flex-col'>
         <Navbar />
         <main className={`mx-auto flex-1 ${containerStyle}`}>
            <div>{children}</div>
            {!home && (
               <div className='mt-16'>
                  <Link href='/'>← Back to home</Link>
               </div>
            )}
         </main>
         <Footer />
      </div>
   );
}

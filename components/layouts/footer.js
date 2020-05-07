import { containerStyle } from '../layout';
import ButtonGlyph from '../buttons/button-glyph';
import At from '../icons/at';
import Link from '../link';

export default function Footer() {
   return (
      <footer className='w-full mt-32 border-t'>
         <div className={`flex justify-between mx-auto py-4 ${containerStyle}`}>
            <div>
               <Link href='/' className=''>
                  キツネ –– 2020
               </Link>
            </div>
            <div className='space-x-4'>
               <Link href='https://www.twitter.com/paswotnya'>@</Link>
               <Link href='https://www.dribbble.com/ayikfour'>dribbble</Link>
               <Link href='https://www.instagram.com/ayikfour4'>photos</Link>
               <Link href='https://www.linkedin.com/in/ayikfour4/'>
                  linkedin
               </Link>
            </div>
         </div>
      </footer>
   );
}

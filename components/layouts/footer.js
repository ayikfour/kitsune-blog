import { containerStyle } from '../layout';
import ButtonGlyph from '../buttons/button-glyph';
import At from '../icons/at';
import Link from '../link';

const links = [
   { name: '@', href: 'https://www.twitter.com/paswotnya' },
   { name: 'dribbble', href: 'https://www.dribbble.com/ayikfour' },
   { name: 'photos', href: 'https://www.instagram.com/ayikfour_' },
   { name: 'linkedin', href: 'https://www.linkedin.com/in/ayikfour4/' },
];

export default function Footer() {
   return (
      <footer className='w-full mt-32 border-t bottom-0'>
         <div
            className={`flex justify-center md:justify-between mx-auto py-4 ${containerStyle}`}
         >
            <div className='hidden md:block'>
               <Link
                  href='mailto:ayikfour@gmail.com'
                  external
                  className='text-fg'
               >
                  👋say hi
               </Link>
            </div>
            <div className='space-x-4'>
               {links.map(({ name, href }) => (
                  <Link key={name} href={href} className='text-fg'>
                     {name}
                  </Link>
               ))}
            </div>
         </div>
      </footer>
   );
}

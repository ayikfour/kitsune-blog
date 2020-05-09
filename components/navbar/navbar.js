import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import CommandIcon from '../icons/command';
import Link from '../link';
import { containerStyle } from '../layout';

const links = [
   { name: 'Overthought', href: '/posts' },
   { name: 'Workkks', href: '/works' },
];

export default function Navbar({ page }) {
   return (
      <nav className='w-screen sticky top-0 mt-8 md:mt-16 py-4 z-50'>
         <div
            className={`flex mx-auto sticky top-0 justify-between ${containerStyle}`}
         >
            <div className='flex flex-row md:flex-row flex-shrink-0 -ml-2 mr-2'>
               <div>
                  <ButtonGlyph fileName='command' href='/'>
                     <CommandIcon />
                  </ButtonGlyph>
               </div>
               <div className=''>
                  <ButtonToggle />
               </div>
            </div>
            <div className='flex flex-row items-center space-x-4 '>
               {links.map(({ name, href }) => (
                  <Link key={name} href={href} className='text-fg'>
                     {name}
                  </Link>
               ))}
            </div>
         </div>
      </nav>
   );
}

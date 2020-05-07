import NavbarLink from './navbar-link';
import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import useDarkMode from 'use-dark-mode';
import MoonIcon from '../icons/moon';
import CommandIcon from '../icons/command';
import GlyphIcon from '../icons/glyph';
import Link from '../link';
import AtIcon from '../icons/at';
import { containerStyle } from '../layout';

export default function Navbar({ page }) {
   const darkMode = useDarkMode(true);
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
               <Link href='/posts'>Overthought</Link>
               <Link href='/works'>Works</Link>
               <Link href=''>About</Link>
            </div>
         </div>
      </nav>
   );
}

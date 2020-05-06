import NavbarLink from './navbar-link';
import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import useDarkMode from 'use-dark-mode';
import MoonIcon from '../icons/moon';
import CommandIcon from '../icons/command';
import Link from '../link';

export default function Navbar({ page }) {
   const darkMode = useDarkMode(true);
   return (
      <nav className='w-screen sticky top-0 mt-8 md:mt-16 py-4'>
         <div className='flex mx-auto justify-between px-4 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl md:px-0'>
            <div className='flex flex-row md:flex-row flex-shrink-0 -ml-2 mr-2'>
               <div>
                  <ButtonGlyph fileName='command' href='/'>
                     <CommandIcon />
                  </ButtonGlyph>
               </div>
               <div className='hidden md:block'>
                  <ButtonToggle />
               </div>
            </div>
            <div className='flex flex-row items-center space-x-1 '>
               <NavbarLink text='Writings' href='/' />
               <NavbarLink text='Works' />
               <NavbarLink text='About' />
            </div>
         </div>
      </nav>
   );
}

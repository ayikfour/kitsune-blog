import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import CommandIcon from '../icons/command';
import ChevronDown from '../icons/chevron-down';
import Link from '../link';
import { containerStyle } from '../layout';
import { useState } from 'react';

const links = [
   { name: 'Overthought', href: '/contents' },
   { name: 'Workkks', href: '/works' },
];

const navbarStyle = `flex flex-col md:flex-row mx-auto sticky top-0 justify-between`;

export default function Navbar({ page }) {
   const [visibility, setVisibility] = useState(false);

   const handleClick = () => {
      setVisibility(!visibility);
   };

   return (
      <nav className='w-screen top-0 mt-8 md:mt-16 py-2 z-50'>
         <div className={`${navbarStyle} ${containerStyle}`}>
            <div className='flex flex-row md:flex-row md:justify-start justify-between flex-shrink-0 -ml-2 -mr-2 md:mr-2'>
               <div>
                  <ButtonGlyph href='/'>
                     <CommandIcon />
                  </ButtonGlyph>
                  <ButtonToggle />
               </div>
               <div
                  onClick={handleClick}
                  className='self-end self-center md:hidden p-2'
               >
                  <ChevronDown />
               </div>
            </div>
            <div
               id='dropdown'
               className={`flex flex-col items-start md:flex-row md:items-center md:space-x-4 md:inline-flex my-6 md:my-0 transition-all duration-300 ${
                  visibility ? 'inline-flex' : 'hidden'
               }`}
            >
               {links.map(({ name, href }) => (
                  <Link key={name} href={href} className='text-fg mt-2 md:mt-0'>
                     {name}
                  </Link>
               ))}
            </div>
         </div>
      </nav>
   );
}

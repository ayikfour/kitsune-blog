import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import CommandIcon from '../icons/command';
import ChevronDown from '../icons/chevron-down';
import Link from '../link';
import { containerStyle } from '../layout';
import { useState } from 'react';

const links = [
   { name: 'Thoughttts', href: '/contents' },
   { name: 'Workkks', href: '/works' },
];

const navbarStyle = `flex flex-row mx-auto items-center top-0 justify-between`;

export default function Navbar({ page }) {
   const [visibility, setVisibility] = useState(false);

   const handleClick = () => {
      setVisibility(!visibility);
   };

   return (
      <nav className='w-screen top-0 mt-8 md:mt-16 py-2 z-50'>
         <div className={`${navbarStyle} ${containerStyle}`}>
            <div className='flex-row justify-between flex-shrink-0'>
               <div>
                  {/* <ButtonGlyph href='/'>
                     <CommandIcon />
                  </ButtonGlyph>
                  <ButtonToggle /> */}
                  <Link href='/' className='text-fg font-semibold'>
                     キツネ
                  </Link>
               </div>
            </div>
            <div className='space-x-4 flex items-center'>
               {links.map(({ name, href }) => (
                  <Link key={name} href={href} className='text-fg'>
                     {name}
                  </Link>
               ))}
               <ButtonToggle />
            </div>
            {/* <div
               id='dropdown'
               className={`flex flex-col items-start md:flex-row md:items-center md:space-x-4 md:inline-flex my-6 md:my-0 transition-all duration-300 ${
                  visibility ? 'inline-flex' : 'hidden'
               }`}
               
            >
            </div> */}
         </div>
      </nav>
   );
}

import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import CommandIcon from '../icons/command';
import ChevronDown from '../icons/chevron-down';
import Link from '../link';
import { containerStyle } from '../layout';
import { useState, useEffect } from 'react';

const links = [
   { name: 'Thoughts', href: '/contents' },
   { name: 'Works', href: '/works' },
];

const navbarStyle = `flex flex-row  mx-auto items-center top-0 justify-between`;

export default function Navbar({ page }) {
   const [visibility, setVisibility] = useState(false);
   const [prevScroll, setPrevScroll] = useState();

   const handleClick = () => {
      setVisibility(!visibility);
   };

   const handleScroll = (e) => {
      const window = e.currentTarget;
      const currentY = window.scrollY;
      const thresholdDown = 150;
      const thresholdUp = 75;

      const menu = document.getElementById('menu-container');
      if (prevScroll > thresholdDown) {
         menu.classList.add('hidden');
      } else if (prevScroll < thresholdUp) {
         menu.classList.remove('hidden');
      }

      setPrevScroll(window.scrollY);
   };

   useEffect(() => {
      setPrevScroll(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [prevScroll]);

   return (
      <nav className='w-screen sticky top-0 mt-8 md:mt-16 py-2 z-50 border-b border-shade'>
         <div className={`${navbarStyle} ${containerStyle}`}>
            <div className='flex flex-col md:flex-row w-full justify-between flex-shrink-0'>
               <Link
                  className='self-center py-2 md:items-center text-fg font-semibold'
                  href='/'
               >
                  キツネ
               </Link>
               <div
                  id='menu-container'
                  className='space-x-4 flex mt-1 md:mt-0 items-center justify-center whitespace-no-wrap overflow-x-scroll transform transition-all duration-300 ease-in-out'
               >
                  {links.map(({ name, href }) => (
                     <Link key={name} href={href} className='text-fg'>
                        {name}
                     </Link>
                  ))}
                  <ButtonToggle />
               </div>
            </div>
         </div>
      </nav>
   );
}

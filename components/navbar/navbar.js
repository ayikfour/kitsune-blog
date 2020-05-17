import ButtonGlyph from '../buttons/button-glyph';
import ButtonToggle from '../buttons/button-toggle';
import Link from '../link';
import { containerStyle } from '../layout';
import { useState, useEffect } from 'react';

const links = [
   { name: 'Thoughts', href: '/contents' },
   { name: 'Works', href: '/works' },
   { name: 'About', href: '/' },
];

const navbarStyle = `flex flex-row  mx-auto items-center top-0 justify-between`;

export default function Navbar({ page }) {
   const [lastPos, setLastPos] = useState(0);
   const [isOnTop, setIsOnTop] = useState(true);

   const handleScroll = (e) => {
      const window = e.currentTarget;
      const currentY = window.scrollY;

      const menu = document.getElementById('menu-container');
      const navbar = document.getElementById('navbar');
      const kitsune = document.getElementById('kitsune');

      if (currentY < 64) {
         setIsOnTop(true);
      }

      if (lastPos < currentY && currentY > 64) {
         menu.classList.add('hidden');
         kitsune.classList.add('to-center');
         navbar.classList.add('border-b', 'border-shade');
         setIsOnTop(false);
      } else if (lastPos > currentY + 25 || isOnTop) {
         menu.classList.remove('hidden');
         kitsune.classList.remove('to-center');
      } else if (isOnTop) {
         navbar.classList.remove('border-b', 'border-shade');
      }

      setLastPos(currentY);
   };

   useEffect(() => {
      setLastPos(window.scrollY);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, [lastPos]);

   return (
      <nav
         id='navbar'
         className='w-screen sticky top-0 mt-8 md:mt-16 py-2 z-50'
      >
         <div className={`${navbarStyle} ${containerStyle}`}>
            <div className='flex flex-row relative w-full justify-between flex-shrink-0 '>
               <Link id='kitsune' className='' href='/'>
                  キツネ.
               </Link>
               <div
                  id='menu-container'
                  className='flex ml-12 items-center whitespace-no-wrap overflow-x-scroll transition-all duration-300 ease-in-out'
               >
                  <ButtonToggle />
                  {links.map(({ name, href }) => (
                     <Link key={name} href={href} className='text-fg px-2'>
                        {name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </nav>
   );
}

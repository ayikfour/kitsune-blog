import useDarkMode from 'use-dark-mode';
import { useEffect, useState } from 'react';
import SunIcon from '../icons/sun';
import MoonIcon from '../icons/moon';

export default function ButtonToggle() {
   const darkMode = useDarkMode(true);

   const [icon, setIcon] = useState('');

   const getIcon = () => {
      return darkMode.value ? <SunIcon /> : <MoonIcon />;
   };

   const handleClick = () => {
      darkMode.toggle();
   };

   useEffect(() => {
      setIcon(getIcon());
   }, [darkMode.value]);

   return (
      <button
         className='hover:bg-accent-2 focus:bg-accent-2 p-2  rounded-md'
         onClick={handleClick}
         aria-label='button toggle theme'
      >
         {icon}
      </button>
   );
}

/* <img src={src}></img> */
// const [src, setSrc] = useState('');

// const getFilePath = () => {
//    const filePath = `/glyph/${getGlyphName()}-${getGlyphModifier()}.svg`;
//    return filePath;
// };
// const getGlyphModifier = () => {
//    return darkMode.value ? 'onDark' : 'onLight';
// };

// const getGlyphName = () => {
//    return darkMode.value ? 'sun' : 'moon';
// };

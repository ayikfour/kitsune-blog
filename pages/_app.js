import styles from '../styles/global.css';
import { useEffect, useState } from 'react';
import useDarkMode from 'use-dark-mode';
import debounce from 'lodash.debounce';
import nprogress from 'nprogress';
import Router from 'next/router';

const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', (url) => {
   start.cancel();
   nprogress.done();
   window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', () => {
   start.cancel();
   nprogress.done();
});

export default function App({ Component, pageProps }) {
   const darkMode = useDarkMode(true);
   console.log('APP', darkMode.value);

   return <Component {...pageProps} />;
}

// const handleKeyDown = (e) => {
//    console.log({ currentKey: e.keyCode });
//    if (e.keyCode == 84) {
//       darkMode.toggle();
//    }
// };

// useEffect(() => {
//    document.addEventListener('keydown', handleKeyDown);
//    return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//    };
// }, []);

import styles from '../styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import useDarkMode from 'use-dark-mode';
import debounce from 'lodash.debounce';
import nprogress from 'nprogress';
import Router from 'next/router';
import { useHotkeys } from 'react-hotkeys-hook';
import { ToastContainer } from 'react-toastify';

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

   useHotkeys('t', () => darkMode.toggle());
   useHotkeys('h', () => Router.replace('/'));
   useHotkeys('w', () => Router.replace('/works'));
   useHotkeys('c', () => Router.replace('/contents'));

   return (
      <div>
         <Component {...pageProps} />
         <ToastContainer closeButton={false} limit={1} />
      </div>
   );
}

import useDarkMode from 'use-dark-mode';
import Head from 'next/head';

export default function Header({ title }) {
   const darkMode = useDarkMode(true);
   return (
      <Head>
         <link
            rel='icon'
            href={`./favicon/${darkMode.value ? 'onDark' : 'onLight'}.svg`}
         />
         <meta
            name='description'
            content='Kitsune personal sit to get to know Ayik Four better'
         />
         <meta property='og:image' content={'./images/og/og-general.png'} />
         <meta name='og:title' content={title} />
         <meta name='twitter:card' content='./images/og/twitter.png' />
         <title>{title}</title>
      </Head>
   );
}

{
   /* <meta
   property='og:image'
   content={`https://og-image.now.sh/${encodeURI(
      title
   )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
/> */
}

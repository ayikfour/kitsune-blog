import useDarkMode from 'use-dark-mode';
import Head from 'next/head';

export default function Header({
   title,
   og = null,
   description = 'Ayikfour personal overthought',
}) {
   const darkMode = useDarkMode(true);
   return (
      <Head>
         {/* Title */}
         <title>{title}</title>
         <meta name='og:title' content={title} />

         {/* Description */}
         <meta name='description' content={description} />
         <meta name='og:description' content={description} />
         <meta name='twitter:description' content={description} />

         {/* Images */}
         <meta
            name='twitter:image'
            content={
               og ? og : 'https://ayikfour.now.sh/images/og/og-general.png'
            }
         />
         <meta
            property='og:image'
            content={
               og ? og : 'https://ayikfour.now.sh/images/og/og-general.png'
            }
         />

         {/* URL */}
         <meta name='og:url' content='https://ayikfour.now.sh' />

         {/* Icons */}
         <link
            rel='icon'
            href={`./favicon/${darkMode.value ? 'onDark' : 'onLight'}.svg`}
         />

         {/* General */}
         <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
         />
         <meta lang='EN' />
         <meta httpEquiv='Content-Language' content='en' />
         <meta name='apple-mobile-web-app-title' content='Ayik Four' />
         <meta name='author' content='Ayik Four' />

         {/* Twitter general */}
         <meta name='twitter:card' content='summary_large_image' />
         <meta name='twitter:site' content='@paswotnya' />
         <meta name='twitter:creator' content='@paswotnya' />
         <meta name='twitter:title' content={title} />

         <link
            crossOrigin='anonymous'
            rel='preload'
            as='font'
            type='font/woff2'
            href='https://assets.zeit.co/raw/upload/v1582989014/fonts/Inter-roman.var.woff2'
         />
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

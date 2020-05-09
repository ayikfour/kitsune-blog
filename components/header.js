import useDarkMode from 'use-dark-mode';
import Head from 'next/head';

const baseUrl = 'https://ayikfour.now.sh';
export default function Header({
   title,
   og = null,
   description = 'Ayikfour personal overthought',
}) {
   const getOg = () => {
      return og
         ? `${baseUrl}${og}`
         : 'https://ayikfour.now.sh/images/og/og-general.png';
   };

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
         <meta name='twitter:image' content={getOg()} />
         <meta property='og:image' content={getOg()} />

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

         <link
            rel='preconnect'
            as='font'
            type='font/woff2'
            href='https://assets.zeit.co/raw/upload/v1582989014/fonts/Inter-roman.var.woff2'
            crossOrigin='anonymous'
         ></link>

         <link rel='preload' as='script' href='/noflash.js'></link>
      </Head>
   );
}

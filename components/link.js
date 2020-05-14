import NextLink from 'next/link';
import cn from 'classnames';

const canPrefetch = (href) => {
   if (!href || !href.startsWith('/')) {
      return false;
   }

   return true;
};

const Link = ({
   external,
   href = '',
   as,
   passHref,
   children,
   className,

   ...props
}) => {
   if (external) {
      return (
         <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={className ? className : ''}
            {...props}
         >
            {children}
         </a>
      );
   }

   return (
      <>
         <NextLink
            scroll={false}
            href={href}
            as={as}
            prefetch={canPrefetch(href) ? undefined : false}
            passHref={passHref}
         >
            {passHref ? (
               children
            ) : (
               <a className={className ? className : ''} {...props}>
                  {children}
               </a>
            )}
         </NextLink>
      </>
   );
};

export default Link;

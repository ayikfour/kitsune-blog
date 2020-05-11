import Link from '../link';
import Date from '../date';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazy-load';

const Image = dynamic(() => import('../image'));

export default function WorkItem({
   slug,
   title,
   description,
   date,
   link,
   cover,
   home = null,
   external = true,
   last = null,
}) {
   const getClassName = () => {
      let base = 'list-item';
      let marginBottom = home ? 'mb-8' : 'mb-16';
      return last ? base : `${base} ${marginBottom}`;
   };

   return (
      <li className={getClassName()}>
         <h3 className='mb-4'>
            <Link href={link} external={external}>
               {!home ? (
                  <Image
                     cover={cover}
                     title={title}
                     className='mb-8 h-64 w-full'
                  />
               ) : // <LazyLoad className='h-64 w-full mb-8'>
               //    </LazyLoad>
               null}
               {title}
            </Link>
         </h3>
         <p className='mb-2'>{description}</p>
         <Date date={date} />
      </li>
   );
}

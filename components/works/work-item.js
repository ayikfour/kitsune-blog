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
      return last ? base : base + ' mb-16';
   };

   return (
      <li className={getClassName()}>
         <h3>
            <Link href={link} external={external}>
               {!home ? (
                  <LazyLoad className='h-64 w-full mb-8'>
                     <Image
                        cover={cover}
                        title={title}
                        className='mb-8 h-64 w-full '
                     />
                  </LazyLoad>
               ) : null}
               {title}
            </Link>
         </h3>
         <p>{description}</p>
         <Date date={date} />
      </li>
   );
}

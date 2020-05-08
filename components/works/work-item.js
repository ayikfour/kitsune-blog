import Link from '../link';
import Date from '../date';
import dynamic from 'next/dynamic';
import LazyLoad from 'react-lazy-load';
// import Image from '../image';
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
}) {
   return (
      <li className='mb-16 list-item'>
         <Link href={link} external={external}>
            {!home ? (
               <LazyLoad className='h-64 w-full mb-8'>
                  <Image
                     cover={cover}
                     title={title}
                     className='mb-8 h-64 w-full border-dashed border-4 border-highlight-cyan'
                  />
               </LazyLoad>
            ) : null}
            <b>{title}</b>
         </Link>
         <p>{description}</p>
         <Date date={date} />
      </li>
   );
}

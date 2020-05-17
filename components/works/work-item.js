import Link from '../link';
import Date from '../date';
import dynamic from 'next/dynamic';

const Image = dynamic(() => import('../image').then((mod) => mod.default));

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
      <div className={getClassName()}>
         <p className='mb-1'>
            <Link href={link} external={external} className=''>
               {!home ? (
                  <Image
                     url={cover}
                     title={title}
                     className='mb-8 h-64 w-full'
                  />
               ) : null}
               {title}
            </Link>
         </p>
         {/* <p className='mb-1 leading-normal'>{description}</p> */}
         <Date dateString={date} />
      </div>
   );
}

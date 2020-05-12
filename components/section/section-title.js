import Link from '../link';

export default function Title({ name, href = null }) {
   return (
      <div className='title flex flex-col md:flex-row md:items-end md:space-x-2 mb-8 md:mb-16'>
         <h2 className='leading-none mb-2 md:mb-0'>
            <span>{name}</span>
         </h2>
         {href ? (
            <p className='leading-none'>
               <Link href={href} className='text-outline'>
                  <span className='mr-2'>see all</span>
                  <span>→</span>
               </Link>
            </p>
         ) : null}
      </div>
   );
}

import Link from '../link';

export default function Title({ name, href = null }) {
   return (
      <div className='flex flex-col md:flex-row md:items-end md:space-x-2 mb-8 md:mb-16'>
         <h2>
            <span>{name}</span>
         </h2>
         {href ? (
            <p className='font-light text-accent-3'>
               <Link href={href} className='no-underline'>
                  / see all →
               </Link>
            </p>
         ) : null}
      </div>
   );
}

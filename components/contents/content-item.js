import Link from '../link';
import Date from '../date';

export default function ContentItem({
   slug,
   title,
   description,
   date,
   author,
   last = null,
}) {
   const getClassName = () => (last ? 'list-item' : 'mb-8 list-item');

   return (
      <li className={getClassName()}>
         <p className='mb-1'>
            <Link href='/contents/[slug]' as={`/contents/${slug}`}>
               {title}
            </Link>
         </p>
         <p className='mb-1 leading-normal'>{description}</p>
         <Date dateString={date} />
      </li>
   );
}

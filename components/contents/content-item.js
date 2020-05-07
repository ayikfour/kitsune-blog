import Link from '../link';
import Date from '../date';

export default function ContentItem({
   id,
   title,
   description,
   date,
   readingTime,
   cover,
}) {
   return (
      <li className='mb-10 list-item'>
         <Link href='/posts/[id]' as={`/posts/${id}`}>
            {title}
         </Link>
         <p>{description}</p>
         <Date date={date} readingTime={readingTime} />
      </li>
   );
}

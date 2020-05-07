import Link from '../link';
import Date from '../date';

export default function ContentItem({
   id,
   title,
   description,
   date,
   readingTime,
}) {
   return (
      <li className='mb-10 content-item'>
         {console.log(id)}
         <Link href='/posts/[id]' as={`/posts/${id}`}>
            <b>{title}</b>
         </Link>
         <p>{description}</p>
         <p className='flex flex-row space-x-2'>
            <p className='reading-time'>{readingTime}</p>
            <span>/</span>
            <Date dateString={date}></Date>
         </p>
      </li>
   );
}

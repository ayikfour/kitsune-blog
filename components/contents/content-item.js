import Link from '../link';
import Date from '../date';

export default function ContentItem({
   id,
   title,
   description,
   date,
   readingTime,
   cover,
   last = null,
}) {
   const getClassName = () => (last ? 'list-item' : 'mb-16 list-item');

   return (
      <li className={getClassName()}>
         <h3>
            <Link href='/posts/[id]' as={`/posts/${id}`}>
               <b>{title}</b>
            </Link>
         </h3>
         <p>{description}</p>
         <Date date={date} readingTime={readingTime} />
      </li>
   );
}

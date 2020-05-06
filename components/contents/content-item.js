import Link from '../link';
import Date from '../date';

export default function ContentItem({ id, title, description, date }) {
   return (
      <li className='mb-10'>
         {console.log(id)}
         <Link href='/posts/[id]' as={`/posts/${id}`}>
            {title}
         </Link>
         <p>
            <Date dateString={date}></Date>
         </p>
         <p className='text-ink-high'>{description}</p>
      </li>
   );
}

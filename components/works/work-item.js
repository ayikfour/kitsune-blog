import Link from '../link';
import Date from '../date';
import Image from '../image';

export default function WorkItem({
   slug,
   title,
   description,
   date,
   link,
   cover,
   external = true,
}) {
   return (
      <li className='mb-16 list-item'>
         <Link href={link} external={external}>
            <Image cover={cover} title={title} className='mb-4 h-64 w-full' />
            {title}
         </Link>
         <p>{description}</p>
         <Date date={date} />
      </li>
   );
}

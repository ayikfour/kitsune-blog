import Link from 'next/link';
import CommandIcon from '../icons/command';

export default function ButtonGlyph({ fileName, href, children }) {
   return (
      <button
         className='hover:bg-accent-2 focus:bg-accent-2 p-2 rounded-md'
         role='button'
      >
         <Link href={href ? href : ''}>
            <a>{children}</a>
         </Link>
      </button>
   );
}

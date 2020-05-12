import Link from 'next/link';

export default function ButtonGlyph({ href, children }) {
   return (
      <button
         className='hover:bg-accent-2 focus:bg-accent-2 p-2 rounded-md'
         role='button'
         aria-label='button icon'
      >
         <Link href={href ? href : ''}>
            <a>{children}</a>
         </Link>
      </button>
   );
}

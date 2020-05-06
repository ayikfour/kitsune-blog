import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavbarLink({ text, href }) {
   const router = useRouter();
   const baseStyle = `p-2 h-10 text-base bg-transparent hover:bg-accent-2 hover:text-black `;
   const activeTextStyle = 'text-ink-high';
   const blurTextStyle = 'text-ink-medium';

   const getStyle = () => {
      return router.pathname === href
         ? baseStyle + activeTextStyle
         : baseStyle + blurTextStyle;
   };
   return (
      <Link href={href ? href : ''}>
         <a className={getStyle()}>{text}</a>
      </Link>
   );
}

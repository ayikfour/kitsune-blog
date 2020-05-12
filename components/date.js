import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
   const date = parseISO(dateString);
   return (
      <h5 className='text-medium-emphasize'>{format(date, 'LLLL d, yyyy')}</h5>
   );
}

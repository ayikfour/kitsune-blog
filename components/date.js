import { parseISO, format, formatDistance } from 'date-fns';

export default function DateComponent({ dateString }) {
   const date = parseISO(dateString);
   return (
      <h5 className='text-low-emphasize'>
         {formatDistance(new Date(), date)} ago
      </h5>
   );
}

import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
   const date = parseISO(dateString);
   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
export function ReadTime({ readingTime }) {
   return readingTime ? (
      <span>
         <span className='reading-time'>/ </span>
         <span className='reading-time'>{readingTime}</span>
      </span>
   ) : null;
}
const DateAndRead = ({ date, readingTime = null }) => {
   return (
      <h4 className='flex flex-row space-x-2'>
         <Date dateString={date} />
         <ReadTime readingTime={readingTime} />
      </h4>
   );
};
export default DateAndRead;

import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
   const date = parseISO(dateString);
   return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export function ReadTime({ readingTime }) {
   return readingTime ? (
      <span className='reading-time mr-2'>{readingTime}</span>
   ) : null;
}

const DateAndRead = ({ date, readingTime = null }) => {
   return (
      <h4 className='flex flex-row'>
         <b>
            <ReadTime readingTime={readingTime} />
         </b>
         <Date dateString={date} />
      </h4>
   );
};
export default DateAndRead;

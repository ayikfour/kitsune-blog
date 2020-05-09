import { parseISO, format } from 'date-fns';

export function Date({ dateString }) {
   const date = parseISO(dateString);
   // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
   return (
      <h4 className='text-medium-emphasize'>{format(date, 'LLLL d, yyyy')}</h4>
   );
}

export function ReadTime({ readingTime }) {
   return readingTime ? <h4 className='text-fg mr-2'>{readingTime}</h4> : null;
}

const DateAndRead = ({ date, readingTime = null }) => {
   return (
      <div className='flex flex-row'>
         <b>
            <ReadTime readingTime={readingTime} />
         </b>
         <Date dateString={date} />
      </div>
   );
};
export default DateAndRead;

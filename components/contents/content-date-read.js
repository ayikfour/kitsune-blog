import Date from '../date';

const DateRead = ({ date, readingTime }) => {
   return (
      <h4 className='flex flex-row space-x-2'>
         <Date dateString={date} />
         <span className='reading-time'>/</span>
         <span className='reading-time'>{readingTime}</span>
      </h4>
   );
};
export default DateRead;

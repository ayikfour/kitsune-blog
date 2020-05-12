import Date from '../date';

const DateRead = ({ date, readingTime }) => {
   return (
      <h5 className='flex flex-row space-x-2'>
         <Date dateString={date} />
         <span className='reading-time'>/</span>
         <span className='reading-time'>{readingTime}</span>
      </h5>
   );
};
export default DateRead;

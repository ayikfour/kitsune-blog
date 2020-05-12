import calcReadTime from 'reading-time';

export default function ReadTime({ content }) {
   const readingTime = calcReadTime(content).text;
   return (
      <h5 className='text-fg'>
         <b>{readingTime}</b>
      </h5>
   );
}

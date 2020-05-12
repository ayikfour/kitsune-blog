import calcReadTime from 'reading-time';

export default function ReadTime({ content }) {
   const readingTime = calcReadTime(content).text;
   return (
      <h4 className='text-fg'>
         <b>{readingTime}</b>
      </h4>
   );
}

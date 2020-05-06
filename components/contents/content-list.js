import ContentItem from './content-item';

export default function ContentList({ data }) {
   const ContentItems = () => {
      return data.map(({ id, date, title, description }) => (
         <ContentItem
            key={id}
            id={id}
            title={title}
            description={description}
            date={date}
         />
      ));
   };
   return (
      <ul className='list-none'>
         <ContentItems />
      </ul>
   );
}

import ContentItem from './content-item';

export default function ContentList({ data }) {
   const ContentItems = () => {
      return data.map((props, index) => {
         let last = index == data.length - 1 ? true : false;
         return <ContentItem key={props.id} {...props} last={last} />;
      });
   };
   return (
      <ul className='list-none'>
         <ContentItems />
      </ul>
   );
}

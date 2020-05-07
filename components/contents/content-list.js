import ContentItem from './content-item';

export default function ContentList({ data }) {
   const ContentItems = () => {
      return data.map((props) => <ContentItem key={props.id} {...props} />);
   };
   return (
      <ul className='list-none'>
         <ContentItems />
      </ul>
   );
}

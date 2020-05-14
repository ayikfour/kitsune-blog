import ContentItem from './content-item';

export default function ContentList({ data }) {
   return (
      <ul className='list-none'>
         {data.map((props, index) => {
            let last = index == data.length - 1 ? true : false;
            return <ContentItem key={props.slug} {...props} last={last} />;
         })}
      </ul>
   );
}

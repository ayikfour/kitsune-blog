import ContentItem from './content-item';
import { request } from '../../lib/datocms';

// export default function ContentList({ data }) {
//    const ContentItems = () => {
//       return data.map((props, index) => {
//          let last = index == data.length - 1 ? true : false;
//          return <ContentItem key={props.id} {...props} last={last} />;
//       });
//    };
//    return (
//       <ul className='list-none'>
//          <ContentItems />
//       </ul>
//    );
// }

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

import WorkItem from './work-item';

export default function WorkList({ data = [], home }) {
   const WorkItems = () => {
      const worksData = home ? data.slice(0, 3) : data;
      return worksData.map((props) => (
         <WorkItem key={props.slug} {...props} home={home ? home : null} />
      ));
   };
   return (
      <ul className='list-none'>
         <WorkItems />
      </ul>
   );
}

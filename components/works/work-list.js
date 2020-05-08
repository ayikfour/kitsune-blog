import WorkItem from './work-item';

export default function WorkList({ data = [], home }) {
   const WorkItems = () => {
      const worksData = home ? data.slice(0, 3) : data;
      return worksData.map((props, index) => {
         let last = index == worksData.length - 1 ? true : false;
         return (
            <WorkItem
               key={props.slug}
               home={home ? home : null}
               last={last}
               {...props}
            />
         );
      });
   };
   return (
      <ul className='list-none'>
         <WorkItems />
      </ul>
   );
}

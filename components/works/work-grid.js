import Link from '../link';
import Image from '../image';

const WorkItems = ({ data }) => {
   return data.map((work) => {
      return (
         <div className='work-item-card list-item rounded-md'>
            <Link href={work.link} external={work.external}>
               <Image
                  url={work.cover}
                  title={work.title}
                  className='h-64 w-full'
               />
            </Link>
         </div>
      );
   });
};

const WorkGrid = ({ data = [], home = null }) => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 '>
         <WorkItems data={home ? data.slice(0, 4) : data} />
      </div>
   );
};

export default WorkGrid;

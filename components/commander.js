import { containerStyle } from './layout';

export default function Commander({ className }) {
   return (
      <div
         className={
            'fixed w-screen top-0 left-0 h-screen z-50 bg-most-emphasize '
         }
      >
         <div className={containerStyle}>
            <h2>Search</h2>
            <input
               className='w-full p-8 bg-low-emphasize'
               placeholder='search posts or works...'
            ></input>
         </div>
      </div>
   );
}

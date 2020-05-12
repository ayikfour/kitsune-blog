import { containerStyle } from './layout';

export default function Commander({ className }) {
   return (
      <div className='commander-overlay fixed w-screen top-0 left-0 h-screen z-50 bg-overlay'>
         <div className={`mx-auto my-64 ${containerStyle}`}>
            <input
               className='w-full p-8 rounded-md bg-bg border-outline'
               placeholder='search posts or works...'
            ></input>
         </div>
      </div>
   );
}

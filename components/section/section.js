import Title from './section-title';

export default function Section({ name, href, children }) {
   return (
      <section className='pt-32'>
         <div className='flex flex-col'>
            <Title name={name} href={href} />
            {children}
         </div>
      </section>
   );
}

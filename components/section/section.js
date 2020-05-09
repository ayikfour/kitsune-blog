import Title from './section-title';

export default function Section({ name, href, children, className }) {
   return (
      <section className='pt-32'>
         <div className={'flex flex-col ' + className}>
            <Title name={name} href={href} />
            {children}
         </div>
      </section>
   );
}

import Layout from '../layout';
import Link from '../link';
import Header from '../header';
import Section from '../section/section';

const title = '404 – Ayik Four';

export default function Error({ status }) {
   return (
      <Layout title={status || 'Error'}>
         <Header title={title} />

         {status === 404 ? (
            <Section name="Hmm seems you've got lost">
               <p>
                  <blockquote cite='http://www.aaronsw.com/weblog/visitingmit'>
                     <p>
                        I'm sorry this my flaws. Maybe you can try to press{' '}
                        <b>[h] </b>
                        to back home.Or press <b>[w]</b>.
                     </p>

                     <footer>
                        — Anibal cortez,{' '}
                        <Link
                           external
                           href='http://www.aaronsw.com/weblog/visitingmit'
                        >
                           <cite>I Love the University</cite>
                        </Link>
                     </footer>
                  </blockquote>
               </p>
            </Section>
         ) : (
            <Section name='Error'>
               <span>{status || '?'}</span>
               <p>An error occurred.</p>
            </Section>
         )}
      </Layout>
   );
}

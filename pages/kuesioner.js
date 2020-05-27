import Layout from '../components/layout';
import Link from '../components/link';
import Header from '../components/header';
import Section from '../components/section/section';

const Kuesioner = () => {
   return (
      <Layout>
         <Header
            title='Bantuan Ayik untuk segera sarjana'
            description='Kami, Ayik dan Igar sedang melakukan user research untuk penelitian skripsi kami. Kami membutuhkan dukungan teman-teman untuk mengisi kuesioner kami sebagai responden 🙏🏻'
            og='/public/images/og/og-kuesioner.png'
         />
         <Section name='Redirecting'>
            <p>
               <blockquote cite='http://www.aaronsw.com/weblog/visitingmit'>
                  <p>
                     Bantu Ayikfour untuk segera sarjana dengan cara isi
                     kuesioner berikut 🙏🏻.
                  </p>

                  <footer>
                     — Ayikfour,{' '}
                     <Link external href='http://twitter.com/paswotnya'>
                        <cite>Buruh skripsi</cite>
                     </Link>
                  </footer>
               </blockquote>
            </p>
         </Section>
      </Layout>
   );
};

export default Kuesioner;

Kuesioner.getInitialProps = ({ res }) => {
   if (res) {
      res.writeHead(301, {
         Location:
            'https://docs.google.com/forms/d/e/1FAIpQLSc2LhyXAfaduStR_jiku_TW5jl8EEuTHjknlXQFuQ32Guue6Q/viewform',
      });
      res.end();
   }

   return {};
};

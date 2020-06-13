import Layout from '../components/layout';
import Link from '../components/link';
import Header from '../components/header';
import Section from '../components/section/section';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LINK_KUESIONER =
   'https://docs.google.com/forms/d/e/1FAIpQLSdsAQa2VTV55ittYeMTYhfsLoiJfkOJA2jB6d6VZ14LGC5WJw/viewform';
const title = 'Customer research';
const description =
   'Kami Artms, sedang melakukan riset pelanggan tentang perilaku dan preferensi dalam menggunakan layanan cuci sepatu';
const og =
   'https://res.cloudinary.com/ayikfour/image/upload/v1592016734/artms-research.png';

const Artms = () => {
   const router = useRouter();

   useEffect(() => {
      if (window !== undefined) {
         setTimeout(() => {
            window.location =
               'https://docs.google.com/forms/d/e/1FAIpQLSdsAQa2VTV55ittYeMTYhfsLoiJfkOJA2jB6d6VZ14LGC5WJw/viewform';
         }, 1000);
      }
   });
   return (
      <Layout>
         <Header title={title} description={description} og={og} />
         <Section name='Redirecting'>
            <p>
               <blockquote>
                  <p>Bantu Artms menjadi juragan cuci sepatu 💪.</p>
                  <footer>
                     — Artms,{' '}
                     <Link external href='http://instagram.com/artms.shoes'>
                        <cite>Buruh dlamakan</cite>
                     </Link>
                  </footer>
               </blockquote>
            </p>
         </Section>
      </Layout>
   );
};

export default Artms;

Artms.getInitialProps = ({ res }) => {
   if (res) {
      res.writeHead(301, {
         Location: LINK_KUESIONER,
      });
      res.end();
   }

   return {};
};

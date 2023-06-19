import Head from 'next/head';
import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="title" content="Portfolio Charles Cantin" />
        <meta name="description" content="Charles Cantin, passionné par la photographie, immortalise tous vos évènements avec des offres variées aux tarifs avantageux" />
        <meta name="keywords" content="portfolio, photo, photographie" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />
        <meta name="author" content="Trystan ROLLAND" />
      </Head>
      <div className="flex flex-col h-full md:h-screen">
        <Navbar />
        <div className="flex overflow-auto grow w-full h-full">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MyApp

import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-full md:h-screen">
      <Navbar />
      <div className="flex overflow-auto grow w-full h-full">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp

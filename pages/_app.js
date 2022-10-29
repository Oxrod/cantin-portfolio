import '../styles/globals.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="h-[80vh]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  )
}

export default MyApp

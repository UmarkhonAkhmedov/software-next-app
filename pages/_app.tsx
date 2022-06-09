import '../styles/style.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Ready from '../components/Ready'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Ready />
      <Footer />
    </div>
  )
}

export default MyApp

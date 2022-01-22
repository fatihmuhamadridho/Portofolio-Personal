import '../styles/globals.scss'
import '../styles/responsive.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></Script>
  </Component>
}

export default MyApp

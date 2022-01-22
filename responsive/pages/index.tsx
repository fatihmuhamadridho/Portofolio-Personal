import type { NextPage } from 'next'
import Head from 'next/head'
import Script from "next/script";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Responsive Navbar</title>
      </Head>
      <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars">test</i>
              <i>test</i>
          </label>
          <label className='logo'>DesignX</label>
          <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Feedback</a></li>
          </ul>
      </nav>
      <section></section>
      <Script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></Script>
  </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>One Page Website Layout</title>
      </Head>
      <nav>
        <ul>
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">News</a></li>
          <li><a href="#section3">Blog</a></li>
          <li><a href="#section4">About</a></li>
          <li><a href="#section5">Contact</a></li>
        </ul>
      </nav>
      <div id='section1'>
        <h1>This is Home section</h1>
      </div>
      <div id='section2'>
        <h1>This is News section</h1>
      </div>
      <div id='section3'>
        <h1>This is Blog section</h1>
      </div>
      <div id='section4'>
        <h1>This is About section</h1>
      </div>
      <div id='section5'>
        <h1>This is Contact section</h1>
      </div>
    </div>
  )
}

export default Home

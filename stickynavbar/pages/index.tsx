import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    window.addEventListener("scroll", function() {
      var header = this.document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 0);
    })
  })

  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>Sticky Navbar</title>
      </Head>
      <header>
        <a href="" className='logo'>Logo</a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portofolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </header>
      <section className='banner'></section>
      {/* <Script type='text/javascript' id='header'>
        {window.addEventListener("scroll", function() {
          var header = document.querySelector("header");
          header?.classList.toggle("sticky")
        })}
      </Script> */}
      {/* <Script
        onLoad={() => {
          window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header?.classList.toggle("sticky", window.scrollY > 0);
          })
        }} /> */}
    </div>
  )
}

export default Home

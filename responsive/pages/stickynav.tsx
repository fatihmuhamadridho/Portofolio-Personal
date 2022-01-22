import { NextPage } from "next";
import Head from "next/head";
import styles from '../styles/StickyNavbar.module.scss'

const StickyNav: NextPage = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <title>Sticky Navbar</title>
            </Head>
            <header>
                <a href="" className="logo">Logo</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portofolio</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </div>
    )
}

export default StickyNav;
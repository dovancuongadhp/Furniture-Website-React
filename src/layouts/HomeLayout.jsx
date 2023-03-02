import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from "../components/footer/Footer";
import "../assets/style/layout.scss";
export default function HomeLayout({children}) {
  return (
    <div className="home__layout__container">
      <div className="home__layout__navbar">
        <Navbar />
      </div>
      <div className="home__layout__content">{children}</div>
      <div className="home__layout__footer">
        <Footer />
      </div>
    </div>
  )
}

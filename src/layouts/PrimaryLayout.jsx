import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import "../assets/style/layout.scss";
export default function PrimaryLayout({ children }) {
  return (
    <div className="primary__layout__container">
      <div className="primary__layout__navbar">
        <Navbar />
      </div>
      <div className="primary__layout__content">{children}</div>
      <div className="primary__layout__footer">
        <Footer />
      </div>
    </div>
  );
}

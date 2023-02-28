import React from "react";
import Navbar from "../components/navbar/Navbar";

export default function PrimaryLayout({ children }) {
  
  return (
    <div>
      <Navbar />
      <h1>Primary layout</h1>
      <div className="primary__layout__container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

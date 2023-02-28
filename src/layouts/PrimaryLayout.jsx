import React from "react";
import Navbar from "../components/navbar/Navbar";
import Category from "../components/categories/Category";

export default function PrimaryLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="primary__layout__container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

import React from "react";
import TitleBar from "../../components/titlebar/TitleBar";
import Category from "../../components/categories/Category";
import "../../assets/style/home.scss";
import CartIcon from "../../assets/icons/CartIcon";
import CardProduct from "../../components/cardProduct/CardProduct";
export default function Home() {
  return(
    <div className="container__home">
      <CardProduct image={"https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg"} price={1231} productName={"test 1231"}/>
      <CardProduct image={"https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg"} price={1231} productName={"test 1231"}/>
      <CardProduct image={"https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg"} price={1231} productName={"test 1231"}/>
    </div>
  )
}

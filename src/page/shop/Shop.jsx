import React, { useCallback, useState } from "react";
import "../../assets/style/shop.scss";
import TitleBar from "../../components/titlebar/TitleBar";
import Category from "../../components/categories/Category";
import CardProduct from "../../components/cardProduct/CardProduct";

//image
import Image1 from '../../assets/img/cropped-images/img-1.jpg'
import Image2 from '../../assets/img/cropped-images/img-2.jpg'
import Image3 from '../../assets/img/cropped-images/img-3.jpg'
import Image4 from '../../assets/img/cropped-images/img-4.jpg'
import Image5 from '../../assets/img/cropped-images/img-5.jpg'
export default function Shop() {
  const [count, setCount] = useState(1);
  const listProduct = [
    {
      id: 1,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink: Image1
    },
    {
      id: 2,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink: Image2
    },
    {
      id: 3,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink: Image3
    },
    {
      id: 4,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink: Image4
    },
    {
      id: 5,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink: Image5
    },
    {
      id: 6,
      productName: "Ghe noi that dep",
      price: "£5.00",
      imgLink:
        "https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg",
    },
  ];
  function handleClickCart() {
    setCount(count + 1);
    console.log("count", count);
  }
  return (
    <div className="shop__container">
      <TitleBar namePage={"Shop"} />
      <div className="shop__wrapper">
        <div className="shop__product">
          <div className="filter__product">
            <select name="sorting" id="sort" placeholder="Search">
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Short by latest</option>
              <option value="lowtohight">Short by price: low to hight</option>
              <option value="highttolow">Short by price: hight to low</option>
            </select>
          </div>
          <br />
          <div className="list__product">
            {listProduct.map((item) => (
              <CardProduct
                key={item.id}
                image={item.imgLink}
                price={item.price}
                productName={item.productName}
                onClick={handleClickCart}
              />
            ))}
          </div>
        </div>
        <aside className="shop__categories">
          <Category />
        </aside>
      </div>
    </div>
  );
}

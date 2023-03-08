import React, { useCallback, useEffect, useState } from "react";
import "@styles/shop.scss";
import TitleBar from "@components/titlebar/TitleBar";
import Category from "@components/categories/Category";
import CardProduct from "@components/card-product/CardProduct";

//image
import { fakeListProduct } from "../../fakedata/listProduct";

export default function Shop() {
  useEffect(() => {
    document.title = "Shop"
  }, []);
  const [count, setCount] = useState(1);

  function handleClickCart() {
    setCount(count + 1);
    console.log("count", count);
  }
  return (
    <div className="shop__container">
      <TitleBar namePage={"Shop"} />
      <div className="shop__wrapper">
        {/* start shop__wrapper */}
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
            {fakeListProduct.map((item) => (
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
        {/* end shop__wrapper */}
      </div>
    </div>
  );
}

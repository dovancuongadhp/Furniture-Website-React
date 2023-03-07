import React, { memo } from "react";
import "@styles/categories.scss";
import Button from "@components/button/Button";
import Slider from "@components/slider/Slider";
function Category() {
  function scrollSliderOnchange(value) {
    console.log("slider",value)
  }
  function handleFilter(){
    console.log("click btn filter")
  }
  return (
    <div className="category__container">
      <p>Categories</p>
      <div className="category__wrapper">
        <ul className="list__item">
          <li className="child__item">
            <p className="item">CHAIR</p>
            <p className="quantity">1</p>
          </li>
          <li className="child__item">
            <p className="item">DECOR</p>
            <p className="quantity">3</p>
          </li>
          <li className="child__item">
            <p className="item">LIGHT</p>
            <p className="quantity">2</p>
          </li>
          <li className="child__item">
            <p className="item">PLANT</p>
            <p className="quantity">4</p>
          </li>
        </ul>
      </div>
      <p>Filter by price</p>
      <Slider scrollSliderOnchange={scrollSliderOnchange}/>
      <div className="price__label__wrapper">
        <p>
          Price: <span className="price">£0 — £10</span>
        </p>
        <Button onClick={handleFilter}>FILTER</Button>
      </div>
    </div>
  );
}
export default memo(Category);

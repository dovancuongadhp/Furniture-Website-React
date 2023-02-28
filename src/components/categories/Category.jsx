import React, { useState } from "react";
import "../../assets/style/categories.scss";
import Button from "../button/Button";
export default function Category() {
    const [valueSlider,setValueSlider] = useState(0);
    function scrollSliderOnchange(event){
       const valueSlider = event.target.value;
       setValueSlider(valueSlider)
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
      <div className="slide__price__wrapper">
        <input
          type="range"
          min="1"
          max="100"
          value={valueSlider}
          className="slider"
          id="myRange"
          onChange={scrollSliderOnchange}
        />
      </div>
      <div className="price__label__wrapper">
        <p>Price: <span className="price">£0 — £10</span></p>
        <Button>
            FILTER
        </Button>
      </div>
    </div>
  );
}
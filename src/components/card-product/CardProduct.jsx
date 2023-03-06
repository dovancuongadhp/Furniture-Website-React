import React from "react";
import '../../assets/style/card-product.scss'
import {CartIcon} from '../../assets/icons'
export default function CardProduct({ image, productName, price, onClick}) {
  return (
    <div className="product__wrapper">
      <div className="product__img">
        <img src={image} alt="photo" />
      </div>
      <div className="product__bottom">
        <div className="product__description">
          <p className="product__name">{productName}</p>
          <p className="product__price">{price}</p>
        </div>
        <div className="product__cart" onClick={onClick}>
          <CartIcon />
        </div>
      </div>
    </div>
  );
}

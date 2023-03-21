import React from 'react'
import '@styles/card-thumbnail.scss'
// card product for footer
export default function CardThumbnail({ image, productName, price}) {
  return (
    <div className="card-thumbnail__wrapper">
      <div className="card-thumbnail__img">
        <img src={image} alt="photo-thumbnail" />
      </div>
      <div className="card-thumbnail__right">
        <div className="card-thumbnail__description">
          <p className="card-thumbnail__name">{productName}</p>
          <p className="card-thumbnail__price">{price}</p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import TitleBar from '../../components/titlebar/TitleBar'
import '../../assets/style/shop.scss'
import Category from '../../components/categories/Category'
export default function Shop() {
  return (
    <div className='shop__container'> 
      <TitleBar namePage={"Shop"} />
      <div className="shop__content">
        <div className="list__product">
          List product
        </div>
        <div className="categories">
          <Category/>
        </div>
      </div>
    </div>
  )
}

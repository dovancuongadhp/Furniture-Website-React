import React from 'react'
import TitleBar from '../../components/titlebar/TitleBar'
import '../../assets/style/shop.scss'
import Category from '../../components/categories/Category'
export default function Shop() {
  return (
    <div className='shop__container'> 
      <TitleBar namePage={"Shop"} />
      <div className="shop__inner">
        <div className="wrapper__product">
          <div className="filter__product">
            <select name="sorting" id="sort" placeholder='Search'>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Short by latest</option>
              <option value="lowtohight">Short by price: low to hight</option>
              <option value="highttolow">Short by price: hight to low</option>
            </select>
          </div>
          <br />
          <div className="list__product">
            ListProduct
          </div>
        </div>
        <div className="shop__categories">
          <Category/>
        </div>
      </div>
    </div>
  )
}

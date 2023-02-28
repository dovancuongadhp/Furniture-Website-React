import React from 'react'
import '../../assets/style/categories.scss'
export default function Category() {
  return (
    <div>
        <p>Category</p>
        <div className="category__wrapper">
            <ul className="list__item">
                <li className="child__item">
                    <p className='item'>CHAIR</p>
                    <p className="quantity">1</p>
                </li>
                <li className="child__item">
                    <p className='item'>DECOR</p>
                    <p className="quantity">3</p>
                </li>
                <li className="child__item">
                    <p className='item'>LIGHT</p>
                    <p className="quantity">2</p>
                </li>
                <li className="child__item">
                    <p className='item'>PLANT</p>
                    <p className="quantity">4</p>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

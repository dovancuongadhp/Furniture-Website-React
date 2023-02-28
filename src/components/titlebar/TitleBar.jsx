import React from 'react'
import '../../assets/style/titlebar.scss'
export default function TitleBar() {
  return (
    <div className="titlebar__container">
        <div className="titlebar__inner">
            <h3 className='name__page'>Home</h3>
            <div className="current__link">
               <p> Home {'>'} Shop</p>
            </div>
        </div>
    </div>
  )
}

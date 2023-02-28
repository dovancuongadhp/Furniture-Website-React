import React from 'react'
import TitleBar from '../../components/titlebar/TitleBar'
import Category from '../../components/categories/Category'
import '../../assets/style/shop.scss'
export default function Shop() {
  const listProduct = [
    {
      id: 1,
      productName : 'chair123',
      imgLink: 'https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg'
    },
    {
      id: 2,
      productName : 'chair123',
      imgLink: 'https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg'
    },
    {
      id: 3,
      productName : 'chair123',
      imgLink: 'https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg'
    },
    {
      id: 4,
      productName : 'chair123',
      imgLink: 'https://images.gessato.com/cb:OWDa~b707/w:auto/h:auto/q:mauto/f:avif/https://www.gessato.com/wp-content/uploads/2023/01/dieckmann-typ-dieckmann-typ-chair-chair-7.jpg'
    },
  ]
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
            {
              listProduct.map(item => (
                <div key={item.id}>
                  <div className="product__wrapper">
                    <div className="product__img">
                      <img src={item.imgLink} alt="photo" />
                      <p>{item.productName}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="shop__categories">
          <Category/>
        </div>
      </div>
    </div>
  )
}

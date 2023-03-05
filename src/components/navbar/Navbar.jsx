import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartIcon, SearchIcon, EcoIcon } from "../../assets/icons";
import "../../assets/style/navbar.scss";
import MenuIcon from "../../assets/icons/MenuIcon";
import useWindowDimensions from "../../hooks/useWindowSize";
export default function Navbar() {
  const [isShowMenu,setShowMenu] = useState(false)
  const {width,height} = useWindowDimensions();
    function toggleMenu(){
    setShowMenu(!isShowMenu)
  }
  return (
    <div className="navbar">
      <div className="navbar__inner">
        <div className="brand">Unicoin</div>
        <div className="list__links" style={!isShowMenu && width <= 830 ? {display:'none'} : null} >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/shop"}>Shop</NavLink>
          <NavLink to={"/decor"}>Decor</NavLink>
          <NavLink to={"/plant"}>Plant</NavLink>
          <NavLink to={"/light"}>Light</NavLink>
          <NavLink to={"/chair"}>Chair</NavLink>
        </div>
        <div className="list__icons">
          <div className="social">
            <EcoIcon />
            <SearchIcon />
            <span className="cart__icon">
              <CartIcon />
              {/* <span className="cart__count">12</span> */}
            </span>
            <span className="toggle__menu" onClick={toggleMenu}>
              <MenuIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

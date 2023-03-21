import React from "react";
import "@styles/footer.scss";
import { LockIcon, PaypalIcon, VisaIcon } from "@icons";
import CardThumbnail from "@components/card-thumbnail/CardThumbnail";
//image
import {fakeListProductThumnail} from "../../fakedata/listProduct";
export default function Footer() {

  
  return (
    <footer className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__el payment__method">
          <p className="footer__heading">PAYMENT METHOD</p>
          <p className="footer__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            reiciendis explicabo perspiciatis necessitatibus similique est
            harum. Numquam dolorem, optio suscipit architecto maxime, veniam
            pariatur, porro minima minus facere exercitationem quidem!
          </p>
          <ul className="payment__icon">
            <li>
              <VisaIcon />
            </li>
            <li>
              <PaypalIcon />
            </li>
          </ul>
          <span style={{ display: "flex", alignItems: "center" }}>
            <LockIcon size={16} color={"black"} />
            <p className="footer__title">Secure online payment</p>
          </span>
        </div>
        <div className="footer__el top__rate">
          <p className="footer__heading">TOP RATE</p>
          <ul className="footer__listitem">
            {fakeListProductThumnail.map(item => (
              <li key={item.id}>
                <CardThumbnail image={item.imgLink} price={item.price} productName={item.productName}/>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__el shop__guide">
          <p className="footer__heading">SHOP GUIDE</p>
          <ul className="footer__listitem">
            <li>FAQ</li>
            <li>Shipment</li>
            <li>Return</li>
            <li>Policies</li>
            <li>Gift Card</li>
            <li>Clothing care</li>
            <li>Purchase condition</li>
          </ul>
        </div>
        <div className="footer__el company">
          <p className="footer__heading">COMPANY</p>
          <ul className="footer__listitem">
            <li>About us</li>
            <li>Press</li>
            <li>Our team</li>
            <li>Office</li>
            <li>Giveaway</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="footer__nocopyright">
        <p>© 2023 Unicoin, Design by Cuongdkun</p>
      </div>
    </footer>
  );
}

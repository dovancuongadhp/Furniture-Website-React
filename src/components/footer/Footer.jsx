import React from "react";
import "../../assets/style/footer.scss";
export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer__wrapper">
        <div className="footer__el payment__method">
          <p className="footer__heading">PAYMENT METHOD</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            recusandae sequi porro provident aut culpa, dolores fugit rem
            maiores veniam totam reiciendis doloribus ipsam pariatur iusto quas?
            Modi, perspiciatis neque?
          </p>
        </div>
        <div className="footer__el top__rate">
          <p className="footer__heading">TOP RATE</p>
          <ul>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
            <li>Item 1</li>
          </ul>
        </div>
        <div className="footer__el shop__guide">
          <p className="footer__heading">SHOP GUIDE</p>
          <ul>
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
          <p className="footer__heading">PAYMENT METHOD</p>
          <ul>
            <li>About us</li>
            <li>Press</li>
            <li>Our team</li>
            <li>Office</li>
            <li>Giveaway</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

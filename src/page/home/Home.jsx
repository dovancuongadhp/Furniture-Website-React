import React from "react";
import "../../assets/style/home.scss";
import ArmChair from "../../assets/img/home-page/arm-chair.png";
import CircleRight from "../../assets/svg/CircleRight";
import ImgGreen from '../../assets/img/home-page/img-green.jpg';
import ImgLamp from '../../assets/img/home-page/img-lamp.jpg';
import ImgPink from '../../assets/img/home-page/img-pink.jpg';
export default function Home() {
  return (
    <div className="home__container">
      <div className="home__wrapper">
        <section>
          <div className="page-one">
            <div className="description">
              <p className="title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
                vero, sed hic consequuntur sapiente perspiciatis eum quibusdam
                corrupti repudiandae impedit dolorum quia soluta, placeat veniam
                distinctio quos, saepe quasi voluptatem!
              </p>
              <button className="btn-learnmore">Learn more</button>
            </div>
            <div className="arm-chair">
              <img src={ArmChair} alt="arm-chair" />
            </div>
          </div>
        </section>
        <section>
          <div className="discount">
            <p>
              ! Use discount code: FIRSTIME to get 10% off your first order !
            </p>
          </div>
        </section>
        <section>
         <div className="page-two">
              <div className="collection">
                <div className="collection__img">
                  <img src={ImgGreen} alt="collection" />
                </div>
              </div>
              <div className="collection">
                <div className="collection__img">
                  <img src={ImgLamp} alt="collection" />
                </div>
              </div>
              <div className="collection">
                <div className="collection__img">
                  <img src={ImgPink} alt="collection" />
                </div>
              </div>
          </div> 
        </section>
      </div>
    </div>
  );
}

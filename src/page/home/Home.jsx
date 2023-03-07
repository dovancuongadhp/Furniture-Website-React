import React from "react";
import "../../assets/style/home.scss";
import ArmChairBg from "../../assets/img/home-page/arm-chair-orange.png";
import LayerBlue from "../../assets/img/home-page/layerBlue.jpg";
import LayerGreen from "../../assets/img/home-page/layerGreen.jpg";
import LayerOrange from "../../assets/img/home-page/layerOrange.jpg";
import BrandSlide from "./brand-slide/BrandSlide";
import CardCollection from "./card-collection/CardCollection";
import GraySofaBrown from "../../assets/img/home-page/gray-sofa-brown-copy.jpg";
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
              <img src={ArmChairBg} alt="arm-chair" />
            </div>
          </div>
        </section>
        <section>
          <div className="discount">
            <p>
              ! Use discount code{" "}
              <span className="hight-light-color">FIRSTIME</span> to get{" "}
              <span className="hight-light-color">10%</span> off your first
              order !
            </p>
          </div>
        </section>
        <section>
          <div className="page-two">
            <CardCollection image={LayerOrange} />
            <CardCollection image={LayerGreen} />
            <CardCollection image={LayerBlue} />
          </div>
        </section>
        <section className="brand-slide">
          <BrandSlide />
        </section>
        <section>
          <div className="page-three">
            {/* <p>Featured products with amazing color variety for your home</p> */}
            <img src={GraySofaBrown} alt="lamp" />
          </div>
        </section>
      </div>
    </div>
  );
}

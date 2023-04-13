import React, { useEffect } from "react";
import "@styles/home.scss";
import ArmChairBg from "@imgs/home-page/arm-chair-orange.png";
import LayerBlue from "@imgs/home-page/layerBlue.jpg";
import LayerGreen from "@imgs/home-page/layerGreen.jpg";
import LayerOrange from "@imgs/home-page/layerOrange.jpg";
import GraySofaBrown from "@imgs/home-page/gray-sofa-brown-copy.jpg";
import BrandSlide from "./brand-slide/BrandSlide";
import CardCollection from "./card-collection/CardCollection";
import { Helmet } from "react-helmet";
import ImageMeta from '@imgs/home-page/gray-sofa-brown-copy.jpg'
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
    <Helmet>
      <meta name="title" content="Tiêu đề chia sẻ trên Facebook" />
      <meta name="description" content="Nội dung mô tả của trang web"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://cuongdkun.top/"/>
      <meta property="og:title" content="Tiêu đề chia sẻ trên Facebook"/>
      <meta property="og:description" content="Nội dung mô tả của trang web"/>
      <meta property="og:image" content="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>

      
    </Helmet>
      <div className="home__container">
        <div className="home__wrapper">
          <section>
            <div className="page-one">
              <div className="description">
                <p className="title">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum vero, sed hic consequuntur sapiente perspiciatis eum
                  quibusdam corrupti repudiandae impedit dolorum quia soluta,
                  placeat veniam distinctio quos, saepe quasi voluptatem!
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
    </>
  );
}

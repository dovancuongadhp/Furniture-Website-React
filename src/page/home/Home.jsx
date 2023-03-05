import React from "react";
import "../../assets/style/home.scss";
import ArmChair from "../../assets/img/home-page/arm-chair.png";
import CircleRight from "../../assets/svg/CircleRight";
export default function Home() {
  return (
    <div className="home__container">
      <div className="home__wrapper">
        <div className="home__inner">
          <section className="page-one">
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
          </section>
          <section></section>
          <section>

          </section>
        </div>
      </div>
    </div>
  );
}

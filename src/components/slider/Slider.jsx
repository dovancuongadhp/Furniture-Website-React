import React, { memo, useState } from "react";
import "../../assets/style/slider.scss";

function Slider({ scrollSliderOnchange }) {
  const [valueSlider, setValueSlider] = useState(0);
  function onChangeSlider(event) {
    const valueSlider = event.target.value;
    setValueSlider(valueSlider);
    scrollSliderOnchange(valueSlider);
  }
  return (
    <div className="slider__price__wrapper">
      <input
        type="range"
        min="0"
        max="100"
        step="10"
        value={valueSlider}
        className="slider"
        id="myRange"
        onChange={onChangeSlider}
      />
    </div>
  );
}
export default memo(Slider);

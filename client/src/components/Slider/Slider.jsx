import React, { useRef, useState } from "react";
import { sliderItems } from "../../data";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  InsertEmoticon,
} from "@mui/icons-material";

import "./Slider.scss";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const listRef = useRef();

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1);
  };

  return (
    <div className="slider">
      <div className="arrow arrowLeft" onClick={prevSlide}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="content"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        ref={listRef}
      >
        {sliderItems.map((item) => (
          <div
            className="slide"
            style={{ backgroundColor: item.bg }}
            key={item.id}
          >
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.desc}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow arrowRight" onClick={nextSlide}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

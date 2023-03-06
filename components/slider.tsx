import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.scss";
function slider() {
  let settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    sliderToShow: 4,
    sliderToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.p1}>
          <img className={styles.p2} src="http://placekitten.com/g/400/200" />
        </div>
        <div className={styles.p1}>
          <img className={styles.p2} src="http://placekitten.com/g/400/200" />
        </div>
        <div className={styles.p1}>
          <img className={styles.p2} src="http://placekitten.com/g/400/200" />
        </div>
        <div className={styles.p1}>
          <img className={styles.p2} src="http://placekitten.com/g/400/200" />
        </div>
      </Slider>
    </div>
  );
}

export default slider;

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
    sliderToShow: 1,
    sliderToScroll: 1,
  };
  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className={styles.p1}>
            <img
              className={styles.p2}
              src="https://i.ytimg.com/vi/vMVwdSp489E/maxresdefault.jpg"
              width={750}
              height={200}
            />
          </div>
          <div className={styles.p1}>
            <img
              width={750}
              height={200}
              className={styles.p2}
              src="https://png.pngtree.com/png-clipart/20210620/original/pngtree-creative-technology-smart-style-mobile-phone-promotion-banner-template-png-image_6440979.jpg"
            />
          </div>
          <div className={styles.p1}>
            <img
              width={750}
              height={200}
              className={styles.p2}
              src="https://prbaochi.cdn.vccloud.vn/wp-content/uploads/2021/07/mau-banner-quang-cao-san-pham-15.jpg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default slider;

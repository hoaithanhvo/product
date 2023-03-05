import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './data';

function App() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {



    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

    ],
  };



  return (
    <div className="App">

      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">

              {/* <h1 style={{ textAlign: "center" }}>{item.title}</h1> */}
              <img style={{ width: "90%", margin: "0 auto" }}
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                } />
            </div>
            <div className="card-bottom">
              {/* <h3 style={{ textAlign: "center" }}>{item.price}</h3> */}
              {/* <h3 style={{ textAlign: "center" }}>{item.category}</h3> */}
              {/* <h3 className="category">{item.category}  </h3> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default App;
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/ThemeSlide.css';

function ThemeSlide(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const csstyle = `
  .slick-next:before, .slick-prev:before {
    color: #000;
    font-family: "slick";
    font-size: 40px;
  }

  .slick-prev:before {
    margin-left: -15px;
  }
  `;

  return (
    <>
      <div id="theme-title">
        <span>{props.themeTitle}</span>
      </div>
      <div id="theme-travel-content">
        <style>{csstyle}</style>
        <Slider {...settings}>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
          <div>
            <img src={props.src} alt={props.alt} className="theme-slide-img" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default ThemeSlide;

import React ,{Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Img from './imgs/html.png'
import Img2 from './imgs/css.png'
import Img3 from './imgs/js.png'
import Img4 from './imgs/react.png'
function Skills() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow:3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
    <>
      <div class="div1">
        <h1>SKILLS</h1>
        <p>YOU CAN SEE MY SKILLS HERE.</p>
    
          <Slider {...settings}>
            <div className='item'>
              <img src={Img} alt='...'/>
              <h3>HTML</h3>
            </div>

            <div className='item'>
              <img src={Img2} alt='...'/>
              <h3>CSS</h3>
            </div>

            <div className='item'>
              <img src={Img3} alt='...'/>
              <h3>JAVASCRIPT</h3>
            </div>

            <div className='item'>
              <img src={Img4} alt='...'/>
              <h3>REACT</h3>
            </div>

          </Slider>

      </div>

    <hr/>
    </>
    );
  };


  
  export default Skills;
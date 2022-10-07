import React from 'react'
import Tdata from './TData'
import Slider from "react-slick";

const TopCart = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
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
      <Slider {...settings}>

        {
          Tdata.map((value, index) => {
            return (
              
                <div className='box product' key={index}>
                  <div className='nametop d_flex'>
                    <span className='tleft'>{value.para}</span>
                    <span className='tright'>{value.desc}</span>
                  </div>
                  <div className='img'>
                    <img src={value.cover} alt='' />
                  </div>
                </div>
              
            )
          })
        }
      </Slider>
    </>
  )
}

export default TopCart
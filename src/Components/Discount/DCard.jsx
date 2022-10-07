import React from 'react'
import Ddata from './Ddata'
import Slider from "react-slick";


const DCard = () => {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
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
                initialSlide: 2,
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

            {Ddata.map((value,index) => {
            
            return(
              
                <div className='product' key={index}>
                    <div className='box'>
                    <div className='img'>
                        <img src={value.cover} alt='' style= {{width:"100%"}} />

                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                </div></div>
              
            )
        })}
      </Slider>
        </>
  )
}

export default DCard
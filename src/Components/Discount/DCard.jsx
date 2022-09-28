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
        autoplay: true
      };
  
  return (
        <>
                    <Slider {...settings}>

            {Ddata.map((value,index) => {
            
            return(
                <>
                <div className='product' key={index}>
                    <div className='box'>
                    <div className='img'>
                        <img src={value.cover} alt='' style= {{width:"100%"}} />

                    </div>
                    <h4>{value.name}</h4>
                    <span>{value.price}</span>
                </div></div>
                </>
            )
        })}
      </Slider>
        </>
  )
}

export default DCard
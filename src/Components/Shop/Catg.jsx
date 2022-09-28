import React from 'react'

export const Catg = () => {

  const data = [
    {
      cateImg: "./images/categories/apple.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/categories/samsung.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/categories/oppo.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/categories/vivo.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/categories/redmi.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/categories/sony.png",
      cateName: "Sony",
    },
  ]

  return (
 <>
  <div className='category'>
    <div className='chead d_flex'>
      <h1>Brands</h1>
      <h1>Shops</h1>
    </div>
    {
      data.map((val,index) => {
        return (
          <div className='box f_flex' key={index}>
            <img src={val.cateImg} alt='' />
            <span>{val.cateName}</span>
          </div>
        )
      })
    }
    <div className='box box2'>
      <button>View All Brands</button>
    </div>
  </div>
 </>
  )
}

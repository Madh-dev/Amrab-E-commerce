import React, {useEffect, useState} from 'react'

const Categories = () => {
    const data = [
           {
      cateImg: "./Images/categories/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./Images/categories/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "./Images/categories/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "./Images/categories/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "./Images/categories/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "./Images/categories/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "./Images/categories/cat7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg:"./Images/categories/cat8.png",
      cateName: "Pets",
    },
    {
      cateImg: "./Images/categories/cat9.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./Images/categories/cat10.png",
      cateName: "Groceries",
    },
    {
      cateImg: "./Images/categories/cat11.png",
      cateName: "Books",
    },
    ]
    const [MobileMenu, setMobileMenu] = useState(false);
const [width, setWidth] = useState(window.innerWidth);
useEffect(()=>{
function handleResize(){
  setWidth(window.innerWidth);
}
window.addEventListener("resize",handleResize);
return ()=> window.removeEventListener("resize", handleResize);
},[width]);
useEffect(()=>{
  if (width <= 768){
    setMobileMenu(true)
  }else{
    setMobileMenu(false);
  }
},[width])



    return (
            <>
            <div className= {MobileMenu? 'catClose' : 'category'}>
                {
                    data.map((value,index)=> {
                        return(
                            <div className='box f_flex' key={index}>
                                <img src={value.cateImg} alt='' />
                                <span>{value.cateName}</span>

                                </div>
                        )
                    })
                }
            </div>
            </>
    )
}

export default Categories
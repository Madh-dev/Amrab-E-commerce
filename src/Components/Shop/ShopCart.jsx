import React, { useState } from 'react'

const ShopCart = ({addTocart,shopItems}) => {




  
  const [count, setCount] = useState(0);
  const increment = () => {
      setCount(count + 1);
  }


  return (
   <>


{ shopItems.map((shopItem) =>{
        return (
            <div className='box' key={ shopItem.id}>
            <div className='product mtop'>
                <div className='img'>
                    <span className='discount' > {shopItem.discount} % Off</span>
                    <img src={shopItem.cover}  alt=''/>
                    <div className='product-like'>
                    <label >0</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                    </div>
                   <div className='product-details'>
                    <h3>{shopItem.name}</h3>
                    <div className='rate'>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                        <i className='fa fa-star'></i>
                    </div>
                    <div className='price'>
                        <h4>{shopItem.price}.00</h4>
                        <button className=''onClick={() => addTocart(shopItem)} >
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                   </div>
                </div>
            </div>
        </div>
        )
    })}

   </>
  )
}

export default ShopCart
import React from 'react'
import FlashCard from './FlashCard'

const FlashDeal = ({productItems, addTocart}) => {
  return (
   <>
   <section className='flash background'>

    <div className='container '>
        <div className='heading  f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Flash Deal</h1>
           
        </div>
        <FlashCard  productItems = {productItems} addTocart = {addTocart} />
    </div>
   </section>
   </>

  )
}

export default FlashDeal
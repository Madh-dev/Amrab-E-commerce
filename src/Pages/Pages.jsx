import React from 'react'
import Announcement from '../Components/Announcement/Announcement'
import Discount from '../Components/Discount/Discount'
import FlashDeal from '../Components/Flashdeal/FlashDeal'
import Home from '../Components/Mainpage/Home'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import Shop from '../Components/Shop/Shop'
import TopCarte from '../Components/Top/TopCarte'
import Wrapper from '../Components/Wrapper/Wrapper'

const Pages = ( {productItems,addTocart,cartItem, shopItems}) => {
  return (
        <>
        <Home cartItem = {cartItem} />
        <FlashDeal  productItems = {productItems} addTocart = {addTocart} />
        <TopCarte />
        <NewArrivals />
        <Discount />
               <Shop  shopItems= {shopItems} addTocart = {addTocart}/>
               <Announcement />
               <Wrapper />
        </>
    )
}

export default Pages
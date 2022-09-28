import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import {
  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Pages from './Pages/Pages';
import Data from './Components/Flashdeal/Data';
import Cart from './Common/Cart/Cart';
import SData from './Components/Shop/SData';
import Footer from './Common/Footer/Footer';


function App() {
  // step 1: fetch data from the database (Data.js)
  const {productItems} = Data;
  const {shopItems} = SData;
const [cartItem, setCardItem] = useState([]);
const addTocart = (product) => {
  const productExit = cartItem.find((item) => item.id === product.id)
  if(productExit){

    setCardItem(cartItem.map((item) => 
      (item.id === product.id ? {...productExit, qty: productExit.qty + 1} : item
    )))
  }
  else {
    setCardItem([...cartItem, {...product, qty: 1}])
  }

}

const decreaseQty = (product) =>{
  const productExit = cartItem.find((item) => item.id === product.id)
  if(productExit.qty === 1){
    setCardItem(cartItem.filter((item) => item.id !== product.id));
  }else {
  
      setCardItem(cartItem.map((item)=> (
        item.id === product.id ? {...productExit, qty: productExit.qty - 1} :  item)))
    
   
  }
}

  return (
    <>
      <Router>
      <Header cartItem = {cartItem } />
      <Switch>
          <Route path='/' exact>
          <Pages productItems={productItems}  addTocart = {addTocart}  shopItems = {shopItems} />
          </Route>
          <Route path='/cart' exact>
          <Cart  cartItem ={cartItem} addTocart = {addTocart} decreaseQty = {decreaseQty} />
          </Route>
          
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

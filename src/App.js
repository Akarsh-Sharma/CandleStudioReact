import React from 'react'
import ShopMain from './containers/ShopMain';
import ShopBasket from './containers/ShopBasket';
import ShopHeader from './containers/ShopHeader';
import data from './containers/data';

import { Footer, Blog, Reviews, Shop, WhatCandleStudio, Header, ContactUs } from './containers';
import { CTA, Navbar } from './components'; 
import './App.css';
import { useState } from 'react';

function App () {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }; 

  return (

    <div className='App'>
      <div className='gradient__bg2'>
        <Navbar/>
      </div>
      <div className='gradient__bg'>
        <Header/>
      </div>
      <div className='gradient__bg3'>
      <div className="shoprow gradient__bg2">
        <ShopMain products={products} onAdd={onAdd}></ShopMain>
        <ShopBasket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></ShopBasket>
      </div>
      <Reviews/>
      <div className='gradient__bg4'>
      <WhatCandleStudio/>
      </div>
      </div>
      <ContactUs/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
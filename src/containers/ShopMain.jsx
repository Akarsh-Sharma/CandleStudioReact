import React from 'react';
import Product from './Product';
import ShopBasket from './ShopBasket';

const ShopMain = function(props) {
  
  const { products, onAdd } = props;
  return (
    <main className="shopblock shopcol-2 section__padding" id="shopMain">
      <h1 className="shop_heading1">Our Products</h1>
      <div className="shoprow">
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}

export default ShopMain;
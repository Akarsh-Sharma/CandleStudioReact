import React from 'react';

const ShopHeader = function(props) {
  return (
    <header className="shopblock shoprow shopcenter">
      <div>
        <a href="#/">
          <h1>Our Products</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> SignIn</a>
      </div>
    </header>
  );
}

export default ShopHeader;
import React from 'react';
import Header from './header'
import List from './list'
import Coupon from './coupon'
import Summary from './summary'

function Cart({}) {
  return (
    <>
      <div className="cart p-4 pt-5">
        <Header />
        <List />
        <Coupon />
        <Summary />
      </div>

      <style jsx>
        {`
          .cart {
            position: fixed;
            width: 350px;
            height: 100%;
            background: white;
            box-shadow: 0px 0px 10px #9c9c9c;
            top: 0px;
            right: 0px;
            z-index: 10;
          }

        `}
      </style>
    </>
  );
}

export default Cart;

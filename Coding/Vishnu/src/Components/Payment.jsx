import React from 'react';

import { Link } from 'react-router-dom';
function Payment() {
  return (
    <div>
      <Link to="/home">
        <button>home</button>
      </Link>
      <Link to="/payment">
        <button>Cart</button>
      </Link>
      <Link to="/cart">
        <button>Payment</button>
      </Link>
  <h1>    Welcome to Paymentpage</h1>
    </div>
  );
}

export default Payment;

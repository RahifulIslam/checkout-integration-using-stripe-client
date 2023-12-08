import React from 'react';
import Navbar from '../navigation/Navbar';

const CheckoutSuccess = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Checkout Success</h2>
      </div>
    </div>
    </>
  );
};

export default CheckoutSuccess;

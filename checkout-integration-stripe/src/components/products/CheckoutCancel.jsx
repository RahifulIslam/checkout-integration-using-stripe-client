import React from 'react';
import Navbar from '../navigation/Navbar';

const CheckoutCancel = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">Checkout Canceled</h2>
        <p className="text-gray-600">Your checkout process has been canceled.</p>
      </div>
    </div>
    </>
  );
};

export default CheckoutCancel;

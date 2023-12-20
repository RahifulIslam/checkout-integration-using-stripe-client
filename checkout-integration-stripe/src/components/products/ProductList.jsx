import React from "react";
import { Link } from "react-router-dom";
import { productsArray } from "../../productsStore";
import axios from "axios";
import Navbar from "../navigation/Navbar";
const url = "https://product-checkout-integration.onrender.com";

const ProductList = () => {
  // Calculate total price
  const totalPrice = productsArray.reduce(
    (total, product) => total + product.price,
    0
  );

  const handleCheckout = () => {
    axios
      .post(`${url}/api/payment/create-checkout-session`, {
        productsArray,
      })
      .then((res) => {
        console.log("data are:", res.data.url);
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
    <Navbar/>
    <div className="mt-7 md:ml-12 md:mr-12">
      {productsArray.map((product) => {
        // console.log(product)
        return (
          <div
            key={product.id}
            className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 p-2 md:space-x-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded mb-2 md:mb-0"
            />
           <div className="flex-grow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
        );
      })}
      {/* Display Total Price */}
      <div className="flex flex-col items-center mt-4">
        <p className="text-xl font-semibold mb-2">
          Total Price: ${totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex flex-col items-center mt-4">
        {/* Link to the payment page */}
        <button
          onClick={() => {
            handleCheckout();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Checkout Product
        </button>
      </div>
    </div>
    </>
  );
};

export default ProductList;

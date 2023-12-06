import React from "react";
import { Link } from "react-router-dom";
import { productsArray } from "../../productsStore";

const ProductList = () => {
  // Calculate total price
  const totalPrice = productsArray.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="mt-[7rem] ml-[12rem] mr-[12rem]">
      {productsArray.map((product) => (
        <div
          key={product.id}
          className="flex justify-between items-center border-b border-gray-300 p-2"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-16 h-16 object-cover rounded mr-4"
          />
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
        </div>
      ))}
      {/* Display Total Price */}
      <div className="flex justify-end mt-4">
          <p className="text-xl font-semibold">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
      </div>
      <div className="flex justify-end mt-4">
          {/* Link to the payment page */}
          <Link to="/payment">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Checkout
            </button>
          </Link>
        </div>
    </div>
  );
};

export default ProductList;
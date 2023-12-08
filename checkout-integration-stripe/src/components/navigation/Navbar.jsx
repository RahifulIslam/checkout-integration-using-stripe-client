import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    const handleClick=()=>{
        localStorage.clear();
    }
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-white text-2xl font-bold">
              <Link to="/product-list">Products</Link>
              </div>
              <div className="flex space-x-4">
                {/* <a href="#" className="text-white hover:text-gray-300">Home</a> */}
                <button onClick={handleClick} className="text-white hover:text-gray-300"> 
                <Link to="/">Log Out</Link>
                </button>
                {/* <a href="#" className="text-white hover:text-gray-300">Services</a>
                <a href="#" className="text-white hover:text-gray-300">Contact</a> */}
              </div>
            </div>
          </div>
        </nav>
      );
}

export default Navbar
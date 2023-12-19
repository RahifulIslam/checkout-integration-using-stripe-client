import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });

      const [errorMessage, setErrorMessage] = useState(""); // State to hold the error message
      const [successMessage, setSuccessMessage] = useState('');

      const navigate = useNavigate();

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
              "https://product-checkout-integration.onrender.com/api/user/sign-up",
              formData
            );
            setSuccessMessage(response.data.message);
            setErrorMessage(''); // Clear any existing error message
            console.log(response.data); // Handle successful response
            navigate("/");
          } catch (error) {
            console.error(error);
            setErrorMessage(error.response.data);
            setSuccessMessage(''); // Clear any existing success message
          }
          setFormData({ username: "", email: "", password: "" }); // Reset the form after submission
      };
    

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="w-1/3">
    <form className="max-w-xl p-8 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6">Register</h2>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700 text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Register
      </button>
      {errorMessage && <p style={{ color: 'red', marginTop: '8px' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green', marginTop: '8px' }}>{successMessage}</p>}
      <div className="mt-4 text-green-500 underline flex justify-center">
            <Link to="/">Go the the login page</Link>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Registration
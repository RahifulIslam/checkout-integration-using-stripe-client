import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

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
        "http://localhost:4003/api/user/sign-in",
        formData
      );
      console.log(response.data); // Handle successful login
      setErrorMessage(""); // Clear any existing error message
    } catch (error) {
      console.error(error);
      setErrorMessage(error.response.data.message);
    }
    setFormData({ email: "", password: "" }); // Reset the form after submission
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3">
        <form
          className="max-w-xl p-8 bg-white shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
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
            Login
          </button>
          {errorMessage && (
            <p style={{ color: "red", marginTop: "8px" }}>{errorMessage}</p>
          )}
          <div className="mt-4 flex justify-center">
          <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300">
            <Link to="/registration">Create a new account</Link>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

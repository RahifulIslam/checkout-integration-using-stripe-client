import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/registration-login/Registration';
import Login from './components/registration-login/Login';
import ProductList from './components/products/ProductList';

function App() {

  return (
    <>
     <Router>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/registration" element={<Registration />} />
     <Route path="/product-list" element={<ProductList />} />
     </Routes>
     </Router>
    </>
  )
}

export default App

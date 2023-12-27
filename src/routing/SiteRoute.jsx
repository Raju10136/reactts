
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MainLayout from '../themes/MainLayout';
import LoginLayout from '../themes/LoginLayout';
import PrivateRoute from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
const SiteRoute = () => {
  const isAuthenticated = true;
 
 

  return (
    <>
    <Router>
      <Routes>
      <Route
          path="/login"
          element={
            <LoginLayout>
              <Routes>
                <Route path="/" element={<Login />} />
              </Routes>
            </LoginLayout>
          }
        />
        <Route
          path="/*"
          element={<PrivateRoute ><MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </MainLayout></PrivateRoute>}
        />       
      </Routes>
    </Router>
    <ToastContainer />
    </>
  )
}

export default SiteRoute

import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import MainLayout from '../themes/MainLayout';
import LoginLayout from '../themes/LoginLayout';

const SiteRoute = () => {
    return (
        <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<Home />} />
                  <Route path="/contact" element={<Home />} />
                </Routes>
              </MainLayout>
            }
          />
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
        </Routes>
      </Router>
    )
}

export default SiteRoute
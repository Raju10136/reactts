// LoginLayout.js
import React from 'react';
import Header from './MainTheme/Header';
const MainLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#eee', color: '#000' }}>
     <Header />
      <main>{children}</main>
      <footer>
        <p>Main Layout</p>
      </footer>
    </div>
  );
};

export default MainLayout;
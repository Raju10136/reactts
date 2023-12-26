// LoginLayout.js
import React from 'react';
const LoginLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: '#eee', color: '#000' }}>
      <header>
        <h1>Login Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Login Footer</p>
      </footer>
    </div>
  );
};

export default LoginLayout;
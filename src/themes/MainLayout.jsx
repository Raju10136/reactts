// LoginLayout.js
import React from 'react';
import Header from './MainTheme/Header';
import { useSiteContext } from '../contexts/SiteProvider';
const MainLayout = ({ children }) => {
  const {user,setUser} = useSiteContext();
  const handleLogout=()=>{
    setUser();
  }
  return (
    <div style={{ backgroundColor: '#eee', color: '#000' }}>
     <Header user={user} handleLogout={handleLogout}/>
      <main>{children}</main>
      <footer>
        <p>Main Layout</p>
      </footer>
    </div>
  );
};

export default MainLayout;
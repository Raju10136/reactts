import React from 'react';
import { Link} from 'react-router-dom';
const Header = ({ user,handleLogout}) => {



  return (
   
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img
        src="https://bulma.io/images/bulma-logo.png"
        width={112}
        height={28}
      />
    </a>
    <a
      role="button"
      className="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">Home</a>
      <a className="navbar-item">Documentation</a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">More</a>
        <div className="navbar-dropdown">
          <a className="navbar-item">About</a>
          <a className="navbar-item">Jobs</a>
          <a className="navbar-item">Contact</a>
          <hr className="navbar-divider" />
          <a className="navbar-item">Report an issue</a>
        </div>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
       {!user &&  <div className="buttons">  
          <Link className="button is-light" to="/login">Login </Link>       
         
        </div>
       }
       {user && <div>{user?.email}  <a onClick={()=>handleLogout()} className="button is-light">Log out</a> </div>}
      </div>
    </div>
  </div>
</nav>
  );
};

export default Header;

import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div>
        <div className="space-x-4">          
        <div className="navbar">
        <Link to="/">Home</Link>
        {/* <Link to="/assignments">Assignments</Link> */}
        {/* <Link to="/portion">Portion</Link> */}
        <Link to="/dashboard">Dashboard</Link>
        <div className="navbar-right">
          <Link to="/login" className="login-signup">Login</Link>
          <Link to="/signup" className="login-signup">Signup</Link>
        </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

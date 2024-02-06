import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const NavbarStudent = () => {
  return (
    <nav className="bg-white">
      <div>
        <div className="space-x-4">          
        <div className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/syllabus">Syllabus</Link>
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

export default NavbarStudent;


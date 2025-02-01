import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./button";

const Navbar = () => {
    const isAuthenticated = false; // Replace with auth logic later
  
    return (
      <nav className="flex justify-between items-center p-4 border-b shadow-md">
        <div className="text-xl font-bold">
          <Link to="/">Real Estate</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/properties">Properties</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          {isAuthenticated ? (      
            <FaUserCircle size={24} />
          ) : (
            <div className="flex gap-2">
              <Link to="/login">
                <Button>Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline">Signup</Button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
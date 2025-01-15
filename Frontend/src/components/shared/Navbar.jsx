import React from "react";
import {Button} from "../ui/Button";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500">
          <a href="/">MyLogo</a>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <Button to = "/login" className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
            Login
          </Button>
          <Button variant="secondary" onClick = "/register" className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

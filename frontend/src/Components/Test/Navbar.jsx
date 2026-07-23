import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/">Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"red": ""}} to="/playground">Playground</NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/user/userName">profile</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

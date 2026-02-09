import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex flex-row gap-4 space-content-evenly">
      <h1>Paste App</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pastes">Paste</NavLink>
    </div>
  );
};

export default NavBar;

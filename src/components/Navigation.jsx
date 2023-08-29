import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex gap-x-5 py-2.5">
      <NavLink to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/posts" activeClassName="active">
        Posts
      </NavLink>
    </div>
  );
}

export default Navigation;

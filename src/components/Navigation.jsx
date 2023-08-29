import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex gap-x-5 py-2.5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium border-b-2 border-blue-500" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium border-b-2 border-blue-500" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium border-b-2 border-blue-500" : ""
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/posts"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium border-b-2 border-blue-500" : ""
        }
      >
        Posts
      </NavLink>
    </div>
  );
}

export default Navigation;

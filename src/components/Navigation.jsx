import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="flex border-b border-blue-500 gap-x-5 py-2.5">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}

export default Navigation;

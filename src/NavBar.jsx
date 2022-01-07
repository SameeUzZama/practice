import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/product">e-Shop</Link>
      <Link to="/backclr">backgroud color</Link>
    </div>
  );
};

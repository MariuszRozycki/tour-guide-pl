// src/components/Nav.tsx
import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-logo-wrapper">
        <img src="../../public/logo.jpg" alt="logo" />
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Glowna
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)}>
            O mnie
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Oferty
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

// src/components/Nav.tsx
import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav: React.FC = () => {
  // const getNavLinkClass = (isActive: boolean) => (isActive ? "nav-link active" : "nav-link");

  return (
    <nav className="nav">
      <div className="nav-logo-wrapper">
        <a href="/">
          <img src="../../public/logo.jpg" alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)}>
            Główna
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

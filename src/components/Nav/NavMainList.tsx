import React from "react";
import { NavLink } from "react-router-dom";

interface NavMainListProps {
  closeModal: () => void;
}

const NavMainList = React.forwardRef<HTMLUListElement, NavMainListProps>((props, ref) => {
  const { closeModal } = props;

  return (
    <ul className="nav-main_list" ref={ref}>
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={closeModal}>
          Główna
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={closeModal}>
          O mnie
        </NavLink>
      </li>
      <li>
        <NavLink to="/offers" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={closeModal}>
          Oferty
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : undefined)} onClick={closeModal}>
          Kontakt
        </NavLink>
      </li>
    </ul>
  );
});

export default NavMainList;

import React from "react";
import MainHeading from "../MainHeading/MainHeading";
import { NavLink } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-content">
          <MainHeading />
          <p>Skorzystaj z najlepszych ofert na podróże już teraz!</p>

          <NavLink to="/offers" className="btn hero-btn">
            Zobacz oferty
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;

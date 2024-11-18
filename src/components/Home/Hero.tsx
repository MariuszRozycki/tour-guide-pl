import React from "react";
import MainHeading from "../MainHeading/MainHeading";
import { NavLink } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-bcg-img">
        <div className="hero-content">
          <MainHeading />
          <p>Skorzystaj z najlepszych ofert!</p>

          <NavLink to="/offers" className="btn">
            Zobacz oferty
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;

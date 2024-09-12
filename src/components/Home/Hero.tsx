import React from "react";
import MainHeading from "../MainHeading/MainHeading";
import { Button } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-content">
          <MainHeading />
          <p>Skorzystaj z najlepszych ofert na podróże już teraz!</p>
          <Button variant="primary">Zobacz oferty</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

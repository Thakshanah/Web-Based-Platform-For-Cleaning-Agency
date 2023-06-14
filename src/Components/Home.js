// 

import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import backgroundImage from "../Assets/cleanhome.jpg";

const Home = () => {
  return (
    <div>
          <Navbar />
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Adjusts the size of the background image to cover the entire div
        backgroundPosition: "center", // Positions the background image at the center of the div
      }}
    >
  
      <div className="home-banner-container" style={{ marginRight: '50px' }}>
        <div className="home-text-section" style={{ marginLeft: '50px' }}>
          <h1 className="primary-heading" style={{color:'navy', textAlign: 'left'}}>
            Quality Home Services,
            On Demand
          </h1>
          <p className="primary-text">
            Where cleanliness meets perfection - Let us sparkle your world.
          </p>
          <button className="secondary-button" style={{ backgroundColor: 'navy', color: 'white' }}>
            Book Now <FiArrowRight />
          </button>
          <br/>
          <br/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;


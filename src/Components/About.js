import React from "react";
import AboutBackgroundImage from "../Assets/about1.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
// import { lightBlue } from "@mui/material/colors";

const About = () => {
  return (
  
    <div style={{ backgroundColor: 'lightgray' }}>
        <br/>
        <br/>
    <div className="about-section-image-container">
        <img style={{height: '400px', float:"left", marginRight:'50px', marginTop: '30px'}} src={AboutBackgroundImage} alt="" />
      <div className="about-section-text-container">
        <p className="primary-subheading" style={{ fontSize: '50px',color:'Navy' }}>About</p>
        
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          efwhufhuw weirhfi vdviwi nrjfirwji viewviowjro  Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          efwhufhuw weirhfi vdviwi nrjfirwji viewviowjro 
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button" style={{backgroundColor: 'navy', color: 'white'}}>Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
        <br/>
        <br/>
      </div>
    </div>
    </div>
  );
};

export default About;

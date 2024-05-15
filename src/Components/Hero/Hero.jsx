import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1><span> I'm Alex Bennett,</span> frontend developer based in USA.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        quaerat quae officia quis eius, commodi, aspernatur tempore modi facilis
        cumque eveniet minima impedit ex vel. Est, nemo odit. Odit, non?
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;

import { Link } from "react-router-dom";
import { useState } from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Left Content */}
      <div className="hero-content">
        <h1>
          Discover & Enjoy <span className="highlight">Delicious Food</span>
        </h1>
        <p>
        Welcome to DishDelights, where every meal is a new adventure waiting to unfold! 
        Our vibrant community of food lovers from around the world is dedicated to bringing 
        you recipes that cater to every taste and dietary preference. 
        </p>
        <div className="buttons">
          <button className="btn primary"><Link to="/recipes">Recipes</Link></button>
          <button className="btn secondary"><Link to="/about">About us</Link></button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hero-image">
        <img
          src= './images/hero-image.png'
          alt="Delicious food"
        />
      </div>
    </section>
  );
};

export default HeroSection;


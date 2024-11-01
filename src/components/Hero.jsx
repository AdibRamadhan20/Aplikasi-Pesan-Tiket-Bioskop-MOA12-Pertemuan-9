import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <img src="https://wallpapers.com/images/hd/meet-the-big-hero-6-dcgobnncu2wgb1rw.jpg" alt="Hero" />
      <div className="hero-content">
        <h1>Welcome to MovieApp</h1>
        <button><a href="/Movies">Explore Now</a></button>
      </div>
    </div>
  );
}

export default Hero;

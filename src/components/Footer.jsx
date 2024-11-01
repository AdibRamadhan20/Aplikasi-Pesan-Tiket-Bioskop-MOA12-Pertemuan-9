import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="Information-Footer">
          <h2>NontonGO</h2>
          <p>Diselenggarakan oleh NontonGO</p>
          <p>Jl. Film No. 1, Yogyakarta 55283</p>
          <p>Email: info@NontonGO.com</p>
          <p>Telp: (0274) 123456</p>
          <p>Fax: (0274) 123457</p>
        </div>
        <div className="Menu-Navbar-Footer">
          <h2>Menu</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/About">About</a></li>
            <li><a href="/Movies">Movies</a></li>
            <li><a href="/New & Popular">New & Popular</a></li>
            <li><a href="/My List">My List</a></li>
            <li><a href="/FAQ">FAQ</a></li>
          </ul>
        </div>
        <div className="Link-Footer">
          <h2>Links</h2>
          <ul>
            <li><a href="akademik.php">Movie and Series Categories</a></li>
            <li><a href="innovation.php">Popular Movies</a></li>
            <li><a href="more.php">More</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 NontonGO. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollOffset = -70;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link
        activeClass="active"
        to="intro"
        spy={true}
        smooth={true}
        offset={scrollOffset}
        duration={500}
        className="desktopMenuListItem"
        onClick={closeMobileMenu}
      >
        Home
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={scrollOffset}
        duration={500}
        className="desktopMenuListItem"
        onClick={closeMobileMenu}
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="works"
        spy={true}
        smooth={true}
        offset={scrollOffset}
        duration={500}
        className="desktopMenuListItem"
        onClick={closeMobileMenu}
      >
        Portfolio
      </Link>
      <Link
        activeClass="active"
        to="articles"
        spy={true}
        smooth={true}
        offset={scrollOffset}
        duration={500}
        className="desktopMenuListItem"
        onClick={closeMobileMenu}
      >
        Articles
      </Link>
    </>
  );

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      {/* Desktop Navigation */}
      <div className="desktopMenu">{navLinks}</div>

      {/* Hamburger Menu Icon - only visible on mobile */}
      <div className="mobMenu" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes color="white" size={24} /> : <FaBars color="white" size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="navMenu">
          {navLinks}
          <button
            className="mobileMenuBtn"
            onClick={() => {
              document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' });
              closeMobileMenu();
            }}
          >
            <img src={btnImg} alt="Contact Me" className="desktopMenuImg" /> Contact Me
          </button>
        </div>
      )}

      {/* Desktop Button */}
      <button
        className="desktopMenuBtn"
        onClick={() =>
          document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' })
        }
      >
        <img src={btnImg} alt="Contact Me" className="desktopMenuImg" /> Contact Me
      </button>
    </nav>
  );
}

export default Navbar;

import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

function Navbar() {
  const scrollOffset = -70;

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        {/* Home Link - targets the 'intro' section */}
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={scrollOffset}
          duration={500}
          className="desktopMenuListItem"
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
        >
          About
        </Link>

        {/* Portfolio Link - targets the 'works' section */}
        <Link
          activeClass="active"
          to="works" // ID from your Works (Portfolio) component
          spy={true}
          smooth={true}
          offset={scrollOffset}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>

        {/* Articles Link - targets the 'articles' section */}
        <Link
          activeClass="active"
          to="articles" // ID from your Articles component
          spy={true}
          smooth={true}
          offset={scrollOffset}
          duration={500}
          className="desktopMenuListItem"
        >
          Articles
        </Link>
      </div>

      {/* Hire Me Button - already correctly targets 'contactPage' */}
      <button
        className="btn"
        onClick={() =>
          document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' })
        }
      >
        <img src={btnImg} alt="Hire Me" className="btnImg" /> Hire Me
      </button>
    </nav>
  );
}

export default Navbar;
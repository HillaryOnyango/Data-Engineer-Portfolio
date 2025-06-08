import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import btnImg from '../../assets/hireme.png'; // ✅ Add this import
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Articles</Link>
      </div>
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

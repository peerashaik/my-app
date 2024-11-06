import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header text-center">
      <NavLink className="link" to="/"><h1 className="title">Shaik Peera</h1></NavLink>
      <p className="small m-0">DESIGN <span>|</span> DEVELOP <span>|</span> TECHY <span>|</span> MENTOR</p>
    </div>

    <div class="navToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul class="menu">
        <li>
            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
        </li>
        <li>
            <NavLink to="/skills" className="nav-link">SKILLS</NavLink>
        </li>
        <li>
            <NavLink to="/patrons" className="nav-link">PATRONS</NavLink>
        </li>
        <li>
            <NavLink to="/works" className="nav-link">WORKS</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="nav-link">CONTACT</NavLink>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Header;

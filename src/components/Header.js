import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
    <div className="header flex flex-col justify-center items-center mt-14 mb-7">
      <NavLink className="link no-underline p-0" to="/"><h1>Shaik Peera</h1></NavLink>
      <p className="small m-0">DESIGN <span>|</span> DEVELOP <span>|</span> TECHY <span>|</span> MENTOR</p>
    </div>

    <div className="navToggle">
      <input type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul className="menu fixed top-0 right-0 flex flex-wrap flex-col justify-center items-center w-full md:w-3/6">
        <li>
            <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
        </li>
        <li>
            <NavLink to="/experience" className="nav-link">Experience</NavLink>
        </li>
        <li>
            <NavLink to="/works" className="nav-link">Works</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Header;

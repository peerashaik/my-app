import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <ul className="nav">
          <li className="nav-item"><NavLink to="/about" className="nav-link link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/skills" className="nav-link link">Skills</NavLink></li>
          <li className="nav-item"><NavLink to="/patrons" className="nav-link link">Patrons</NavLink></li>
          <li className="nav-item"><NavLink to="/works" className="nav-link link">Works</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link link">Contact</NavLink></li>
        </ul>
        <ul className="nav social">
          <li><a className="link" href="Certified-Magento2-Frontend-Developer-PeeraShaik.pdf" download="Certified-Magento2-Frontend-Developer-PeeraShaik.pdf">Download - RESUME</a></li>
          <li className="ms-2">
            <a href="https://www.facebook.com/peera.shaik" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a>
          </li>
          <li className="ms-2">
            <a href="https://www.instagram.com/peerashaik786" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a>
          </li>
          <li className="ms-2">
            <a href="https://www.linkedin.com/in/peerashaik/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </footer>
    <div className="copyright text-center py-4">
        <p className="m-0">© <span id='date'></span> Shaik'sWeb. All rights reserved.</p>
    </div>
    <NavLink to="#" className="back-to-top"><i className="bi bi-arrow-up-circle-fill"></i></NavLink>
    </>
  );
}

export default Footer;
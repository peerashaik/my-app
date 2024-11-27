import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  const downloadResume = () => {
    fetch("Senior-UI-Designer-Developer-PeeraShaik.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Senior-UI-Designer-Developer-PeeraShaik.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
    <footer className="footer">
      <div className="container">
      <div className="flex flex-wrap justify-center md:justify-between items-center pt-10">
        <ul className="nav flex flex-wrap justify-center items-center">
          <li className="nav-item"><NavLink to="/about" className="nav-link link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/skills" className="nav-link link">Skills</NavLink></li>
          <li className="nav-item"><NavLink to="/experience" className="nav-link link">Experience</NavLink></li>
          <li className="nav-item"><NavLink to="/works" className="nav-link link">Works</NavLink></li>
          <li className="nav-item"><NavLink to="/contact" className="nav-link link">Contact</NavLink></li>
        </ul>
        <ul className="nav social flex justify-center items-center mt-5 md:mt-0">
          <li>
            <a className="link" onClick={downloadResume}>Download - RESUME</a>
          </li>
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
      </div>
    </footer>
    <div className="copyright flex justify-center items-center py-5 text-sm text-gray-600">
        © <span id='date'></span> Shaik's Web. All rights reserved.
    </div>
    <NavLink to="#" className="back-to-top"><i className="bi bi-arrow-up-circle-fill"></i></NavLink>
    </>
  );
}

export default Footer;
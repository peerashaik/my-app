import React from "react";
import { NavLink } from "react-router-dom";
import FadeInSection from './FadeInSection';
import Button from './Button';
import styled from 'styled-components';

/* left right scroll on page scroll*/
const LRScroller = styled.div`
  ul {
    display: flex;
    list-style: none;
  }

  li {
    background: var(--grey-dark);
    border-radius: 10px;
    padding: 10px 20px;
    margin: 0 10px;
  }

  &[data-animated="true"] {
    overflow: hidden;
  }

  &[data-animated="true"] .scroller-inner {
    width: max-content;
    display: flex;
    justify-content: space-evenly;
    white-space: nowrap;
    animation: 1s scrolling linear;
    animation-timeline: scroll(root);
    margin: 20px 0;
  }

  &[data-direction="right"] .scroller-inner {
    flex-direction: row-reverse;
    animation-direction: reverse;
  }

  @keyframes scrolling {
    to {
        transform: translate(calc(-20% - 0.5rem));
    }
  }
`;

const Home = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center mt-5 px-10">
        <p className="text-gray-500">I am <span className="text-white">Peera Shaik</span>, passionate user interface designer and creative <span className="text-white">Web, App &amp; Brand</span> designer.</p>
        <h1 className="my-5 text-5xl md:text-8xl">SOLID 21 YEARS<br /> OF EXPERIENCE</h1>
        <p>Let's build a client Satisfactory - <NavLink className="link" to="/contact">CONTACT</NavLink></p>
      </div>
    </div>
    </FadeInSection>

    <div className="banners overflow-hidden flex flex-wrap md:flex-nowrap gap-3.5 mt-12">
      <div className="color-bg red flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
        <h2><span className="text-black">User<br/>Interface</span><br/><span className="text-white">Design</span></h2>
        <h4>User Journey | Research | User Flow</h4>
        </div>
      </div>
      <div className="color-bg green flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
        <h2><span className="text-yellow">CSS3</span> <span className="text-white">Style</span></h2>
        <h4>Color | Theme | Beautify | Typography</h4>
        </div>
      </div>
      <div className="color-bg navy-blue flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
        <h2><span className="text-white">HTML</span><span className="text-green">5</span></h2>
        <h4>Layout | Content | Standards</h4>
        </div>
      </div>  
      <div className="color-bg purple flex flex-wrap grow items-center w-full md:w-2/6">
        <div>
        <h2><span className="text-yellow">Javascript</span><br/><span className="text-white">jQuery</span></h2>
        <h4>User Intercation | DOM Manipulation</h4>
        </div>
      </div>
    </div>

    <FadeInSection>
    <div className="container">
      <div className="text-center my-32">
        <h2 className="content-heading relative text-4xl md:text-5xl text-center my-10"><strong><span className="inline-block text-yellow">Pixel Perfect</span> Wins</strong></h2>
        <p className="px-10 mb-10">I have also become a highly valued user interface designer with 21 years of IT industry experience. I am known to push the boundaries of pixel perfect design creations with my keen eyes for details and create interfaces with emerging ideas that result cross browser compatible layouts.</p>
        <Button btnlink='skills' btnstyle='btn-primary' label='DESIGN THEME-ING' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="my-work-list grid md:grid-cols-2 md:gap-20 my-10 py-5">
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://magnahardwoodfloors.com" target="_blank" rel="noreferrer"><img src={require("../../src/images/works/magna.png")} loading="lazy" alt="Magna Hard Wood Floors" /></a>
          </div>
          <h2 className="my-10 relative"><a href="https://magnahardwoodfloors.com" target="_blank" rel="noreferrer">Magnahardwoodfloors.com</a></h2>
        </div>
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://eliobay.com" target="_blank" rel="noreferrer"><img src={require('../../src/images/works/eliobay.png')} loading="lazy" alt="ElioBay" /></a>
          </div>
          <h2 className="my-10 relative"><a href="https://eliobay.com" target="_blank" rel="noreferrer">ElioBay.com</a></h2>
        </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg green py-14 text-center">
      <div className="container">
        <h3 className="uppercase text-white text-3xl md:text-4xl my-10"><strong>CLIENTS TRUST IN QUALITY</strong></h3>
        <div className="fill-white shape-right-slant"></div>
        <p className="text-white px-10 mb-10">Having received over 100 esteemed, industry leading accolades my client work has consistently achieved excellence and innovation in the ever-evolving world of digital design. These recognitions not only affirm my commitment to pushing creative boundaries but also underscore the unwavering dedication to delivering cutting-edge solutions.</p>
        <Button btnlink='works' btnstyle='btn-outline' label='VIEW RECENT WORKS' />
      </div>
      <div className="slant light-blue"></div>
    </div>

    <div className="cards empty py-10">
      <div className="container">
      <div class="grid md:grid-cols-3 md:gap-20">
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>TARGET USERS</h4>
            <p>Designing an interface with your target user in mind is crucial for creating a successful and engaging user experience. Mobile-first and mobile-friendly application development are essential strategies in today’s digital landscape. </p>
        </div>
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>CLIENT SUCCESS</h4>
            <p>Client success in user interface design is often achieved by focusing on several key principles and practices that ensure the final product meets user needs and business goals.</p>
        </div>
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>TEAM WORK</h4>
            <p>Teamwork is essential in user interface design, as it brings together diverse skills and perspectives to create a cohesive and user-friendly product.</p>
        </div>
      </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="my-20">
    <div className="container">
      <LRScroller data-animated="true">
        <ul className="scroller-inner">
          <li>UI/UX</li>
          <li>HTML</li>
          <li>CSS3</li>
          <li>RWD</li>
          <li>JS</li>
          <li>JQUERY</li>
          <li>REACTJS</li>
          <li>WORDPRESS UI</li>
          <li>MAGENTO UI</li>
          <li>SSG</li>
          <li>WEBDEV</li>
        </ul>
      </LRScroller>
      <LRScroller data-animated="true" data-direction="right">
        <ul className="scroller-inner">
          <li>UI/UX</li>
          <li>HTML</li>
          <li>CSS3</li>
          <li>RWD</li>
          <li>JS</li>
          <li>JQUERY</li>
          <li>REACTJS</li>
          <li>WORDPRESS UI</li>
          <li>MAGENTO UI</li>
          <li>SSG</li>
          <li>WEBDEV</li>
        </ul>
      </LRScroller>
    </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <div className="key-skills mb-20">
        <h2 className="text-center my-28">A journey of Commitment towards a learning process!</h2>
        <h3 className="text-center mb-5"><strong>KEY <span className="color-darkpink">SKILLS</span> & <span className="text-blue">TECHNOLOGIES</span></strong></h3>
        <div class="grid md:grid-cols-2 md:gap-20">
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>HTML5 and XHTML:</strong> Adept at crafting semantic and accessible web pages, ensuring compatibility across devices and browsers.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>CSS3 (Less and Sass):</strong> Well-versed in using CSS preprocessors to create modular, maintainable stylesheets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Responsive Web Design:</strong> Committed to delivering responsive and mobile-friendly designs for optimal user experiences.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Bootstrap:</strong> Familiar with the Bootstrap framework for building responsive and consistent UI components.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Tailwind CSS:</strong> Expereinced at a utility-first CSS framework for building raid user interfaces.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>JavaScript and jQuery:</strong> Proficient in enhancing frontend functionality through dynamic scripting and interactivity.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>React JS:</strong> Expertise in developing cross-browser Single Page Applications and mobile friendly user centred applications using React JS.</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>Magento2 Frontend:</strong> Proficient in developing custom themes, templates, and layouts using Magento’s frontend architecture.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Version Control (Git):</strong> Skilled in collaborating with development teams using Git for code versioning.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Performance Optimization:</strong> Dedicated to improving website speed, minimizing HTTP requests, and optimizing assets.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Cross-Browser Compatibility:</strong> Ensuring seamless rendering across various browsers and devices.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Adobe XD, Figma, Sketch, Photoshop, Illustrator.</li>
            <li><i className="bi bi-record-circle-fill"></i><strong>Programming Skills:</strong> HTML5, XHTML, XML, CSS3(Less & Sass), Tailwind CSS, Bootstrap, Responsive Web Design, Semantic UI, W3c Standards, PHP, mySQL, JavaScript, jQuery, React JS, WordPress UI, Magento2 UI, Shopify UI, October CMS.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Home;
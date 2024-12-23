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
        <h2 className="content-heading relative text-4xl md:text-5xl text-center my-10"><strong><span className="inline-block text-green">Pixel Perfect</span> Wins</strong></h2>
        <p className="px-10 mb-10">I have also become a highly valued user interface designer with 21 years of IT industry experience. I am known to push the boundaries of pixel perfect design creations with my keen eyes for details and create interfaces with emerging ideas that result cross browser compatible layouts.</p>
        <Button btnlink='skills' btnstyle='btn-primary' label='DESIGN THEME-ING' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
      <p className="text-white font-light text-2xl">Selected Work</p>
      <div className="my-work-list grid md:grid-cols-2 md:gap-20 mb-10 py-5">
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://vita4you.gr" target="_blank" rel="noreferrer"><img src={require("../../src/images/works/vita4you.png")} loading="lazy" alt="Vita4you" /></a>
          </div>
          <h2 className="text-white mt-10 mb-2 relative">Health Care Product Redesign and Customization</h2>
          <p className="mb-5 text-sm">A complete new design integration of a ecommerce application</p>
          <span className="inline bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">Magento2 UI</span>
        </div>
        <div className="item">
          <div className="img-wrapper">
              <i className="logo"></i>
              <a href="https://mynpp.com" target="_blank" rel="noreferrer"><img src={require('../../src/images/works/mynpp.png')} loading="lazy" alt="Mynpp" /></a>
          </div>
          <h2 className="text-white mt-10 mb-2 relative">Purchasing partner application design and integration</h2>
          <p className="mb-5 text-sm">Designing a custom theme of a Wordpress application</p>
          <span className="inline bg-gray-800 text-gray-400">UI Design</span> <span className="inline bg-gray-800 text-gray-400">UI Development</span> <span className="inline bg-gray-800 text-gray-400">WordPress UI</span>
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
      <div className="grid md:grid-cols-3 md:gap-20">
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>INTERACTION DESIGN</h4>
            <p>Being familiar with best practices for interaction design between a user and the product significantly shapes the user experience.</p>
        </div>
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>USABILITY TESTING</h4>
            <p>Observing users interactions across a digital product to identify user pain points, usability issues, and areas for user interface improvement.</p>
        </div>
        <div className="card shadow text-center my-4 md:my-10 p-10">
            <h4>PROBLEM SOLVING</h4>
            <p>Having a deep understanding for the user behaviours, challenges, and the creativity to devise solutions that enhance their experience.</p>
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
        <h2 className="text-center text-green my-28">A journey of Commitment towards a learning process!</h2>
        <h3 className="text-center mb-5"><strong>KEY SKILLS <span className="text-green">&</span> TECHNOLOGIES</strong></h3>
        <div className="grid md:grid-cols-2 md:gap-20">
        <div>
          <ul>
            <li><i className="bi bi-record-circle-fill"></i><strong>Design Tools:</strong> Expertise to create a user interface designs using Adobe Creative Suite Photoshop and Illustrator, and Figma.</li>
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
            <li><i className="bi bi-record-circle-fill"></i><strong>Communication and Collaboration:</strong> I consider both negative and positive feedback towards the product success and I am sure a good communication and collaboration with all the team/stakeholders will result in a smooth function of successive products.</li>
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
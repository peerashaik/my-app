import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import Explist from './Explist';

const Patrons = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="text-center my-20">
        <h2 className="content-heading relative text-4xl md:text-5xl text-center my-10"><strong>Employer - <span className="text-yellow">Employee</span></strong></h2>
          <p className="px-10 md:px-20 mb-10">To my employers and clients, thank you for your support, collaboration, and shared vision over the years. To all clients who have supported me and my work, thank you so much for your trust, your business, and your love. And to all colleagues and friends, thank you for supporting me, allowing me to evolve and reinvent myself in new learning, and for encouraging clients to trust in me and my work.</p>
          <p className="px-10 md:px-20 mb-10">Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business especially in design and development.</p>
          <Button btnlink='works' btnstyle='btn-primary' label='VIEW RECENT WORKS' />
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container">
        <h2 className="text-center"><strong><span className="text-red">For All</span> My <span className="text-yellow">Employers...</span> <i className="bi bi-balloon-heart"></i></strong></h2>
        <ul className="employer-list">
          <Explist />
        </ul>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg yellow py-14 text-center">
      <div className="container">
        <h3 className="uppercase text-white text-3xl md:text-4xl my-10"><strong>Product Design! Think Me!</strong></h3>
        <p className="text-white px-10 mb-10">I am actively seeking a dynamic and creative environment where I can contribute significantly. Whether it’s leading a team, driving innovation, or refining user experiences or user interfaces, I am psyched up to add value and make a lasting impact.</p>
        <Button btnlink='contact' btnstyle='btn-outline' label='CONTACT' />
      </div>
      <div className="slant black top"></div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="hero-banner experience">
      <div className="headings flex justify-center items-center flex-col absolute z-10 w-full h-full">
        <h2 className="text-center">CUSTOMER & <span className="inline text-yellow">SUCCESS</span></h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Patrons;
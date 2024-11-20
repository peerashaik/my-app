import React from "react";
import FadeInSection from './FadeInSection';
import Button from './Button';
import Explist from './Explist';

const Patrons = () => {
  return (
    <>
    <FadeInSection>
    <div className="container">
      <div className="blockquote text-center my-10">
        <h2 className="content-heading mb-3 text-center text-uppercase"><strong><span className="text-water">Employer</span> . <span className="text-yellow">Employee</span></strong></h2>
        <div className=" px-10">
          <p>Building a strong bond between customers and employers is essential for long-term success and loyalty. Customer satisfaction is a crucial aspect of any business, especially in design and development.</p>
          <Button btnlink='works' btnstyle='btn-primary' label='VIEW RECENT WORKS' />
        </div>
      </div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="container my-10">
          <h2 className="text-center"><strong><span className="color-darkpink">For All</span> My <span className="text-water">Employers...</span> <i className="bi bi-balloon-heart"></i></strong></h2>
          <ul className="employer-list">
            <Explist />
          </ul>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="color-bg yellow py-8">
      <blockquote className="container text-center">
        <h3 className="text-uppercase text-white"><strong>Product Design! Think Me!</strong></h3>
        <p className="text-white px-10">I am actively seeking a dynamic and creative environment where I can contribute significantly. Whether it’s leading a team, driving innovation, or refining user experiences, I am psyched up to add value and make a lasting impact.</p>
        <Button btnlink='contact' btnstyle='btn-outline' label='CONTACT' />
      </blockquote>
      <div className="slant black top"></div>
    </div>
    </FadeInSection>

    <FadeInSection>
    <div className="hero-banner patrons">
      <div className="headings">
        <h2 className=" text-center">EMPLOYER & <span className="text-blue ms-2">EMPLOYEE</span></h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>
    </FadeInSection>
    </>
  );
}

export default Patrons;
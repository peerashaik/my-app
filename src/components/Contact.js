import React from "react";
import FadeInSection from './FadeInSection';
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
    <div className="hero-banner contact">
      <div className="headings flex justify-center items-center flex-col absolute z-10 w-full h-full">
        <h2 className=" text-center">CONTACT</h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>

    <div className="text-center mt-20">
      <p>Let’s talk design, theme, development, integration, consistency, perfection, delivery.</p>
    </div>

    <div className="mt-14 mb-32">
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-20">
          <div className="mb-10">
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0429666229174!2d78.52536347493412!3d17.36166538352114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f3392aeae1%3A0xcd793fc995785c3a!2s13-57%2C%20Saroornagar%2C%20Kodandaram%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1725111380820!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
          <div className="contact">
            <FadeInSection>
            <h5 className="block m-0"><i className="bi bi-telephone-fill"></i> Phone:</h5>
            <p className="block mb-5">+91 9632413905</p>
            <h5 className="block m-0"><i className="bi bi-people-fill"></i> Social Links:</h5>
            <p className="block">Skype: peera.shaik</p>
            <p className="block mb-5"><a className="white" href="https://www.linkedin.com/in/peerashaik/" target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
            <h5 className="block m-0"><i className="bi bi-envelope-fill"></i> Email:</h5>
            <p className="block mb-5"><a className="white" href="mailto:peerashaik786@gmail.com">peerashaik786@gmail.com</a></p>
            <address>
              <h5 className="block m-0"><i className="bi bi-map-fill"></i> Address:</h5>
              <p className="block m-0">
                13-57, Road no-8, P&T Colony, <br />
                Kodanadaramanagar, Dilsukhnagar,<br />
                Hyderabad, Telangana - 500060
              </p>
            </address>
            </FadeInSection>
            
            <FadeInSection>
              <div className="mt-14">
                <h5 className="mb-2">Let's Work Together!</h5>
                <p>Your suggestions are welcome!</p>
                <p className="mb-5">Have a project in mind? Let's create something amazing together.</p>
                <ContactForm />
              </div>
            </FadeInSection>
          </div>
          </div>  
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
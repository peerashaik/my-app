import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
    <div className="hero-banner contact">
      <div className="headings">
        <h2 className=" text-center">CONTACT</h2>
      </div>
      <div className="overlay"></div>
      <div className="pic"></div>
    </div>

    <div className="my-10">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 slideUp">
            <p>Please contact from any of the medium shared on left to serve you better.</p>
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0429666229174!2d78.52536347493412!3d17.36166538352114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f3392aeae1%3A0xcd793fc995785c3a!2s13-57%2C%20Saroornagar%2C%20Kodandaram%20Nagar%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1725111380820!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 contact">
            <div className="slideUp">
              <h5><i className="bi bi-telephone-fill"></i> Phone:</h5>
              <p>+91 9632413905</p>
              <br />
              <h5><i className="bi bi-people-fill"></i> Skype/Teams:</h5>
              <p>peera.shaik</p>
              <br />
              <h5><i className="bi bi-envelope-fill"></i> Email:</h5>
              <a href="mailto:peerashaik786@gmail.com">peerashaik786@gmail.com</a>
              <br />
              <address>
                <h5><i className="bi bi-map-fill"></i> Address:</h5>
                <p className="m-0">
                  13-57, Road no-8, P&T Colony, <br />
                  Kodanadaramanagar, Dilsukhnagar,<br />
                  Hyderabad, Telangana - 500060
                </p>
              </address>
            </div>
            <div class="mt-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
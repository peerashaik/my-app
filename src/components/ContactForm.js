import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import $ from 'jquery'; 

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ons00yl',
        'template_d7mb0ye',
        form.current, {
          publicKey: 'Nfw4OTt2ySuiUsEyn'
        })
      .then(
        () => {
          const success = document.getElementById('success');
          success.innerHTML += 'Thank you for your valueable time! You have submitted the form successfully!';
          $('#success').show();
          setTimeout(function() { $('#success').hide(); }, 6000);
        },
        (error) => {
          alert('Failed to submit your information!');
        }
      );
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <div id="success" className="alert alert-success" role="alert"></div>
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">Name</label>
        <input type="text" name="user_name" id="fullname" className="form-control" placeholder="Enter your name" required />
      </div>  
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" name="user_email" id="email" className="form-control" placeholder="Enter your email" required />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea name="message" id="message" className="form-control" placeholder="Enter your message" rows="3" required></textarea>
      </div>
      <div>
        <input className="btn btn-primary" type="submit" value="Send" />
      </div>      
    </form>
    </>
  );
}

export default ContactForm;
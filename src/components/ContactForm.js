import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import $ from 'jquery';
import styled from 'styled-components';

const Alert = styled.div`
  display: none;
  boder: 0;
  background: var(--green);
  font-size: 13px;
  line-height: 18px;
  position: fixed;
  top: 10%;
  right: 20px;
  width: 250px;
  animation: .5s slide-in linear;
  @keyframes slide-in {
    from {
        right: -100%;
        opacity: 0;
    }

    to {
        right: 0;
        opacity: 1;
    }
  }
`;

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
          $('.alert-success').show();
          setTimeout(function() { $('.alert-success').hide(); }, 6000);
        },
        (error) => {
          alert('Failed to submit your information!');
        }
      );
  };

  return (
    <>
    <form ref={form} onSubmit={sendEmail}>
      <Alert id="success" className="alert alert-success" role="alert"></Alert>
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
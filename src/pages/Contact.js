import React from 'react';
import "../index.css"
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="main">
      <video src={Concert}  muted="true" autoplay="true" preload="auto" loop="true" playsinline="true"  />
      {/* <div className="content"> */}
      <div className="contact-container" >
      <h2 style={{color: 'white'}}> GET IN TOUCH WITH ME </h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
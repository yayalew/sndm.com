import React, { useRef, useState } from 'react';
import '../pages/styles/ContactForm.css'
import emailjs from 'emailjs-com';

export const ContactForm = () => {
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE;
  const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = formRef.current.user_email;
    if (!validateEmail(emailInput.value)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, apiKey)
      .then((result) => {
        console.log(result.text);
        setIsSent(true);
        setEmailError('');
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='ContactForm'>
      <div className='container-contact-form'>
        {isSent ? (
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='success-message'>
                <h3>THANK YOU!</h3>
                <p>OUR TEAM WILL BE IN TOUCH SOON.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form ref={formRef} onSubmit={sendEmail}>
                  <div className='row formRow'>
                    <div className='col'>
                      <input type='text' name='user_name' className='form-control formInput' placeholder='Name' />
                    </div>
                    <div className='col'>
                      <input
                        type='email'
                        name='user_email'
                        className='form-control formInput'
                        placeholder='Email'
                      />
                      {emailError && <div className='error-message white-text'>{emailError}</div>}
                    </div>
                    <div className='col'>
                      <input type='text' name='subject' className='form-control formInput' placeholder='Subject' />
                    </div>
                  </div>
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea name='message' className='form-control formInput' rows={3} placeholder='Message'></textarea>
                    </div>
                  </div>
                  <div className='button-container'>
                    <button className='submit-btn' type='submit'>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

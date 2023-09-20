// Contact.js

import React from 'react';
import "../index.css"
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import ContactForm from '../components/ContactForm';
import selfie from '../assets/about-page-photo.jpg';
import './styles/Contact.css' // Import the new styles


const Contact = () => {
  return (
    <div className="main">
      <video src={Concert} muted autoPlay preload="auto" loop playsInline />
      <h1 className='banner-text'> MEET THE ARTIST</h1>
      <div className="contact-container">
        <div className="content-left">

          <p>
            SANDMAN IS A CANADIAN ALTERNATIVE POP SINGER-SONGWRITER WITH A GENRE
            BLENDING AESTHETIC, ECCENTRIC PRODUCTION, AND SMOOTH ATMOSPHERIC
            VOCALS, OFTEN COMPARED TO OTHER NEW AGE ARTISTS SUCH AS DOMINIC FIKE,
            OMAR APOLLO, AND JOJI.
          </p>
          <p>
            HIS LYRICS ARE BLUNT AND PASSIONATE, TELLING HIS OWN STORIES BASED
            OFF PERSONAL RELATIONSHIPS AND EXPERIENCES WITH LOVE, HEARTBREAK, AND
            SELF DISCOVERY. HE MIXES THIS RELATABLE SUBJECT MATTER WITH ADDICTIVE
            MELODIES THAT BECOME STUCK IN THE LISTENERS HEAD UPON FIRST LISTEN.
            WITHIN HIS 3-YEAR CAREER HE HAS AMASSED OVER 400K STREAMS ACROSS ALL
            PLATFORMS, SOLD OUT VARIOUS LOCAL VENUES SUCH AS THE PYRAMID CABARET,
            AND THE GOODWILL SOCIAL CLUB. AS WELL AS COLLABORATING WITH THE LIKES
            OF YSN FAB, ONE OF THE BIGGEST UNDERGROUND ARTISTS CURRENTLY TO COME
            OUT OF CANADA. SANDMAN HAS BEEN FEATURED ON US BLOGS SUCH AS
            A1234MUSIC, GROOVERELLY AND SHEESH AS WELL AS BEEN PLACED ON SPOTIFY
            EDITORIAL PLAYLISTS SUCH AS "FRESH FINDS" AND "INDIE POP AND CHILL".
          </p>

        </div>
        <div className="content-right">
          <div className="image-wrapper-contact">
            <img src={selfie} alt="selfie" />
          </div>
        </div>
      </div>
      <div>
        <h2 className='banner-text'> GET IN TOUCH WITH ME</h2>
        </div>
        <div className="contactform-container">
        <ContactForm />
        </div>
      
    </div>
  );
};

export default Contact;

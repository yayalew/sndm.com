import React from 'react';
import "../index.css"
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';

 
const Merch = () => {
    return (
        <div className="main">
          <video src={Concert} amuted="" autoplay="" preload="auto" loop="" playsinline=""  />
          <div className='container'>
          <div className="content">
            
            </div>
          </div>
        </div>
      );
    };
export default Merch;

import React from 'react';
import Concert from '../assets/SANDRO CLOSE#R_Trim.mp4'
import "../index.css"
 
const Shows = () => {
    return (
        <div className="main">
            <video src={Concert} className='music-background' autoPlay loop muted />
                <div className="content">
                <h2> Rock and Roll </h2>
                </div>
        </div>
    );
};
 
 
export default Shows;
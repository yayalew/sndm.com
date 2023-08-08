
import React from 'react';
import Concert from '../assets/SANDMAN GOODWILL NOV 13_Trim.mp4'
import "../index.css"
import Sandman from '../assets/sandman-logo.png'

const Home = () => {
    return (
        <div className="main">
            <video src={Concert} autoPlay loop muted />
                <div className="content">
                <div >
                    <img src={Sandman} alt="Sandman Logo" className="artist-logo-home"/>
                </div>
                {/* <h2> Rock and Roll </h2> */}
                </div>
        </div>
    );
};
 
export default Home;
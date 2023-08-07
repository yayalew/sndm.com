
import React from 'react';
import Concert from '../assets/SANDMAN GOODWILL NOV 13_Trim.mp4'
import "../index.css"

const Home = () => {
    return (
        <div>
            <video className='background-video' autoPlay loop muted>
                <source src={Concert} type="video/mp4" />
                <div>
                <h1>Sandmannnnnnnn</h1>
                </div>
            </video>
            
        </div>
    );
};
 
export default Home;
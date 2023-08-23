
import React from 'react';
import Concert from '../assets/SANDMAN GOODWILL NOV 13_Trim.mp4';
import './styles/Shows.css';

const showData = [
  '11/13/2021 - GOODWILL THEATRE - WINNIPEG, MB',
  '11/20/2021 - THE GARRICK CENTER - WINNIPEG, MB',
  '11/27/2021 - CANADA LIFE PLACE - WINNIPEG, MB',
  '12/04/2021 - THE PARK THEATRE - WINNIPEG, MB',
  '12/11/2021 - LAKESIDE LIVE FESTIVAL - KENORA, ON',
];

const Shows = () => {
  return (
    <div className="main">
      <video src={Concert} muted autoPlay preload="auto" loop playsInline />
      <div className="content">
        <h1>SHOWS</h1>
        <div className="show-cards">
          {showData.map((show, index) => (
            <div key={index} className="show-card">
              <h2>{show}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;

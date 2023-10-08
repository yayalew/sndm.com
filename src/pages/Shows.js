
import React from 'react';
import Concert from '../assets/SANDMAN GOODWILL NOV 13_Trim.mp4';
import './styles/Shows.css';
import Button from '@mui/material/Button';

const UpcomingShowData = [
    '20/10/2023 - THE PARK THEATRE - WINNIPEG, MB'
  ];

const PreviousShowData = [
  '11/13/2021 - GOODWILL THEATRE - WINNIPEG, MB',
  '11/20/2021 - THE GARRICK CENTER - WINNIPEG, MB',
  '12/04/2021 - THE PARK THEATRE - WINNIPEG, MB',
  '12/11/2021 - LAKESIDE LIVE FESTIVAL - KENORA, ON',
];

const Shows = () => {

  return (
    <div className="main">
      <video src={Concert} muted autoPlay preload="auto" loop playsInline />
      <div className="content">
        <h1>UPCOMING SHOWS</h1>
        <div className="show-cards">
          {UpcomingShowData.map((show, index) => (
            <div key={index} className="show-card">
              <h2>{show}</h2>
              <Button  variant="contained" color="error" href="https://www.eventbrite.com/e/neighbour-andy-album-release-show-tickets-715541272207" target="_blank" rel="noopener noreferrer" size="large" style={{ display: 'block', margin: 'auto', marginTop: '5%', padding: '3%', textAlign: 'center', borderRadius: "50px" }}>
          Buy Tickets
        </Button>
            </div>
          ))}
        </div>
        <h1>PREVIOUS SHOWS</h1>
        <div className="show-cards">
          {PreviousShowData.map((show, index) => (
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

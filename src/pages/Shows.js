
import React from 'react';
import Concert from '../assets/SANDMAN GOODWILL NOV 13_Trim.mp4'
import "../index.css"
 
const Shows = () => {
    return (
        <div className="main">
            <video src={Concert}  autoPlay loop muted />
                <div className="content">
                <h1>
                    SHOWS
                </h1>
                <h2>
                    11/13/2021 - GOODWILL THEATRE - WINNIPEG, MB   
                </h2>
                <h2>
                    11/20/2021 - THE GARRICK CENTER - WINNIPEG, MB 
                </h2>
                <h2>
                    11/27/2021 - CANADA LIFE PLACE - WINNIPEG, MB
                </h2>
                <h2>
                    12/04/2021 - THE PARK THEATRE - WINNIPEG, MB
                </h2>
                <h2>
                    12/11/2021 - LAKESIDE LIVE FESTIVAL - KENORA, ON
                </h2>
        </div>
    </div>
    );
};
 
 
export default Shows;
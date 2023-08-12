import React from 'react';
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import './styles/Home.css'
const Home = () => {
  return (
    <div className='main'>
      <video src={Concert} autoPlay loop muted />
      <div className="content">
        <div className='image-container'>
          <img src={Sandman} alt="Sandman Logo" className='artist-logo' />
        </div>
      </div>
    </div>
  );
};

export default Home;

const styles = {
  main: {
    position: "relative", /* Change to relative positioning */
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  artistLogo: {
    marginTop: "10%",
    display: "block",
    width: "70%",
    height: "70%",
    objectfit: "contain",
    justifyitems: "center",
    alignitems: "center",
    transformorigin: "center",
    animation: "rotation 10s infinite linear", /* Apply the continuous rotation animation */
    paddingright:" 8%",
  },
};

// Define the rotation keyframes
const rotationKeyframes = `@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}`;

// Add the keyframes to the document's style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(rotationKeyframes, styleSheet.cssRules.length);
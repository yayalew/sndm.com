import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import StreamingModal from './streaming-modal.js'; // Assuming you have a component for the streaming modal
import '../pages/styles/Home.css';
import Go from '../assets/go-image.jpg';

const isMobile = window.innerWidth <= 768; // Set your desired mobile breakpoint

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? 300 : 600,
  height: isMobile ? 400 : 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '40px',
  boxShadow: 24,
  p: 4,
};

const Popup = ({ onPress, showStreamingModal, onClose }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleStreamNowClick = () => {
    // Close the current modal
    setOpen(false);
    // Open the streaming modal
    onPress();
    
    // Track the event using Google Analytics
    if (window.ga) {
      window.ga('send', {
        hitType: 'event',
        eventCategory: 'Button',
        eventAction: 'Stream Now Click',
        eventLabel: 'Stream Now Button Clicked',
      });
    }
  };
  return (
    <div>
      <Modal
        open={open && !showStreamingModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2" style={{ textAlign: "center", fontWeight: "bold" }}>
            NEW SINGLE OUT NOW
          </Typography>
          <div className="album-image">
            <img src={Go} alt="album cover" style={{ width: '60%', height: 'auto', borderRadius: "10px" }} />
          </div>
          <Button onClick={handleClose} style={{ position: 'absolute', top: 0, right: 0, fontWeight: "bold", fontSize: '24px', padding: '10px' }}>X</Button>
          <Button variant="contained" color="primary"  onClick={handleStreamNowClick} style={{ display: 'block', margin: 'auto', marginTop: '20px', fontWeight: "bold", padding: '20px', textAlign: 'center', borderRadius: "50px" }}>
            STREAM NOW
          </Button>
        </Box>
      </Modal>

      {/* Render StreamingModal when streamingModal is true */}
      {showStreamingModal && <StreamingModal onClose={onClose} />}
    </div>
  );
};

export default Popup;

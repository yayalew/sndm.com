import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../pages/styles/Home.css';
import Go from '../assets/go-image.jpg';
import './streaming.css';

const isMobile = window.innerWidth <= 768;

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

const StreamingModal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{ textAlign: "center", fontWeight: "bold" }}>
          stream now
        </Typography>
        <div className="album-image-streaming">
          <img src={Go} alt="album cover" style={{ width: '40%', height: '40%', borderRadius: "10px" }} />
        </div>
        {/* <Typography align='center' variant='h4' style={{fontWeight: 'bold'}}>
          GO!
        </Typography> */}
        <Button onClick={handleClose} color="secondary" style={{ position: 'absolute', fontWeight: "bold", top: 0, right: 0, fontSize: '24px', padding: '10px' }}>X</Button>
        <Button variant="contained" color="secondary" href="https://open.spotify.com/track/5cbTDB6eZXA696OQeFQHCv?si=7d051413ba024faa" target="_blank" rel="noopener noreferrer" size="large" style={{ display: 'block', margin: 'auto', marginTop: '5%', padding: '3%',fontWeight: "bold", textAlign: 'center', borderRadius: "50px" }}>
          Spotify
        </Button>
        <Button variant="contained" color="secondary" href="https://music.apple.com/us/album/go-single/1708522350" target="_blank" rel="noopener noreferrer" size="large" style={{ display: 'block', margin: 'auto', marginTop: '5%', padding: '3%',fontWeight: "bold", textAlign: 'center', borderRadius: "50px" }}>
          Apple Music
        </Button>
        <Button variant="contained" color="secondary" href="https://www.youtube.com/watch?v=wBjHe_UYK5s&ab_channel=Sandman-Topic" target="_blank" rel="noopener noreferrer" size="large" style={{ display: 'block', margin: 'auto', marginTop: '5%', padding: '3%',fontWeight: "bold", textAlign: 'center', borderRadius: "50px" }}>
          Youtube
        </Button>
      </Box>
    </Modal>
  );
};

export default StreamingModal;

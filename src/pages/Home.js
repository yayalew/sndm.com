
import Sandman from '../assets/sandman-logo.png';
import Concert from '../assets/SANDRO CLOSE R_Trim.mp4';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './styles/Home.css'
import Go from '../assets/go-image.jpg'

const isMobile = window.innerWidth <= 768; // Set your desired mobile breakpoint

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? 300 : 600,
  height : isMobile ? 400 : 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '40px',
  boxShadow: 24,
  p: 4,
};


const Home = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='main'>
      <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" component="h2" style={{textAlign: "center", fontWeight: "bold"}}>
            PRE-SAVE MY NEW SINGLE
          </Typography>
          <div className="album-image">
            <img src={Go} alt="album cover" style={{ width: '60%', height: 'auto', borderRadius: "10px",}} />
          </div>
            <Button onClick={handleClose} style={{position: 'absolute', top: 0, right: 0, fontSize: '24px', padding: '10px'}}>X</Button>
          <Button variant="contained" color="primary" href="https://distrokid.com/hyperfollow/sandman2/go/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: 'auto', marginTop: '20px', padding: '20px', textAlign: 'center', borderRadius: "50px"}}>
            Pre-save
          </Button>
        </Box>
      </Modal>
    </div>

      <video src={Concert} muted="true" autoplay="true" preload="auto" loop="true" playsinline="true" />
      <div className="content">
        <div className='image-container'>
          <div className='image-wrapper'>
            {isMobile ? <img src={Sandman} alt="Sandman Logo" className='artist-logo-mobile' /> : <img src={Sandman} alt="Sandman Logo" className='artist-logo' />}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Home;

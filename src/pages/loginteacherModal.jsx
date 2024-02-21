
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import LoginModal from './loginteacher';
import Image from '../../assets/Image3.svg';
const useStyles = makeStyles({
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loginteachermodal = ({ onAddClass }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{marginLeft:'120px'}}>
      <img src={Image} alt="Class Image" className={classes.image} />
      <div  style={{marginLeft:'230px', marginTop:'10px'}}>
      <Button variant="contained" onClick={handleOpen} style={{ backgroundColor: '#1b093d' }}>Add Class</Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modalContainer}
      >      
        <LoginModal onAddClass={onAddClass} onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default Loginteachermodal;

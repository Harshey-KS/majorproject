


import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import AddClassCard from './AddClassCard'; // Import AddClassCard component
import Image from '../../Assets/Image3.svg';
const useStyles = makeStyles({
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AddClassModal = ({ onAddClass }) => {
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
        <AddClassCard onAddClass={onAddClass} onClose={handleClose} />
      </Modal>
    </div>
  );
};

export default AddClassModal;

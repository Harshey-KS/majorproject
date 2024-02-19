import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Image from '../../Assets/Image.svg'; // Import your image here

const useStyles = makeStyles({
  cardContainer: {
    background: "#c0e4ff",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    maxWidth: "300px", // Adjust width as needed
  },
  cardHeader: {
    color: "darkblue",
    fontSize: "20px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%", // Adjust image width
    height: "auto", // Maintain aspect ratio
    borderRadius: "20px", // Rounded corners
  },
  detailsContainer: {
    marginTop: "20px",
  },



});

const AddClassCard = ({ onAddClass, onClose  }) => {
  const classes = useStyles();
  const [subject, setSubject] = useState('');
  const [classCode, setClassCode] = useState('');

  const handleSubmit = () => {
    if (subject.trim() !== '' && classCode.trim() !== '') {
      // Call the onAddClass function with subject and classCode as arguments
      onAddClass(subject, classCode);
      // Clear the input fields
      setSubject('');
      setClassCode('');
      // Close the modal
      onClose();
    }
  };
  

  return (
    <Card className={classes.cardContainer}>
      <CardContent>
        <div className={classes.cardHeader} >
          <Typography variant="h5" component="div" style={{ color: '#1b093d' }} >
            ADD A CLASS
          </Typography>
        </div>
        <img src={Image} alt="Class Image" className={classes.image} />
        <div className={classes.detailsContainer}>
          <TextField
            label="Subject Name"
            variant="outlined"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
          />
          <TextField
            label="Class"
            variant="outlined"
            value={classCode}
            onChange={(e) => setClassCode(e.target.value)}
            fullWidth
          />
        </div>
        <div className={classes.buttonContainer}  style={{ marginLeft: '65px' ,marginTop:'20px'}}>
          <Button variant="contained" onClick={handleSubmit} style={{ backgroundColor: '#1b093d' }}>Submit</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AddClassCard;


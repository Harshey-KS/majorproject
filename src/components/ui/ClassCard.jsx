


import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Image from '../../assets/Image2.svg'; // Import your image here
import { Link } from 'react-router-dom'; 


const useStyles = makeStyles({
  cardContainer: {
    background: "#c0e4ff",
    padding: "20px",
    borderRadius: "50px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    maxWidth: "300px", // Adjust width as needed
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

const ClassCard = ({ subject, classCode }) => {
  const classes = useStyles();

  return (
    <Link to="/compsa">
    <Card className={classes.cardContainer}>
      <CardContent>
        <img src={Image} alt="Class Image" className={classes.image} />
        <div className={`${classes.detailsContainer} bg-blue-100 rounded-0.8xl`}style={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="body1" style={{ fontFamily: 'Open Sans' }}>
            SUBJECT: {subject}
          </Typography>
          <Typography variant="body1" style={{ fontFamily: 'Open Sans' }}>
            CLASS: {classCode}
          </Typography>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

ClassCard.propTypes = {
  subject: PropTypes.string.isRequired,
  classCode: PropTypes.string.isRequired,
};

export default ClassCard;

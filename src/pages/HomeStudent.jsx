import React from 'react';
import { makeStyles } from '@mui/styles';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import List from '../components/List';
import NavStudent from '../components/ui/NavStudent';
import Image from '../assets/Image3.svg';


const useStyles = makeStyles({
  image: {
    maxWidth: '600px', // Adjust the maximum width of the image
    maxHeight: '600px', // Adjust the maximum height of the image
    width: '100%', // Allow the width to adjust automatically based on the maximum width
    height: '100%', // Allow the height to adjust automatically based on the maximum height
    borderRadius: '20px', // Rounded corners
  },
});
const HomeStudent = () => {
  const classes = useStyles();
    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
            <NavStudent/> {/* Use Navbar from Navbar/index1 */}      
            <div className="flex flex-row justify-between mx-4">
            <div className=" mt-5" style={{marginLeft:'170px'}}>
            <img src={Image} alt="Class Image" className={classes.image} />
            </div>
                <div className="ml-4">
                <div className="ml-5 mt-5">
                    <Calendar />
                </div>
                  <div className="ml-2 mt-3">
                  <PublicHolidays />
                  </div>
                    
                </div>
            </div>
            </div>
     

    );
};

export default HomeStudent;


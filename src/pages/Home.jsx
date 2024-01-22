// Home.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import {Calendar} from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays'; 

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-5">
        <Calendar />
        <PublicHolidays />
        {/* Add more components or content as needed */}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Nav from '../components/ui/Nav';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import List from '../components/List';

const Home= () => {
    return (
      <div>
        <Nav /> 
        <Calendar/>
        <PublicHolidays/>
        <List/>
      </div>

      
    );
  };
  
  export default Home;
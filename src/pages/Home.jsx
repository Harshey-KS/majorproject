import React from 'react';
import Nav from '../components/ui/Nav';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import List from '../components/List';

const Home= () => {
    return (
      <div div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
        <Nav />  
        <div style={{ marginLeft: '20px' }}> {/* Add left margin to shift the Calendar */}
          <Calendar/>
          <PublicHolidays/>
        </div>
        
        <List/>
       
       
      </div>

      
    );
  };
  
  export default Home;
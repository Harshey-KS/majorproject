import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import './Home.css';
import StudentForm from '../components/StudentForm';
import CourseTable from '../components/ui/CourseTable';

const Home = () => {
  return (    
    <div className="home-container">
      <Navbar />      
      <Calendar />     
      <div className="content-container">
        <div style={{ textAlign: 'center', marginLeft:'25%'}}>
          <CourseTable/>   
        </div> 
        <PublicHolidays />  
      </div>
      </div>
  );
}
export default Home;
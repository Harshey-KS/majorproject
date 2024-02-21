import React from 'react';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import List from '../components/List';
import Nav from '../components/ui/Nav';
import ParentComponent from '../components/ParentComponent';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
            <Nav /> {/* Use Navbar from Navbar/index1 */}
            <div className="flex flex-row justify-between mx-4">
                {/* <List /> */}
                {/* <AddClassCard/> */}
                <div className="ml-10 mt-5">
                <ParentComponent/>
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

export default Home;

// import React from 'react';
// import { Calendar } from '../components/ui/calender';
// import PublicHolidays from '../components/ui/PublicHolidays';
// import List from '../components/List';
// import Nav from '../components/ui/Nav';

// const Home = () => {
//     return (
//         <div className="flex" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
//             <Nav /> {/* Use Navbar from Navbar/index1 */}
//             <List />
//             <div className= 'mr-0 w-fit items-end flex flex-col'>
//                 <Calendar />
//                 <PublicHolidays />
//             </div>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import List from '../components/List';
import Nav from '../components/ui/Nav';

const Home = () => {
    return (
        <div className="flex flex-col" style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
            <Nav /> {/* Use Navbar from Navbar/index1 */}
            <div className="flex flex-row justify-between mx-4">
                <List />
                <div className="ml-4">
                <div className="ml-5">
                    <Calendar />
                  </div>
                  <div className="ml-2">
                  <PublicHolidays />
                  </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Home;

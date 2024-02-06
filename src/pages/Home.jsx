

import React from 'react';
import Navbar from '../components/Navbar';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import MeetingButton from '../components/ui/startmeeting';
import './Home.css';
import StudentForm from '../components/StudentForm';
import CourseTable from '../components/ui/CourseTable';



const Home = () => {
  return (    
    <div className="home-container">
   
      <Navbar />      
      <Calendar />     
      <div className="content-container">
         {/* Move MeetingButton above Calendar */} 
         <div style={{ textAlign: 'center', marginLeft:'25%'}}>
         <CourseTable/>   
    </div> 
               
        <PublicHolidays />  
        
      </div>
    </div>
  );
};

export default Home;

// import React, { useContext, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import { Calendar } from '../components/ui/calender';
// import PublicHolidays from '../components/ui/PublicHolidays';
// import MeetingButton from '../components/ui/startmeeting';
// import './Home.css';
// import { FormContext } from '../context/FormContext';

// const Home = () => {
//   const { formData } = useContext(FormContext);

//   useEffect(() => {
//     // Re-render when formData changes
//   }, [formData]);

//   return (
//     <div className="home-container">
//       <Navbar />
//       <Calendar />
//       <div className="content-container">
//         <MeetingButton />
//         <PublicHolidays />
//         {formData.name || formData.email ? (
//           <table>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>{formData.name}</td>
//                 <td>{formData.email}</td>
//               </tr>
//             </tbody>
//           </table>
//         ) : (
//           <p>No form data available yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;

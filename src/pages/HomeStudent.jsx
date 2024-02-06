// // HomeStudent.jsx

import React, { useState } from 'react';
import NavbarStudent from '../components/NavbarStudent';
import { Calendar } from '../components/ui/calender';
import PublicHolidays from '../components/ui/PublicHolidays';
import Form from '../components/ui/Form'; // Assuming you have a StudentForm component
import './Home.css';

const HomeStudent = () => {
  // Add state and handle functions for student form if needed

  return (
    <div className="home-container">
      <NavbarStudent />
      <div className="content-container">
        <Form/>
        <Calendar />     
      </div>
      <PublicHolidays />
    </div>
  );
};

export default HomeStudent;

// import React, { useState, useContext } from 'react';
// import NavbarStudent from '../components/NavbarStudent';
// import { Calendar } from '../components/ui/calender';
// import PublicHolidays from '../components/ui/PublicHolidays';
// import Form from '../components/ui/Form';
// import './Home.css';
// import { FormContext } from '../context/FormContext'; // Import context

// // ----------------- REMOVED: FormContext already created in FormContext.js
// // export const FormContext = createContext();

// const HomeStudent = () => {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name: e.target.elements.name.value, email: e.target.elements.email.value });
//   };

//   return (
//     <FormContext.Provider value={{ formData, handleSubmit }}> {/* Provide context */}
//       <div className="home-container">
//         <NavbarStudent />
//         <div className="content-container">
//           <Form />
//           <Calendar />
//         </div>
//         <PublicHolidays />
//       </div>
//     </FormContext.Provider>
//   );
// };

// export default HomeStudent;



// import React, { useState } from 'react';
// import NavbarStudent from '../components/NavbarStudent'; // Assuming correct path
// import { Calendar } from '../components/ui/calender';
// import PublicHolidays from '../components/ui/PublicHolidays';
// import Form from '../components/ui/Form';
// import './Home.css'; // Assuming correct path

// const HomeStudent = () => {
//   const [formData, setFormData] = useState({ name: '', email: '' });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormData({ name: e.target.elements.name.value, email: e.target.elements.email.value });
//   };

//   return (
//     <div className="home-container">
//       <NavbarStudent />
//       <div className="content-container">
//         <Form onSubmit={handleSubmit} /> {/* Pass handleSubmit to Form */}
//         <Calendar />
//       </div>
//       <PublicHolidays />
//     </div>
//   );
// };

// export default HomeStudent;

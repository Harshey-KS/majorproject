// import React, { useState } from 'react';
// import AddClassCard from './ui/AddClassCard';


// const ParentComponent = () => {
//   const [classes, setClasses] = useState([]);

//   const handleAddClass = (subject, classCode) => {
//     // Add the new class to the classes array
//     setClasses([...classes, { subject, classCode }]);
//   };

//   return (
//     <div>
//       {/* Render the AddClassCard component and pass the handleAddClass function as a prop */}
//       <AddClassCard onAddClass={handleAddClass} />
//       {/* Render the list of classes */}
//       <ul>
//         {classes.map((classItem, index) => (
//           <li key={index}>
//             Subject: {classItem.subject}, Class: {classItem.classCode}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ParentComponent;





// import React, { useState } from 'react';
// import ClassCard from './ui/ClassCard';
// import AddClassModal from './ui/AddClassModal';

// const ParentComponent = () => {
//   const [classes, setClasses] = useState([]);
//   const [open, setOpen] = useState(false);

//   const handleAddClass = (subject, classCode) => {
//     setClasses([...classes, { subject, classCode }]);
//     setOpen(false); // Close the modal after adding the class
//   };

//   const handleClose = () => {
//     setOpen(false); // Close the modal by setting the 'open' state to false
//   };

//   return (
//     <div>
//       <AddClassModal
//         open={open}
//         onAddClass={handleAddClass}
//         onClose={handleClose}
//       />
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//         {classes.map((classItem, index) => (
//           <ClassCard
//             key={index}
//             subject={classItem.subject}
//             classCode={classItem.classCode}
//             image={Image} // Pass your image path here
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ParentComponent;





// ParentComponent.jsx

import React, { useState } from 'react';
import AddClassCard from './ui/AddClassCard';
import ClassCard from './ui/ClassCard';
import AddClassModal from './ui/AddClassModal';


const ParentComponent = () => {
  const [classes, setClasses] = useState([]);

  const handleAddClass = (subject, classCode) => {
    setClasses([...classes, { subject, classCode }]);
  };

  const handleClose = () => {
    // Define your close modal logic here
  };

  return (
    <div>
      <AddClassModal onAddClass={handleAddClass} onClose={handleClose} />
      {/* Render the list of classes */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop:'20px'}}>
        {classes.map((classItem, index) => (
          <ClassCard
            key={index}
            subject={classItem.subject}
            classCode={classItem.classCode}
            image={Image} // Pass your image path here
          />
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;

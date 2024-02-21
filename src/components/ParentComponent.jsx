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

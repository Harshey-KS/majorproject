
// import React, { useState } from 'react';
// import { config, library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import './List.css';

// const CourseCategory = ({ category, courses }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`course-category ${isOpen ? 'open' : ''}`}>
//       <button className="category-button" onClick={toggleDropdown}>
//         {category}
//         <i className={`fas fa-chevron-down ${isOpen ? 'active' : ''}`} />
//       </button>
//       {isOpen && (
//         <ul className="course-list">
//           {courses.map((course) => (
//             <li key={course.id}>
//               <a href="#">{course.name}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// const List = () => {
//   const courses = [
//     { id: 1, name: 'TE Comps A' },
//     { id: 2, name: 'SE Comps B' },
//     { id: 3, name: 'TE AIML' },
//   ];

//   const courseCategories = [
//     { category: 'Data Structures & Algorithms', courses },
//     { category: 'Database Management', courses: [] },
//     { category: 'Operating Systems', courses: [] },
//     { category: 'Artificial Intelligence & ML', courses: [] },
//     { category: 'Information Technology', courses: [] },
//     { category: 'Applied Humanities', courses: [] },
//   ];

//   return (
//     <div className="course-categories">
//       {courseCategories.map((courseCategory) => (
//         <CourseCategory key={courseCategory.category} {...courseCategory} />
//       ))}
//     </div>
//   );
// };

// export default List;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './List.css';

const CourseCategory = ({ category, courses }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`course-category ${isOpen ? 'open' : ''}`}>
      <button className="category-button" onClick={toggleDropdown}>
        {category}
        <i className={`fas fa-chevron-down ${isOpen ? 'active' : ''}`} />
      </button>
      {isOpen && (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id}>
              <Link to="/compsa">{course.name}</Link> {/* Replace <a> with Link */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const List = () => {
  const courses = [
    { id: 1, name: 'TE Comps A' },
    { id: 2, name: 'SE Comps B' },
    { id: 3, name: 'TE AIML' },
  ];

  const courseCategories = [
    { category: 'Data Structures & Algorithms', courses },
    { category: 'Database Management', courses: [] },
    { category: 'Operating Systems', courses: [] },
    { category: 'Artificial Intelligence & ML', courses: [] },
    { category: 'Information Technology', courses: [] },
    { category: 'Applied Humanities', courses: [] },
  ];

  return (
    <div className="course-categories">
      {courseCategories.map((courseCategory) => (
        <CourseCategory key={courseCategory.category} {...courseCategory} />
      ))}
    </div>
  );
};

export default List;

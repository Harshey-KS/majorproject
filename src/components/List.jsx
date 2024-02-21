import React from 'react';
import { Link } from 'react-router-dom';
import AddClassCard from './ui/AddClassCard';

const CourseCategory = ({ category, courses }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAddClass = (className) => {
    // Add the new class to the courses array
    const newCourse = { id: courses.length + 1, name: className };
    // Update the state with the new course
    courses.push(newCourse);
    // Close the dropdown
    setIsOpen(false);
  };

  return (
    <div className={`course-category ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>  
        <button className="category-button">
          {category}
          <i className={`fas fa-chevron-down ${isOpen ? 'active' : ''}`} />
        </button>
      {isOpen && (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.id}>
              <Link to={`/${course.name.replace(/\s+/g, '').toLowerCase()}`}>
                {course.name}
              </Link>
            </li>
          ))}
          {/* Render the AddClassCard component */}
          <li>
            <AddClassCard onAddClass={handleAddClass} />
          </li>
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

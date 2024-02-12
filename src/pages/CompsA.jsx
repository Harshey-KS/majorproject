// import React, { useEffect,useState  } from 'react';
// import { useAuthContext } from '../context/AuthContext';
// import Heading from '../components/ui/Heading';
// import Todo from '../components/ui/Todo';
// import axios from "axios";
// import Nav from '../components/ui/Nav';
// import ListAssignment from '../components/ui/ListAssignment';
// import Syllabus from '../components/ui/Syllabus';



// const CompsA = () => {
//   const { user } = useAuthContext();
//   const [teacher, setTeacher] = useState({});

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`teachers/${user?.id}`);
//       if (res?.data) {
//         console.log(res?.data);
//         setTeacher(res?.data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const updatePortion = async (classes) => {
//     try {
//       const res = await axios.put(`teachers/${user.id}`, { ...teacher, classes });
//       if (res?.data) {
//         await fetchData();
//       }
//     } catch (error) {
//       console.error('Error updating portion:', error);
//     }
//   };

//   useEffect(() => {
//     if (user?.id) fetchData();
//   }, [user]);

// return (
//   <div className="flex flex-col">
//     <Nav />
//     <div className="flex flex-row-reverse"> {/* Container for both components */}
//       <div className="w-2/3 margin-right:5%"> {/* Width set to 1/4 of the container */}
//         <ListAssignment />
//       </div>
//       <div className="flex-grow"> {/* Takes remaining space */}
//         <Todo />
//         <Syllabus /> {/* Insert Syllabus component here */}
//       </div>
//     </div>
//   </div>
// );


// export default CompsA;



import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import Heading from '../components/ui/Heading';
import Todo from '../components/ui/Todo';
import axios from "axios";
import Nav from '../components/ui/Nav';
import ListAssignment from '../components/ui/ListAssignment';
import Syllabus from '../components/ui/Syllabus';

const CompsA = () => {
  const { user } = useAuthContext();
  const [teacher, setTeacher] = useState({});

  const fetchData = async () => {
    try {
      const res = await axios.get(`teachers/${user?.id}`);
      if (res?.data) {
        console.log(res?.data);
        setTeacher(res?.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updatePortion = async (classes) => {
    try {
      const res = await axios.put(`teachers/${user.id}`, { ...teacher, classes });
      if (res?.data) {
        await fetchData();
      }
    } catch (error) {
      console.error('Error updating portion:', error);
    }
  };

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);

  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex flex-row-reverse"> {/* Container for both components */}
        <div className="w-9/12 margin-right:15%"> {/* Width set to 1/4 of the container */}
          <ListAssignment />
        </div>
        <div className="flex-grow"> {/* Takes remaining space */}
          <Todo />
          <Syllabus /> {/* Insert Syllabus component here */}
          <div className="mt-4 ml-16"> {/* Margin top to provide space */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            START MEETING
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompsA;
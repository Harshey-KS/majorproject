// import React, { useEffect, useState } from 'react';
// import { useAuthContext } from '../context/AuthContext';
// import Heading from '../components/ui/Heading';
// import Todo from '../components/ui/Todo';
// import axios from "axios";
// import ListAssignment from '../components/ui/ListAssignment';
// import Syllabus from '../components/ui/Syllabus';
// import Nav from '../components/ui/Nav';

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

//   return (
//     <div className="flex flex-col bg-gray-200"> {/* Add bg-gray-200 class for light gray background */}
//       <Nav />
//       <div className="flex flex-row-reverse"> {/* Container for both components */}
//         <div className="w-9/12 margin-right:15%"> {/* Width set to 1/4 of the container */}
//           <ListAssignment />
//         </div>
//         <div className="flex-grow" style={{marginTop:'10px', marginLeft:'5px'}}> {/* Takes remaining space */}
//           <Todo />
//           <Syllabus /> {/* Insert Syllabus component here */}
//           <div className="mt-4 ml-16"> {/* Margin top to provide space */}
//             <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
//               START MEETING
           
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompsA;

import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import Heading from '../components/ui/Heading';
import Todo from '../components/ui/Todo';
import axios from "axios";
import ListAssignment from '../components/ui/ListAssignment';
import Syllabus from '../components/ui/Syllabus';
import Nav from '../components/ui/Nav';
import { useNavigate } from 'react-router-dom';

const CompsA = () => {
  const { user } = useAuthContext();
  const [teacher, setTeacher] = useState({});
  const navigate = useNavigate()

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
  const handleStartMeeting = () =>{
    navigate("/lobby")
  }

  useEffect(() => {
    if (user?.id) fetchData();
  }, [user]);

return (
  <div className="flex flex-col min-h-screen bg-gray-200">
    <Nav />
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/4 xl:w-1/3 p-4">
        <div className="mb-4">
          <Todo />
          <Syllabus /> {/* Insert Syllabus component here */}
        </div>
        <div className="text-center">
          <a className="text-white py-2 px-4 rounded" style={{ backgroundColor: '#1b093d' }} href="http://127.0.0.1:5502/lobby.html">
            START MEETING
          </a>
        </div>
      </div>
      <div className="lg:w-3/4 xl:w-2/3 ml-auto mt-5">
        <ListAssignment />
      </div>
    </div>
  </div>
);
}

export default CompsA;

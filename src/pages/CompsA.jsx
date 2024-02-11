// import React from 'react';


// const CompsA = () => {
//     return (
//       <div>
        
       
//       </div>
//     );
//   };
  
//   export default CompsA;


  import React, { useEffect,useState  } from 'react';
import { useAuthContext } from '../context/AuthContext';
import Heading from '../components/ui/Heading';
import Cards from '../components/ui/Cards';
import axios from "axios";
import Nav from '../components/ui/Nav';

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
      <Nav/>
      <Cards cards={teacher?.classes} updatePortion={updatePortion} setTeacher={setTeacher}/>
    </div>
  );
};

export default CompsA;


// // CompsA.jsx (Sample Page)
// import React from 'react';
// import { useAuthContext } from '../context/AuthContext';

// const CompsA = () => {
//   const { user } = useAuthContext(); // Use the user from AuthContext

//   return (
//     <div>
//       <h1>Welcome to CompsA Page</h1>
//       <p>User: {user ? user.name : 'No user logged in'}</p>
//     </div>
//   );
// };

// export default CompsA;



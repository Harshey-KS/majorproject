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
import Navbar from '../components/Navbar';
import Heading from '../components/ui/Heading';
import Cards from '../components/ui/Cards';
import axios from "axios";
import StartMeetingButton from '../components/ui/startmeeting';

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
      <Navbar />
      <StartMeetingButton/>
      <Cards cards={teacher?.classes} updatePortion={updatePortion} setTeacher={setTeacher}/>
    </div>
  );
};

export default CompsA;


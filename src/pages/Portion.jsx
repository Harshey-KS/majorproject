import React, { useEffect,useState  } from 'react';
import { useAuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Heading from '../components/ui/Heading';
import Cards from '../components/ui/Cards';
import axios from "axios";

const Portion = () => {
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
      <Heading title={'Portion'} />
      <Cards cards={teacher?.classes} updatePortion={updatePortion} setTeacher={setTeacher}/>
    </div>
  );
};

export default Portion;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Heading from "../components/ui/Heading";
// import Cards from "../components/ui/Cards";

// const Portion = () => {
//   const { user } = useAuthContext();
//   const [teacher, setTeacher] = useState({});

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`teachers/${user?.id}`);
//       if (res?.data) {
//         setTeacher(res?.data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const updatePortion = async (updatedClasses) => {
//     try {
//       const res = await axios.put(`teachers/${user.id}`, { ...teacher, classes: updatedClasses });
//       if (res?.data) {
//         setTeacher((prevTeacher) => ({ ...prevTeacher, classes: updatedClasses }));
//       }
//     } catch (error) {
//       console.error('Error updating portion:', error);
//     }
//   };

//   useEffect(() => {
//     if (user?.id) fetchData();
//   }, [user]);

//   return (
//     <div className="flex flex-col">
//       <Navbar />
//       <Heading title={"Portion"} />
//       <Cards
//         cards={teacher?.classes}
//         updatePortion={updatePortion}
//         setTeacher={setTeacher}  // Ensure setTeacher is passed down
//       />
//     </div>
//   );
// };

// export default Portion;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Heading from "../components/ui/Heading";
// import Cards from "../components/ui/Cards";

// const Portion = () => {
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
//       console.error("Error fetching data:", error);
//     }
//   };

//   const updatePortion = async (updatedClasses) => {
//     try {
//       if (!teacher || typeof teacher !== 'object') {
//         console.error('Invalid teacher state:', teacher);
//         return;
//       }
  
//       const res = await axios.put(`teachers/${teacher.id}`, { classes: updatedClasses });
//       if (res?.data) {
//         setTeacher((prevTeacher) => ({ ...prevTeacher, classes: updatedClasses }));
//       }
//     } catch (error) {
//       console.error('Error updating portion:', error);
//     }
//   };
  

//   const handleCardClick = (card) => {
//     // Add a check for the existence of classes array
//     if (teacher?.classes) {
//       const updatedClasses = teacher.classes.map((c) => {
//         if (c.id === card.id) {
//           return { ...c, selected: !c.selected };
//         }
//         return c;
//       });

//       // Check if setTeacher is a function before calling it
//       if (typeof setTeacher === "function") {
//         updatePortion(updatedClasses);
//       } else {
//         console.error("setTeacher is not a function");
//       }
//     }
//   };

//   useEffect(() => {
//     if (user?.id) fetchData();
//   }, [user]);

//   return (
//     <div className="flex flex-col">
//       <Navbar />
//       <Heading title={"Portion"} />
//       <Cards cards={teacher?.classes} handleCardClick={handleCardClick} />
//     </div>
//   );
// };

// export default Portion;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Heading from "../components/ui/Heading";
// import Cards from "../components/ui/Cards";

// const Portion = () => {
//   const { user } = useAuthContext();
//   const [teacher, setTeacher] = useState({ classes: [] });

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`teachers/${user?.id}`);
//       if (res?.data) {
//         console.log(res?.data);
//         setTeacher(res?.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const updatePortion = async (updatedClasses) => {
//     try {
//       // Assuming teacher is an object with an ID property
//       const res = await axios.put(`teachers/${teacher?.id}`, { classes: updatedClasses });
//       if (res?.data) {
//         // Update the state after a successful update
//         setTeacher((prevTeacher) => ({ ...prevTeacher, classes: updatedClasses }));
//       }
//     } catch (error) {
//       console.error("Error updating portion:", error);
//     }
//   };

//   const handleCardClick = (card) => {
//     // Add a check for the existence of classes array
//     if (teacher?.classes) {
//       const updatedClasses = teacher.classes.map((c) => {
//         if (c.id === card.id) {
//           return { ...c, selected: !c.selected };
//         }
//         return c;
//       });
//       updatePortion(updatedClasses);
//     }
//   };

//   useEffect(() => {
//     // Fetch data when the user ID changes
//     if (user?.id) {
//       fetchData();
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col">
//       <Navbar />
//       <Heading title={"Portion"} />
//       <Cards cards={teacher?.classes} onClick={handleCardClick} />
//     </div>
//   );
// };

// export default Portion;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Heading from "../components/ui/Heading";
// import Cards from "../components/ui/Cards";

// const Portion = () => {
//   const { user } = useAuthContext();
//   const [teacher, setTeacher] = useState([]);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(`teachers/${user?.id}`);
//       if (res?.data) {
//         console.log(res?.data);
//         setTeacher(res?.data);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const updatePortion = async (updatedClasses) => {
//     try {
//       // Assuming teacher is an object with an ID property
//       const res = await axios.put(`teachers/${teacher?.id}`, { classes: updatedClasses });
//       if (res?.data) {
//         // Update the state after a successful update
//         await fetchData();
//       }
//     } catch (error) {
//       console.error("Error updating portion:", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch data when the user ID changes
//     if (user?.id) {
//       fetchData();
//     }
//   }, [user]);

//   return (
//     <div className="flex flex-col">
//       <Navbar />
//       <Heading title={"Portion"} />
//       <Cards
//         cards={teacher?.classes}
//         updatePortion={updatePortion}
//         setTeacher={setTeacher}
//       />
//     </div>
//   );
// };

// export default Portion;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import Heading from "../components/ui/Heading";
// import Cards from "../components/ui/Cards";

// const Portion = () => {
//   const { user } = useAuthContext();
//   const [teacher, setTeacher] = useState([]);
//   const fetchData = async () => {
//     const res = await axios.get(`teachers/${user?.id}`);
//     if (res?.data) {
//       console.log(res?.data);
//       setTeacher(res?.data);
//     }
//   };

//   const updatePortion = async (classes) => {
//     const res = await axios.put(`teachers/${user.id}`, { ...teacher, classes });
//     if (res?.data) {
//       await fetchData();
//     }
//   };

//   useEffect(() => {
//     if (user?.id) fetchData();
//   }, [user]);
//   return (
//     <div className="flex flex-col">
//       <Navbar/>
//       <Heading title={"Portion"} />
//       <Cards
//         cards={teacher?.classes}
//         updatePortion={updatePortion}
//         setTeacher={setTeacher}
//       />
//     </div>
//   );
// };

// export default Portion;




// import React, { useEffect, useState } from "react";
// import { useAuthContext } from "../context/AuthContext";
// import axios from "axios";
// import format from "date-fns/format";
// import { group } from "../helperFunctions";
// import PieCards from "../components/ui/PieCards";
// import BarChart from "../components/ui/BarChart";
// import NameTable from "../components/ui/NameTable";
// import Nav from '../components/ui/Nav';

// const Dashboard = () => {
//   const [leaveRecords, setLeaveRecords] = useState();
//   const { user } = useAuthContext();
//   const [barData, setBarData] = useState({
//     labels: [
//       "Rajas",
//       "Ayush",
//       "Kabir",
//       "Rishabh",
//       "Shruti",
//       "Alia",
//     ],
//     datasets: [
//       {
//         label: "Leaves",
//         data: [80, 70, 40, 60, 100, 40], // Static data for the y-axis
//         backgroundColor: "#5932EA",
//         hoverBackgroundColor: "#BAE6FD",
//       },
//     ],
//   });

//   const fetchData = async () => {
//     let res = await axios.get(`leave-records/${user?.id}`);
//     if (res?.data) {
//       setLeaveRecords(res?.data);
//     }
//   };

//   useEffect(() => {
//     if (user?.id) fetchData();
//   }, [user]);

//   useEffect(() => {
//     // This part remains the same if you want to update the chart data dynamically based on leave records
//     const entries = group(leaveRecords || [], (item) =>
//       format(new Date(item?.dateOfLeave), "MMM")
//     );
//     const e = ["Rajas", "Ayush", "Kabir", "Rishabh", "Shruti", "Alia"].map((month) => ({
//       leaves: entries[month] ? entries[month]?.length : 0,
//       month,
//     }));

//     setBarData((prev) => ({
//       ...prev,
//       datasets: [
//         {
//           ...prev.datasets[0],
//           data: e.map((data) => data?.leaves),
//         },
//       ],
//     }));
//   }, [leaveRecords]);

//   return (
//     <div>
//       <Nav/>
//       <div className="h-full w-full p-2 flex-col ml-1">
//         <PieCards
//           leaves={{
//             sick: leaveRecords?.filter((e) => e.leaveType === "Sick").length,          
//             casual: leaveRecords?.filter((e) => e.leaveType === "Casual").length,
//           }}
//         />
//         <div className="flex">
//           <div className="flex-col m-2 ml-8">
//             <BarChart chartData={barData} className="m-2" />
//           </div>
//           <NameTable/>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import format from "date-fns/format";
import { group } from "../helperFunctions";
import PieCards from "../components/ui/PieCards";
import BarChart from "../components/ui/BarChart";
import NameTable from "../components/ui/NameTable";
import Nav from '../components/ui/Nav';

const Dashboard = () => {
  const [leaveRecords, setLeaveRecords] = useState();
  const { user } = useAuthContext();
  const [barData, setBarData] = useState({
    labels: [
      "Rajas",
      "Ayush",
      "Kabir",
      "Rishabh",
      "Shruti",
      "Alia",
    ],
    datasets: [
      {
        label: "Attention",
        data: [80, 70, 40, 60, 100, 40], // Example data multiplied for better visibility
        backgroundColor: "#5932EA",
        hoverBackgroundColor: "#BAE6FD",
      },
    ],
  });

  const fetchData = async () => {
    try {
      const res = await axios.get(`leave-records/${user?.id}`);
      if (res?.data) {
        setLeaveRecords(res.data);
      }
    } catch (error) {
      console.error("Error fetching leave records:", error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      fetchData();
    }
  }, [user]);

  useEffect(() => {
    if (leaveRecords) {
      const entries = group(leaveRecords, (item) =>
        format(new Date(item?.dateOfLeave), "MMM")
      );
      const data = ["Rajas", "Ayush", "Kabir", "Rishabh", "Shruti", "Alia"].map(
        (month) => ({
          leaves: entries[month] ? entries[month].length : 0,
          month,
        })
      );
      setBarData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: data.map((entry) => entry.leaves),
          },
        ],
      }));
    }
  }, [leaveRecords]);

  return (
    <div>
      <Nav/>
      <div className="h-full w-full p-2 flex-col ml-1">
        <PieCards
          leaves={{
            sick: leaveRecords?.filter((e) => e.leaveType === "Sick").length,          
            casual: leaveRecords?.filter((e) => e.leaveType === "Casual").length,
          }}
        />
        <div className="flex">
          <div className="flex-col m-8 ml-14">
            <BarChart chartData={barData} className="m-2" />
          </div>
          <NameTable/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

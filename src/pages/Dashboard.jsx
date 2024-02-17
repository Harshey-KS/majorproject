import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import format from "date-fns/format";
import { group } from "../helperFunctions";
import PieCards from "../components/ui/PieCards";
import BarChart from "../components/ui/BarChart";
import NameTable from "../components/ui/NameTable";
import Nav from '../components/ui/Nav';
import BLineChart from "../components/ui/BLineChart";

const Dashboard = () => {
  const [leaveRecords, setLeaveRecords] = useState();
  const { user } = useAuthContext();
  const [barData, setBarData] = useState({
    labels: [
      "Harshey",
      "Rajas",
      "Kabir",
      "Rishabh",
      "Shruti",
      "Alia",
    ],
    datasets: [
      {
        label: "Attention",
        data: [80, 70, 40, 60, 90, 40], // Example data multiplied for better visibility
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
      const data = ["Harshey", "Rajas", "Kabir", "Rishabh", "Shruti", "Alia"].map(
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
    <div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh' }}>
      <Nav />
      <div className="h-full w-full p-2 ml-1">
        <NameTable/>
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

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

// StartMeetingButton.jsx

// StartMeetingButton.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './MeetingButton.css'; // Import the CSS file for styling

const StartMeetingButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/videocall'); // Navigate to the /videocall route
  };

  return (
    <div className="start-meeting-container">
      <button className="start-meeting-button" onClick={handleClick}>
        Start Meeting
      </button>
    </div>
  );
};

export default StartMeetingButton;



// import React from 'react';
// import './MeetingButton.css'; // Adjust the path if needed

// const MeetingButton = () => {
//   return (
//     <div className="start-meeting-container">
//       <button className="start-meeting-button">Start Meeting</button>
//     </div>
//   );
// };

// export default MeetingButton;

// // Styles


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import { AuthContextProvider, useAuthContext } from './context/AuthContext';

// import Home from './pages/Home';
// import Assignment from './pages/Assignment';
// import CompsA from './pages/CompsA';



// function App() {
//   const { user } = useAuthContext();
//   return (

//       <Router>
//         <Routes>
          
//           <Route path="/home" element={<Home/>} />
//           <Route path="/compsa" element={<CompsA/>} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </Router>
   
//   );
// };

// export default App;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';
import CompsA from './pages/CompsA';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <AuthContextProvider> {/* Wrap your components with AuthContextProvider */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/compsa" element={<CompsA />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Assignments from './pages/Assignments';
import Portion from './pages/Portion';
import Dashboard from './pages/Dashboard';
import Videocall from './pages/Videocall';
import { AuthContextProvider, useAuthContext } from './context/AuthContext';
import Upload from './pages/Upload';
import Syllabus from './pages/Syllabus';
import HomeStudent from './pages/HomeStudent';
import Login from './pages/Login';
import CompsA from './pages/CompsA';





function App() {

  // const [initialFormData, setInitialFormData] = React.useState({ name: '', email: '' });
  // Wrap your entire application with AuthContextProvider
  return (
    <AuthContextProvider>
       {/* <FormContext.Provider value={{ formData: initialFormData, handleSubmit: () => {} }}> Provide FormContext */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignments" element={<Assignments/>} />
          <Route path="/portion" element={<Portion />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/video" element={<Videocall />} />
          <Route path="/home" element={<HomeStudent />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/compsa" element={<CompsA />} />

      
          {/* Add more routes as needed */}
        </Routes>
      </Router>
      {/* </FormContext.Provider> */}
    </AuthContextProvider>
  );
}

export default App;

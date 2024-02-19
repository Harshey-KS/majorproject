import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';
import CompsA from './pages/CompsA';
import CompsAstudent from './pages/CompsAstudent';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/webRTC/homepage';
import Login from './pages/loginteacher';
import Register from "./pages/register";
import Room from './pages/webRTC/room';
import Lobby from './pages/webRTC/lobby';



function App() {
  return (
    <AuthContextProvider> {/* Wrap your components with AuthContextProvider */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/compsa" element={<CompsA />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compsastudent" element={<CompsAstudent />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/loginteacher" element={<Login />}/>
          <Route path='/register'element={<Register/>}/>
          <Route path='/room' element={<Room />}/>
          <Route path='/lobby' element={<Lobby />}/>
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;



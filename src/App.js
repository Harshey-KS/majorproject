import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';
import CompsA from './pages/CompsA';
import CompsAstudent from './pages/CompsAstudent';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <AuthContextProvider> {/* Wrap your components with AuthContextProvider */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/compsa" element={<CompsA />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/compsastudent" element={<CompsAstudent />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;



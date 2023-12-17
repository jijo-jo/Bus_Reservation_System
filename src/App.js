// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './Components/ReservationForm';
import Dashboard from './Components/Dashboard';
import LoginPage from './Components/Login';
import Confirmbooking from './Components/Confirmreservation';
import ErrorPage from './Components/Errorpage';
import { useState } from 'react';
const App = () => {
  const [enable,setEnable] = useState(false);
  if(localStorage.getItem('logindetails'))
  {
    setEnable(true);
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          {enable && <Route path="/dashboard" element={<Dashboard />} />}
          {enable && <Route path="/reserve" element={<ReservationForm />} />}
          {enable && <Route path="/confirm/:number" element={<Confirmbooking/>}/>}
          <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;


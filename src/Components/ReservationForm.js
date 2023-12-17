import React from 'react';
import Navbar from './Navbar';
import BusLayout from './Buslayout';
import { useNavigate } from 'react-router-dom';

const ReservationForm = () => {
  const navigate =useNavigate()

  return (
    <div>
      <Navbar  navigate = {navigate}/>
      <BusLayout/>
    </div>
  );
};

export default ReservationForm;

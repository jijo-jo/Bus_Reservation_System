// BusSeat.js
import React from 'react';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';
import { useState } from 'react';
import './BusSeat.css'


const BusSeat = ({ seatNumber,deck, onClick }) => {
  
  const [busbooking,setBusbooking] = useState(JSON.parse(localStorage.getItem('bookingjson')));

  const filterdata = busbooking.filter((data)=>data.seatnumber === `${deck+seatNumber}`)
  console.log("filterdata",filterdata);



  return (
      <div  onClick={() => onClick(deck,seatNumber)} style={{marginTop:"5px"}}>
      <Paper className={filterdata[0].bookingstatus} >
        <Typography variant="body1"> {`${deck}:${seatNumber}`}</Typography>
      </Paper>
    </div>
  );
};

export default BusSeat;

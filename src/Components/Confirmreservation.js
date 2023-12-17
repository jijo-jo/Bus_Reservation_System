import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Confirmbooking() {

  const navigate = useNavigate();
  const { number } = useParams();
  const [busbooking, setBusbooking] = useState(JSON.parse(localStorage.getItem('bookingjson')));
  const [userdata,setUserdata]= useState(JSON.parse(localStorage.getItem("logindetails")));

  const currentDate = new Date();

  // Get day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();

  function handleconfirm() {
    let clickedseat = busbooking
    clickedseat.map((data) => {
      if (data.seatnumber === number) {
        data.bookingstatus = "booked";
        data.bookingdate = `${day}/${month}/${year}`
      }
    })
    setBusbooking(clickedseat);
    localStorage.setItem("bookingjson", JSON.stringify(clickedseat))
    navigate(`/dashboard`);
  }
  function handlecancel() {
    let clickedseat = busbooking
    clickedseat.map((data) => {
      if (data.seatnumber === number) {
        data.bookingstatus = "free"
      }
    })
    setBusbooking(clickedseat);
    localStorage.setItem("bookingjson", JSON.stringify(clickedseat))
    navigate(`/dashboard`);

  }
  return (<>
    <Navbar  navigate = {navigate} />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{display:"flex",justifyContent:"center",alignItems:"center"}}
    >
      <div style={{background:"#80808021",margin:20, padding:"2rem 3rem", }}>
        <h2>Confirm Booking</h2>
        <div style={{display:"flex", flexDirection:"column"}}>
        <TextField
          required
          id="standard-required"
          label="Fistname"
          defaultValue={userdata.firstname}
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Last Name"
          defaultValue={userdata.lastname}
          variant="standard"
        />
        <TextField
          required
          id="standard-required"
          label="Email"
          defaultValue={userdata.email}
          variant="standard"
        />

        <TextField
          id="standard-read-only-input"
          label="Seat Number"
          defaultValue={number}
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        </div>
       <div style={{display:"flex"}}>
        <Button style={{margin:"10px"}} variant="outlined" onClick={handlecancel}>Cancel</Button>
        <Button style={{margin:"10px"}} variant="outlined" onClick={handleconfirm}>Confirm</Button>
        </div>
      </div>
    </Box>
  </>
  );
}
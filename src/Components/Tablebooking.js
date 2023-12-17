import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useState, useEffect } from 'react';

const MyTable = () => {

  const [busbooking,setBusbooking] = useState(JSON.parse(localStorage.getItem('bookingjson')));
  const [datafortable,setDatafortable] = useState([]);
  const handleDelete = (id) => {
    let clickedseat = busbooking
    clickedseat.map((data) => {
      if (data.seatnumber === id) {
        data.bookingstatus = "free"
      }
    })
    localStorage.setItem("bookingjson", JSON.stringify(clickedseat))
    setBusbooking(JSON.parse(localStorage.getItem('bookingjson')));
  };
  
  function datadestructuring(){
    let i=0;
    const tempdataarray = [];
    busbooking.map((data)=>{
       if(data.bookingstatus === "booked"){
          tempdataarray.push(data);
       }
    });
    console.log(tempdataarray);
    setDatafortable(tempdataarray);
  }
  
  useEffect(()=>{
      datadestructuring()
  },[busbooking]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Seat Number</TableCell>
            <TableCell>Booking Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datafortable.map((row) => (
            <TableRow key={row.seatnumber}>
              <TableCell>{row.seatnumber}</TableCell>
              <TableCell>{row.bookingdate}</TableCell>
              <TableCell>
                <Button variant="outlined" color="secondary" onClick={() => handleDelete(row.seatnumber)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;

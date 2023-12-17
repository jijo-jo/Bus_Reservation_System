import React from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import BusSeat from './BusSeat'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BusLayout = () => {
 const navigate = useNavigate();
 const [busbooking,setBusbooking] = useState(JSON.parse(localStorage.getItem('bookingjson')));

const handleSeatClick = (deck,seatNumber) => {
        console.log(`Seat ${seatNumber} clicked`);
        let clickedseat = busbooking
        clickedseat.map((data)=>{
          console.log(data.seatNumber,`${deck+seatNumber}`)
          if(data.seatnumber === `${deck+seatNumber}`){
            data.bookingstatus = "inprogress"
          }
        })
        setBusbooking(clickedseat);
        localStorage.setItem("bookingjson",JSON.stringify(clickedseat))
        navigate(`/confirm/${deck+seatNumber}`);

      };
  const renderSeats = (deck, totalSeats) => {
    const seats = [];
    
    for (let i = 1;i <= totalSeats;i++) {
      seats.push(
        <div style={{display:"flex", flexDirection:"column",justifyContent:"space-around"}}>
          <BusSeat key={i} seatNumber={i} deck={deck} onClick={handleSeatClick} />
          {i++< totalSeats ? <BusSeat key={i} seatNumber={i} deck={deck} onClick={handleSeatClick} />: null}
          {i++< totalSeats ? <BusSeat key={i} seatNumber={i} deck={deck} onClick={handleSeatClick} />: null}
        </div>
      );
    }
    return seats;
  };

  return (
    <Container>
      <div style={{marginTop:"20px"}}>
      <Typography variant="h4" gutterBottom>
        Bus Layout
      </Typography>
      </div>
          <div>
          <Typography variant="h6">Upper Deck</Typography>
            <div style={{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-around",height:'250px',border:"1px solid"}}>
            {renderSeats('U', 20)}
            </div>
          </div>
          <div style={{marginTop:"20px"}}>
          <Typography variant="h6">Lower Deck</Typography>
          <div style={{marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-around",height:'250px',border:"1px solid"}}>
            {renderSeats('L', 20)}
          </div>
          </div>
    </Container>
  );
};

export default BusLayout;




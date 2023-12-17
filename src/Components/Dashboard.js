import React from 'react';
import Navbar from './Navbar';
import { Container,Grid,Typography,Paper,Button} from '@mui/material';
import { useEffect,useState } from 'react';
import MyTable from './Tablebooking';
import EditPopup from './Popup';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
 
  const navigate = useNavigate();
  const [userdata,setUserdata]= useState(JSON.parse(localStorage.getItem("logindetails")));
  const [open, setOpen] = useState(false);
  const bookingjson = []
  for(let i=1;i<=20;i++){
      let upper = {
         seatnumber:`U${i}`,
         bookingstatus:"free",
         bookingdate:""
      }
      let lower = {
        seatnumber:`L${i}`,
        bookingstatus:"free",
        bookingdate:""
     }
     bookingjson.push(upper);
     bookingjson.push(lower);
  }  
  useEffect(()=>{
    if(!(localStorage.getItem("bookingjson"))){
      localStorage.setItem("bookingjson",JSON.stringify(bookingjson));
    }
  },[])
  
  const handleClickOpen = () => {
    console.log("onhandlecleickopen")
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
      <div>
         {open && <EditPopup open={open} handleClose={handleClose} setUserdata={setUserdata}/>}
        <Navbar  navigate = {navigate}/>
        <Container>
        <Paper style={{ padding: '20px', marginTop: '20px',background:"#80808021" }}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">First Name:</Typography>
              <Typography variant="body1">{userdata.firstname}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Last Name:</Typography>
              <Typography variant="body1">{userdata.lastname}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">{userdata.email}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <div style={{padding:"10px",display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
             <Button variant="outlined" onClick={()=>{handleClickOpen()}}>Edit Profile</Button>
        </div>
      </Container>
      <div style={{padding:"20px"}}>
        <Container>
        <MyTable/>
        </Container>
      </div>
      </div>
    );
  };

export default Dashboard;


import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

export default function EditPopup(props){
    const [userdata,setUserdata]= useState(JSON.parse(localStorage.getItem("logindetails")));
    const [formData, setFormData] = useState({
        firstName: userdata.firstname,
        lastName: userdata.lastname ,
        email: userdata.email,
      });

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        let tempdata = userdata
        tempdata.firstname = formData.firstName;
         tempdata.lastname =formData.lastName;
         tempdata.email = formData.email;   
         setUserdata(tempdata);
         localStorage.setItem("logindetails",JSON.stringify(tempdata));
         props.setUserdata(JSON.parse(localStorage.getItem("logindetails")))
         props.handleClose()
      };
    return(
        <Dialog open={props.open} close={props.handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
        <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={(e)=>{handleSubmit(e)}}>Confirm</Button>
        </DialogActions>
      </Dialog>
    )
}
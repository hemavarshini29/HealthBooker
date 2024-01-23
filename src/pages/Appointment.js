// import React from 'react'
// import Layout from "./../components/Layout/Layout";
// import { Link } from 'react-router-dom';
// // import '../styles/Homestyle.css'
// import {  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, TextField } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
// import { Card, CardContent,  Button } from '@mui/material';
// import image2 from "../images/image2.jpg";
// // import Modalpopup from './Modalpopup';


//     const Modalpopup = () => {
//       const [open,openchange]=useState(false);
//       const functionopenpopup=()=>{
//         openchange(true);
//       }
//       const closepopup=()=>{
//         openchange(false);
//       }
//       return (
       
//     <div className='home' style={{ backgroundImage: `url(${image2})` }}>
//         <Layout>
//            <div className='home' >
//             <div className='headerContainer'>
//             <p> Your Health,</p>
//           <p> Our Responsibility</p>
            
//                 <Button onClick={functionopenpopup}color="primary" variant="contained" justify-content="center">Book now</Button>
//         <Dialog open={open} onClose={closepopup} fullWidth>
//           <DialogTitle>Book Appointment<IconButton onClick={closepopup} style={{float:"right"}}><CloseIcon color="primary"></CloseIcon></IconButton></DialogTitle>
//           <DialogContent>
         
//           <Card sx={{ backgroundColor: '#f5f5f5', color: '#333', minWidth: 275, borderRadius: 4, fontFamily: 'Arial, sans-serif' }}>
//       <CardContent>
//         <Stack spacing={2}>
//           <TextField variant="outlined" label="Email" fullWidth></TextField>
//           <TextField variant="outlined" label="Name" fullWidth></TextField>
//           <TextField variant="outlined" label="Password" fullWidth></TextField>
//           <Link to='/services'>
//             <Button color="primary" variant="contained" fullWidth>Book</Button>
//           </Link>
//         </Stack>
//       </CardContent>
//     </Card>
            
//           </DialogContent>
//           <DialogActions>
            
//           </DialogActions>
//         </Dialog>
             
//             </div>
//            </div>
//         </Layout>
//     </div>
//   )
// }

// export default Modalpopup


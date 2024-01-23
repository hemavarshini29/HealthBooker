import React from "react";
import { DoctorsList } from "../data/data";
import Layout from "../components/Layout/Layout";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import {  Dialog, DialogTitle, IconButton, Stack, TextField } from '@mui/material'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';
const Doctors = () => {
  const [value, setValue] = React.useState(null);
    const [open,openchange]=useState(false);
    const functionopenpopup=()=>{
      openchange(true);
    }
    const closepopup=()=>{
      openchange(false);
    }
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {DoctorsList.map((doctors) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 12 }}>
            <CardActionArea>
              {/* <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              /> */}
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {doctors.name}
                </Typography>
                <Typography variant="body2">{doctors.description}</Typography>
         
                <Button onClick={functionopenpopup}color="primary" variant="contained" justify-content="center">
      Book Appointment
      </Button>
        <Dialog open={open} onClose={closepopup} fullWidth>
          <DialogTitle>Book Appointment<IconButton onClick={closepopup} style={{float:"right"}}>
      <CloseIcon color="primary"></CloseIcon></IconButton><br></br>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={2} sx={{ minWidth: 305 }}>
        <DateTimePicker
          value={value}
          onChange={setValue}
          referenceDate={dayjs('2022-04-17T15:30')}
        />
        {/* <Typography>
          Stored value: {value == null ? 'null' : value.format()}
        </Typography> */}
      </Stack>
    </LocalizationProvider>
    {/* <IconButton onClick={closepopup} style={{float:"right"}}>
      <CloseIcon color="primary"></CloseIcon></IconButton> */}
      </DialogTitle>
    <Button color="primary" variant="contained" justify-content="center">
      Book</Button>
    </Dialog>
    
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        
      </Box>
    </Layout>
  );
};


export default Doctors;





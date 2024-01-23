
import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Hidden, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
        <Box
        sx={{
          my: 3,
          textAlign: "centre",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
              
            },
          },
        }}
      >
       <Typography variant="h4">The great place
         <br /> of medical hospital centre</Typography>
         <br />
         <p>
         We provide the special tips and advice’s of heath care treatment and high level of<br></br> best technology involve in our hospital.
         </p>
         
         
      <Box
          component="img"
          sx={{
            height:"80%",
            width:"35%",
            marginLeft:110,
            marginRight:0,
          
            // padding:10, 
            
          }}
          
          alt="HealthBooker"
          src="https://media.post.rvohealth.io/wp-content/uploads/2020/08/Doctors_For_Men-732x549-thumbnail.jpg"
          
          />
          </Box>
      
    </Layout>
  );
};

export default About;















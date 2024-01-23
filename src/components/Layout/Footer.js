import React from "react";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "white", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: -1,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          {/* <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon /> */}
        </Box>
        {/* <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; HealthBooker
        </Typography> */}
      </Box>
    </>
  );
};

export default Footer;

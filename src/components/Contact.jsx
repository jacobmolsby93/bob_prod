import React, { useState } from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/boblogo.png";

import MessageForm from "../form/MessageForm.jsx";

import FacebookIcon from "../assets/facebook.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from '@mui/icons-material/MailRounded';

export default function Contact() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();


  const contactIcon = {
    color: theme.palette.primary[500],
    fontSize: "1.8rem",
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="relative"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
        alignItems: "center",
      }}
    >
      {/* Background Logo */}
      <Box
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: "20%",
          minHeight: "80%",
          width: "100%",
          zIndex: "0",
          position: "absolute",
        }}
      ></Box>
      <Grid container width="100%" justifyContent="center" zIndex="1" mt="20px">
        {/* Text Area */}
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          sx={{ marginBottom: mediumScreen ? "30px" : "" }}
        >
          <Typography
            className="subtitle-font"
            variant="h2"
            component="p"
            color={theme.palette.primary[500]}
          >
            Få en kostnadsfri offert idag!
          </Typography>
          <Typography variant="h1" className="title-font">
            Kontakta Oss Idag.
          </Typography>
          <Box display="flex" mt="2rem">
            <span
              style={{
                width: ".2rem",
                height: "auto",
                marginRight: "10px",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p
              className="body-paragraph"
              style={{
                maxWidth: !smallScreen ? "70%" : "100%",
              }}
            >
              Fyll i informationen och beskriv vad du vill ha hjälp med så
              kontaktar vi dig inom kort!
            </p>
          </Box>
          <Box mt="30px">
            <a
              href="https://www.instagram.com/bob.badrum/"
              target="_blank"
              aria-label="Länk till företages Instagram"
              className="social-icon"
            >
              <Button
                aria-label="Instagram"
                variant="outlined"
                sx={styledIconOutlined}
              >
                <InstagramIcon sx={{ width: "20px", height: "20px" }} />
              </Button>
            </a>
            <a
              href="https://www.facebook.com/byggobadrumspartner"
              target="_blank"
              aria-label="Länk till företages Facebook sida"
            >
              <Button
                aria-label="Facebook"
                variant="outlined"
                sx={styledIconOutlined}
              >
                <img
                  src={FacebookIcon}
                  width="20px"
                  height="20px"
                  alt="Facebook ikon"
                />
              </Button>
            </a>
          </Box>
          <Box mt="30px">
            <a className="body-paragraph contact-info" href="mailto:hej@bobbadrum.se?subject=Offert">
              <span style={{ marginRight: ".5rem" }}>
                <MailRoundedIcon sx={contactIcon} />
              </span>
              hej@bobbadrum.se
            </a>
            <p className="body-paragraph contact-info">
              <span style={{ marginRight: ".5rem" }}>
                <CallRoundedIcon sx={contactIcon} />
              </span>
              08 - 33 36 63
            </p>
          </Box>
        </Grid>
        {/* Form Area */}
        <MessageForm />
      </Grid>
    </Box>
  );
}

const styledIconOutlined = {
  height: "40px",
  width: "40px",
  minWidth: "unset",
  borderRadius: "50%",
  color: "#2d2d2d",
  backgroundColor: "transparent",
  border: "1px solid #2d2d2d",
  "&:hover": {
    border: "1px solid #2d2d2d",
    backgroundColor: "#fff",
  },
};

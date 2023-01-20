import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  useMediaQuery,
  ListItem,
  List,
  Button,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "../assets/facebook.png";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// Data
import data from "../data/team.json";
// Images
import logo from "../assets/boblogo.png";

export default function Team() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const cardStyle = {
    backgroundColor: "rgba(88, 100, 135, 0.1)",
    minHeight: smallScreen ? "250px" : "350px",
    boxShadow: "none",
    position: "relative",
    overflow: "visible",
    marginBottom: smallScreen ? "8rem" : "6rem",
  };

  return (
    <Box
      className="row"
      display="flex"
      justifyContent={!lgScreen ? "space-between" : "center"}
    >
      {data.persons.map((person) => (
        <Box className="col-10 col-md-4 mt-2 mt-md-none" padding="0 10px" maxWidth={smallScreen ? "" : "350px"} key={person.id}>
          <Card
            className="flex-centerd-justify"
            position="relative"
            sx={cardStyle}
          >
            <Box sx={cardBackground}></Box>
            <Box sx={socialList} display="flex" justifyContent="center">
              <nav style={{ width: "100%"}}
              >
                <List className="team-social-list">
                  <ListItem className="social-icon-wrapper">
                    <a href={person.facebook} target="_blank" aria-label="Länk för facebook knapp">
                      <Button variant="outlined" sx={styledIconOutlined} aria-label="Se BOB Badrums Facebook konto">
                        <img
                          src={FacebookIcon}
                          width="20.56px"
                          height="20.56px"
                          alt="Facebook icon black"
                        />
                      </Button>
                    </a>
                  </ListItem>
                  <ListItem className="social-icon-wrapper">
                    <a href={person.facebook} target="_blank" aria-label="Länk för instagram knapp"> 
                      <Button variant="outlined" sx={styledIconOutlined} aria-label="Se BOB Badrums Instagram konto"> 
                        <InstagramIcon />
                      </Button>
                    </a>
                  </ListItem>
                  <ListItem className="social-icon-wrapper">
                    <a href={person.facebook} target="_blank" aria-label="Länk för telefon knapp">
                      <Button variant="outlined" sx={styledIconOutlined} aria-label="Ring BOB Badrum">
                        <CallIcon />
                      </Button>
                    </a>
                  </ListItem>
                  <ListItem className="social-icon-wrapper">
                    <a href={person.facebook} target="_blank" aria-label="Länk för email knapp">
                      <Button variant="outlined" sx={styledIconOutlined} aria-label="Skicka email till BOB Badrum">
                        <EmailOutlinedIcon />
                      </Button>
                    </a>
                  </ListItem>
                </List>
              </nav>
            </Box>
            <Box textAlign="center" sx={textBelow}>
              <Typography variant="h4" fontWeight="bold">
                {person.namn}
              </Typography>

              <Typography variant="h5" color={"#963900"}>
                {person.roll}
              </Typography>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

const cardBackground = {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  margin: "20px",
  backgroundImage: `url(${logo})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center top",
  height: "100%",
  opacity: 0.2,
  zIndex: -1,
};

const textBelow = {
  position: "absolute",
  bottom: "-6rem",
};

const socialList = {
  position: "absolute",
  bottom: "-1.8rem",
  backgroundColor: "#fff",
  borderRadius: "2.5rem",
  width: "80%",
  maxWidth: "220px",
};

const styledIconOutlined = {
  height: "35px",
  width: "35px",
  minWidth: "unset",
  borderRadius: "50%",
  backgroundColor: "transparent",
  color: "#000",
  fontSize: "1.2rem",
  border: "1px solid #000",
  "&:hover": {
    border: "1px solid #000",
  },
};

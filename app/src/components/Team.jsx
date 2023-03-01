import React, { useState } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "../assets/facebook.png";
import CallIcon from "@mui/icons-material/Call";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import logo from "../assets/boblogo.png";
import Hubert from "../assets/hubert.png";
import Viktor from "../assets/viktor-profil.png";
import DefaultGirl from "../assets/default-girl.png";
import DefaultGuy from "../assets/default-guy.png";

export default function Team() {
  const theme = useTheme();
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
    <Box>
      <Typography variant="h6" className="title-font" textAlign="center">
        Vi på Bob Våtrumsrenovering AB
      </Typography>
      <Box className="row" display="flex" justifyContent="center" mt="3rem">
        {PersonList.map((person) => (
          <Box
            className="col-xs-12 col-sm-8 col-md-6 col-lg-3 mt-md-4"
            key={person.id}
            sx={{ maxWidth: "300px" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              flexDirection="column"
              padding="0 20px"
            >
              <Box
                backgroundColor={theme.palette.grey[200]}
                width="100%"
                position="relative"
                display="flex"
                alignItems="flex-end"
              >
                <Box
                  sx={{
                    opacity: "1",
                    position: "absolute",
                    width: "100%",
                    height: "85%",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                  }}
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    title={person.name}
                    style={{ maxWidth: "100%" }}
                  />
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    opacity: "0.3",
                    width: "100%",
                    height: "300px",
                  }}
                ></Box>
              </Box>
              <Box textAlign="center">
                <Typography variant="body1" className="subtitle-font">
                  {person.name}
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  sx={{ fontWeight: "bold" }}
                >
                  {person.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const PersonList = [
  {
    id: 1,
    name: "Viktor Nilsson",
    title: "Projektledare",
    image: Viktor,
  },
  {
    id: 2,
    name: "Hubert Peksyk",
    title: "Projektledare",
    image: Hubert,
  },
  {
    id: 3,
    name: "Jacob Molsby",
    title: "Kund Ansvarig",
    image: DefaultGuy,
  },
  {
    id: 4,
    name: "Elin Palmgren",
    title: "Företagsledare",
    image: DefaultGirl,
  },
];

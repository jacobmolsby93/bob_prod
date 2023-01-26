import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
// Components
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";

// Widgets
import Gallery from "./widgets/Gallery.jsx";

// Images
import landingImage from "../../assets/landingbackground3.webp";

export default function Projects() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box className="landing-box" height="40vh">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${landingImage})`,
          }}
        ></Box>
      </Box>
      <Spacer />

      <section id="projekt" style={{ minHeight: "100vh" }}>
        <Box className="container">
          <Box className="row">
            <Gallery />
          </Box>
        </Box>
      </section>

      <Spacer />
      <Spacer />

      <section id="credits" className="credits-bg">
        <Credits dark={true} />
      </section>
    </div>
  );
}

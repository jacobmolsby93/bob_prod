import React from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";

// Widgets
import Intro from "./widgets/Intro";

// Components
import Spacer from "../../components/Spacer";
import Credits from "../../components/Credits";
import Contact from "../../components/Contact";

// Images
import heroImage from "../../assets/landingbackground2.webp";

// Animation
import AnimatedBox from "../../animation/Animated";
import SectionTwo from "./widgets/SectionTwo";

export default function Comfort() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";
  return (
    <Box>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${heroImage})`,
          }}
        ></Box>
        {/* Hero Section */}
        <Box
          className="container"
          sx={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "5%",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Typography
              variant="h1"
              fontWeight="bold"
              className="hero_title"
              fontSize={
                smallScreen
                  ? `clamp(32px, 4vw, ${titleFontSize})`
                  : titleFontSize
              }
              textTransform="uppercase"
              color="#E6E6E6"
            >
              Trygg Renovering
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      <section>
        <Box className="container">
          <Intro />
        </Box>
      </section>

      <Spacer />

      <section>
        <Box className="container">
          <SectionTwo />
        </Box>
      </section>

      <Spacer />

      <section>
        <Box className="container">
          <Box className="row">
            <Contact />
          </Box>
        </Box>
      </section>

      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}

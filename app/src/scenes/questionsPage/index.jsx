import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// Components
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";
import Contact from "../../components/Contact";
// Animations
import AnimatedBox from "../../animation/Animated.jsx";
// Widgets
import Faq from "./widgets/Faq.jsx";
// Images
const heroImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/landingbackground2.webp";

export default function Questions() {
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
            backgroundPosition: "center top",
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
              Vanliga Frågor
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      <section>
        <Box className="container">
          <Faq />
        </Box>
      </section>

      <Spacer />

      <section>
        <AnimatedBox>
          <Contact />
        </AnimatedBox>
      </section>

      <Spacer />
      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}

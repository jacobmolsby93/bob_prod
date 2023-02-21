import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import Spacer from "../../components/Spacer.jsx";
import Contact from "../../components/Contact.jsx";
//  Widgets
import AboutBob from "./widgets/AboutBob.jsx";
import Stand from "./widgets/Stand.jsx";
import Clients from "./widgets/Clients.jsx";

// images
const landingImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/aboutimage1.webp";

import AnimatedBox from "../../animation/Animated.jsx";

export default function AboutPage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const titleFontSize = "54px";

  return (
    <Box>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${landingImage})`,
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
              Om Oss
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />
      <AnimatedBox>
        <section id="intro-about">
          <Box className="container">
            <AboutBob />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <AnimatedBox>
        <section id="stand">
          <Box className="container-fluid">
            <Stand />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="contact-about">
          <Box className="container">
            <Contact />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <Clients />
    </Box>
  );
}

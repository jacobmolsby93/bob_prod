import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// Components
import Contact from "../../components/Contact.jsx";
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";
import ButtonOrange from "../../components/ButtonOrange.jsx";
import Video from "../../components/Video.jsx";
import InstgramWidget from "../../components/InstagramWidget.jsx";
import Team from "../../components/Team.jsx";
// Widgets
import Intro from "./widgets/Intro.jsx";
import TipsCarousel from "./widgets/Tips.jsx";
import Planer from "./widgets/Planer.jsx";

// Animation
import AnimatedBox from "../../animation/Animated.jsx";
import landingImage from "../../assets/contact-background.png";
// Images

export default function Bathroom() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const titleFontSize = "54px";
  return (
    <div style={{ minHeight: "max-content" }}>
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
            paddingTop: "100px",
            justifyContent: "center",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Box className="row" justifyContent="center">
              <Box textAlign="center" className="col-12 col-md-7">
                <Typography
                  variant="h1"
                  fontWeight="bold"
                  className="hero_title"
                  fontSize={
                    smallScreen
                      ? `clamp(28px, 4vw, ${titleFontSize})`
                      : titleFontSize
                  }
                  textTransform="uppercase"
                  color="#fff"
                >
                  Badrumsrenovering?
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  style={{
                    color: "#fff",
                    marginTop: smallScreen ? "1rem" : "2rem",
                  }}
                >
                  Dags att renovera badrummet? Låt oss vara med och räkna. Vi
                  renoverar ett stort antal badrum och tvättstugor varje år och
                  hos oss får du ett fast pris, en tydlig och fastställd tidplan
                  och en engagerad projektledare som är med dig hela vägen från
                  start till mål. Kontakta BOB för en fri rådgivning av din
                  Badrumsrenovering i Stockholm.
                </Typography>
                <Box mt={smallScreen ? "1rem" : "2rem"}>
                  <ButtonOrange
                    aria="Klicka för att komma till kontakta oss sidan"
                    ariaAtag="Länk till kontakta oss"
                    buttonText="Kontakta oss"
                  />
                </Box>
              </Box>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />
      <AnimatedBox>
        <section id="credits">
          <Credits />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="intro">
          <Intro />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="interview">
          <Video />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="instagram">
          <InstgramWidget />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="tips">
          <TipsCarousel />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="planering">
          <Box className="container">
            <Planer />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />
      {!lgScreen && <Spacer />}
      <AnimatedBox>
        <section id="team">
          <Team />
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="tjanster-kontakt">
          <Contact />
          <Spacer />
        </section>
      </AnimatedBox>
    </div>
  );
}

import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// Components
import Contact from "../../components/Contact.jsx";
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";
import ButtonOrange from "../../components/ButtonOrange.jsx";

// Widgets
import Intro from "./widgets/Intro.jsx";
import TipsCarousel from "./widgets/Tips.jsx";
import Planer from "./widgets/Planer.jsx";

// Animation
import AnimatedBox from "../../animation/Animated.jsx";
import landingImage from "../../assets/servicesheroimg.webp";
// Images

export default function Bathroom() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
                      ? `clamp(32px, 4vw, ${titleFontSize})`
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
                  style={{ color: "#fff", marginTop: "2rem"}}
                >
                  Dags att renovera badrummet? Låt oss vara med och räkna. Vi
                  renoverar ett stort antal badrum och tvättstugor varje år och
                  hos oss får du ett fast pris, en tydlig och fastställd tidplan
                  och en engagerad projektledare som är med dig hela vägen från
                  start till mål. Kontakta BOB för en fri rådgivning av din
                  Badrumsrenovering i Stockholm.
                </Typography>
                <Box mt="2rem">
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
        <section id="intro">
          <Box className="container">
            <Intro />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />
      <AnimatedBox>
        <section id="tips">
          <Box className="container">
            <Box className="row">
              <Box className="flex-centerd-justify" mb="2rem">
                <Box textAlign="center">
                  <Typography variant="h2" className="title-font">
                    10 Tips Inför Din Badrumsrenovering
                  </Typography>
                  <Box className="flex-centerd-justify">
                    <p
                      className="body-paragraph"
                      style={{
                        width: smallScreen || mdScreen ? "100%" : "70%",
                        textAlign: "center",
                      }}
                    >
                      Den som äger ett hus eller en lägenhet i Stockholm behöver
                      lägga tid och pengar för att renovera sin bostad. En av de
                      vanligaste, och roligaste rummen att renovera enligt oss
                      är såklart badrum!
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
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
      <AnimatedBox>
        <section id="tjanster-kontakt">
          <Contact />
          <Spacer />
        </section>
      </AnimatedBox>
      <div className="credits-bg">
        <Credits dark={true} />
      </div>
    </div>
  );
}

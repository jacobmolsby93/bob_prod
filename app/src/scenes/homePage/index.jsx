import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Call from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
// Componenets
import Spacer from "../../components/Spacer.jsx";
import Contact from "../../components/Contact.jsx";
import Credits from "../../components/Credits.jsx";
import Reco from "../../components/Reco.jsx"

// Widgets
import Faq from "./widgets/Faq.jsx";
import Carousel from "./widgets/Carousel.jsx";
import Intro from "../../components/Intro.jsx";
import BoxSelector from "./widgets/BoxSelectorHome.jsx";
//Images
import landingBackground from "../../assets/landingbackground.webp";
import landingBackground2 from "../../assets/landingbackground2.webp";
import landingBackground3 from "../../assets/landingbackground3.webp";
import landingBackground4 from "../../assets/landingbackground4.webp";
import carouselImage1 from "../../assets/carouselhome1.webp";
import carouselImage2 from "../../assets/carouselhome2.webp";
import carouselImage3 from "../../assets/carouselhome3.webp";
import carouselImage4 from "../../assets/carouselhome4.webp";
import faq from "../../assets/faq.png";


import image from "../../assets/carouselhome1.webp";

// Animation
import { AnimatePresence, motion } from "framer-motion";
import AnimatedBox from "../../animation/Animated.jsx";

const images = [
  landingBackground,
  landingBackground2,
  landingBackground3,
  landingBackground4
];

export default function HomePage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Css style variables
  const backgroundQuestion = "#FBF9F9";
  const titleFontSize = "50px";
  const marginTop = "30px";
  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    padding: 0,
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
      padding: "6px 16px",
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const buttonStyleOutline = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: `1px solid ${theme.palette.grey[0]}`,
    "&>a": {
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      border: `1px solid ${theme.palette.grey[0]}`,
    },
  };

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const imageObjects = images.map((image) => new Image());
    let imageLoadedCount = 0;
    imageObjects.forEach((image, index) => {
      image.src = images[index];
      image.onload = () => {
        imageLoadedCount++;
        if (imageLoadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
    });
    return () => {
      imageObjects.forEach((image) => {
        image.onload = null;
      });
    };
  }, [images]);

  useEffect(() => {
    if (imagesLoaded) {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 6000);
      return () => clearInterval(intervalId);
    }
  }, [imagesLoaded, currentIndex, images]);

  return (
    <Box>
      {/* Landing Page */}
      <Box className="landing-box-home">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <AnimatePresence>
          <Box
            className="landing-box-home__image"
            style={{
              transition: "ease-in-out 600ms",
              backgroundImage: imagesLoaded
                ? `url(${images[currentIndex]})`
                : `url(${images[0]})`,
            }}
          ></Box>
        </AnimatePresence>
        {/* Hero Section */}
        <Box
          className="container"
          sx={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: smallScreen ? "center" : "flex-end",
            paddingBottom: "5%",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Typography
              variant="h1"
              fontWeight="bold"
              className="hero_title"
              sx={{ fontSize: `clamp(35px, 5vw, ${titleFontSize})` }}
              textTransform="uppercase"
              color="#E6E6E6"
            >
              VÄLKOMMEN TILL BOB VÅTRUMSRENOVERING! PROFFS PÅ VÅTUTRYMMEN.
            </Typography>
            {!smallScreen && (
              <Box className="col-12 col-lg-7">
                <Typography
                  sx={{ fontSize: "1.3rem"}}
                  color="#E3E3E3"
                  mt={marginTop}
                  variant="h4"
                  component="p"
                >
                Vi är den pålitliga och trygga hantverkaren som du
                nästan inte trodde fanns. Men vi finns här för dig, och vi står vid
                din sida hela vägen från idé till verklighet. För oss är trygghet
                och tillgänglighet själva grundpelarna i det vi gör, och vi
                levererar alltid hantverk av högsta kvalitet. Låt oss hjälpa dig att
                skapa det drömbadrum du alltid har önskat dig. För att vi ska
                kunna hjälpa dig på bästa sätt rekommenderar vi att boka in ett första möte med en av våra kollegor. Skicka gärna in ett
                meddelande i formuläret så kontaktar vi dig.
                </Typography>
              </Box>
            )}
            <Box mt={marginTop}>
              <Button
                variant="contained"
                sx={buttonStyleContained}
                aria-label="Länk till sidan kontakta oss"
              >
                <Link
                  sx={buttonStyleContained}
                  to="/kontakt"
                  className="button-text"
                  aria-label="Länk till Kontakt"
                >
                  Kontakta oss
                </Link>
              </Button>
              <Button
                sx={buttonStyleOutline}
                aria-label="Telefon Nummer 08-333663"
                variant="outlined"
              >
                <Call sx={{ marginRight: "5px" }} />
                <a
                  href="tel:08333663"
                  className="button-text"
                  aria-label="Länk för att ringa telefon-nummer"
                >
                  08 - 33 36 63
                </a>
              </Button>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
      {/* Intro */}
      <Spacer />
      <section id="hem-intro">
        <AnimatedBox>
          <Intro
            image={image}
            title="Badrumsrenovering I Stockholm Med Omnejd Till En Fast
            tidsplan och med ett fast pris."
            body="Vi på BOB Våtrumsrenovering AB har en gedigen erfarenhet samt spetskompetens
            inom badrumsrenovering & köksrenovering. Vi är ett specialistföretag inom
            våtutrymmen som erbjuder våra kunder en helhetslösning när det kommer till allt
            inom badrum, wc & tvättstugor. Önskar du få hjälp med inredning, kakel och klinker
            har vi samarbeten med flera inredare. Denna tjänst är förstås helt kostnadsfri när du
            väljer att renovera med oss. Låt oss veta dina önskemål så hjälper vi dig att få ditt
            dröm badrum."
            alt="picture of the owners"
            pageLink={false}
            to="/kontakt"
            className="button-text"
            aria-label="Länk tillt kontakt"
            linkName="Kontakta Oss"
          />
        </AnimatedBox>
      </section>
      <Spacer />
      {/* Why Us */}
      <AnimatedBox>
        <BoxSelector />
      </AnimatedBox>
      <Spacer />
      {/* Previous Work Carousel */}
      <section id="tidigare-projekt">
        <AnimatedBox>
          <Box className="container">
            <Box className="row">
              <Box
                className="col-12"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Carousel
                  image1={carouselImage1}
                  image2={carouselImage2}
                  image3={carouselImage3}
                  image4={carouselImage4}
                  smallScreen={smallScreen}
                />
              </Box>
            </Box>
          </Box>
        </AnimatedBox>
      </section>
      <Spacer />
      {/* Frequently Asked Questions */}
      <AnimatedBox>
        <Box className="container">
          <Box className="row" display="flex" justifyContent="center">
            <Box className="col-12">
              <Typography
                variant="h2"
                component="h2"
                className="title-font"
                sx={{
                  position: "relative",
                  width: "max-content",
                  marginBottom: "20px",
                }}
              >
                FAQ
                <span
                  style={{
                    position: "absolute",
                    right: "-30px",
                    top: "-30px",
                    transform: "rotate(45deg)",
                  }}
                >
                  <img
                    src={faq}
                    alt="logo of faq orange"
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
              </Typography>
              <Faq
                backgroundQuestion={backgroundQuestion}
                smallScreen={smallScreen}
              />
            </Box>
          </Box>
        </Box>
      </AnimatedBox>
      <Spacer />
      {/* Contact Form */}
      <section id="kontakt">
        <AnimatedBox>
          <Box
            className="contact-background"
            minHeight={!smallScreen ? "640px" : undefined}
          >
            <Box className="container">
              <Box className="row">
                <Contact />
              </Box>
            </Box>
          </Box>
        </AnimatedBox>
      </section>
      <Spacer />
      <Reco />
      <Spacer />
    </Box>
  );
}

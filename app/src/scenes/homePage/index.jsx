import React, { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Call from "@mui/icons-material/Call";
// Componenets
import Spacer from "../../components/Spacer.jsx";
import Contact from "../../components/Contact.jsx";
import ButtonOrange from "../../components/ButtonOrange.jsx";
import ButtonWhite from "../../components/ButtonWhite.jsx";

// Widgets
import Faq from "./widgets/Faq.jsx";
import Carousel from "./widgets/Carousel.jsx";
import IntroSection from "./widgets/IntroSection.jsx";
import BoxSelector from "./widgets/BoxSelectorHome.jsx";
//Images
import landingBackground from "../../assets/landingbackground.webp";
import landingBackground2 from "../../assets/landingbackground2.webp";
import landingBackground3 from "../../assets/landingbackground3.webp";
import landingBackground4 from "../../assets/landingbackground4.webp";
import faq from "../../assets/faq.png";
import backgroundShape from "../../assets/logo-shape.png";
// Animation
import { AnimatePresence } from "framer-motion";
import AnimatedBox from "../../animation/Animated.jsx";

const images = [
  landingBackground,
  landingBackground2,
  landingBackground3,
  landingBackground4,
];

export default function HomePage() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  // Css style variables
  const backgroundQuestion = "#FBF9F9";
  const titleFontSize = "50px";
  const marginTop = "30px";

  const recoScore = [1, 2, 3, 4, 5];
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
            justifyContent: "center",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Box className="col-8">
              <Typography
                variant="h1"
                fontWeight="bold"
                className="hero_title"
                sx={{ fontSize: `clamp(25px, 5vw, ${titleFontSize})` }}
                color="#E6E6E6"
              >
                Välkommen till BOB Våtrumsrenovering. Vi är proffs på badrum!
              </Typography>
            </Box>
            <Box mt={marginTop}>
              <ButtonOrange
                buttonText="Kontakta oss idag"
                aria="Klicka här för att komma till kontakt"
                ariaAtag="Länk till kontakta oss sidan"
                href="kontakt"
              />
              <ButtonWhite
                icon={<Call sx={{ marginRight: "5px" }} />}
                atag="tel:08333663"
                aria="Klicka för att ringa Bob Våtrumsrenovering"
                ariaAtag="Länk till telefonnummer"
                buttonText="08 - 33 36 63"
              />
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
      {/* Intro text */}
      <Box position="relative">
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            zIndex: "115",
          }}
        >
          <img
            src={backgroundShape}
            alt="Form av loggan"
            style={{ width: "40vw", maxWidth: "300px" }}
          />
        </Box>
        <Box
          className={!lgScreen ? "container" : "container-fluid"}
          padding={!lgScreen ? "inherit " : "0"}
          position="relative"
          zIndex="100"
        >
          <Box
            sx={{
              position: "relative",
              top: !smallScreen ? "-170px" : "-80px",
              display: "flex",
              justifyContent: "flex-end",
              left: "-15px",
            }}
          >
            <a
              href="https://www.reco.se/bob-vatrumsrenovering-ab"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Box sx={recoBox} title="Reco">
                {recoScore.map((item) => (
                  <Box key={item} sx={{ margin: "0 5px" }}>
                    <svg
                      width={!smallScreen ? "26" : "15"}
                      height={!smallScreen ? "26" : "15"}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 13C26 14.7072 25.6637 16.3977 25.0104 17.9749C24.3571 19.5521 23.3996 20.9852 22.1924 22.1924C20.9852 23.3996 19.5521 24.3571 17.9749 25.0104C16.3977 25.6637 14.7072 26 13 26L13 13H26Z"
                        fill="#C3DA4A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.5485 17.7835C25.1128 16.4211 25.4311 14.9709 25.49 13.5H13.5L13.5 25.49C14.9709 25.4311 16.4211 25.1128 17.7835 24.5485C19.3001 23.9203 20.6781 22.9996 21.8388 21.8388C22.9996 20.6781 23.9203 19.3001 24.5485 17.7835ZM13.5 25.9904C13.3336 25.9968 13.1669 26 13 26L13 13H26C26 13.1669 25.9968 13.3336 25.9904 13.5C25.9312 15.0365 25.5999 16.5518 25.0104 17.9749C24.3571 19.5521 23.3996 20.9852 22.1924 22.1924C20.9852 23.3995 19.5521 24.3571 17.9749 25.0104C16.5518 25.5999 15.0365 25.9312 13.5 25.9904Z"
                        fill="white"
                      />
                      <path
                        d="M13 -9.53674e-07C14.7072 -1.0283e-06 16.3977 0.336255 17.9749 0.989566C19.5521 1.64288 20.9852 2.60045 22.1924 3.80761C23.3995 5.01477 24.3571 6.44788 25.0104 8.02511C25.6637 9.60235 26 11.2928 26 13L13 13L13 -9.53674e-07Z"
                        fill="#51A7D8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.7835 1.4515C16.4211 0.887177 14.9709 0.568883 13.5 0.510003L13.5 12.5L25.49 12.5C25.4311 11.0291 25.1128 9.57886 24.5485 8.21646C23.9203 6.69989 22.9996 5.3219 21.8388 4.16116C20.6781 3.00043 19.3001 2.07969 17.7835 1.4515ZM25.9904 12.5C25.9968 12.6664 26 12.8331 26 13L13 13L13 -9.53674e-07C13.1669 -9.60968e-07 13.3336 0.00321101 13.5 0.00961778C15.0365 0.068757 16.5518 0.400107 17.9749 0.989566C19.5521 1.64288 20.9852 2.60045 22.1924 3.80761C23.3995 5.01477 24.3571 6.44788 25.0104 8.02511C25.5999 9.44819 25.9312 10.9635 25.9904 12.5Z"
                        fill="white"
                      />
                      <path
                        d="M-9.53674e-07 13C-1.10292e-06 11.2928 0.336254 9.60235 0.989565 8.02512C1.64288 6.44788 2.60045 5.01477 3.80761 3.80761C5.01477 2.60045 6.44788 1.64288 8.02511 0.989567C9.60235 0.336256 11.2928 7.46234e-08 13 0L13 13L-9.53674e-07 13Z"
                        fill="#F9C63C"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.4515 8.21646C0.887177 9.57886 0.568883 11.0291 0.510003 12.5L12.5 12.5L12.5 0.510004C11.0291 0.568884 9.57886 0.887179 8.21646 1.45151C6.69989 2.07969 5.3219 3.00043 4.16116 4.16117C3.00043 5.3219 2.07969 6.69989 1.4515 8.21646ZM12.5 0.0096188C12.6664 0.003212 12.8331 1.45871e-08 13 0L13 13L-9.53674e-07 13C-9.68261e-07 12.8331 0.00321099 12.6664 0.00961776 12.5C0.0687569 10.9635 0.400107 9.44819 0.989565 8.02512C1.64288 6.44788 2.60045 5.01477 3.80761 3.80761C5.01477 2.60045 6.44788 1.64288 8.02511 0.989567C9.44819 0.400109 10.9635 0.0687582 12.5 0.0096188Z"
                        fill="white"
                      />
                      <path
                        d="M13 26C11.2928 26 9.60235 25.6637 8.02512 25.0104C6.44788 24.3571 5.01477 23.3996 3.80761 22.1924C2.60045 20.9852 1.64288 19.5521 0.989567 17.9749C0.336256 16.3977 -1.49247e-07 14.7072 0 13L13 13L13 26Z"
                        fill="#ED2281"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.21646 24.5485C9.57886 25.1128 11.0291 25.4311 12.5 25.49L12.5 13.5L0.510004 13.5C0.568884 14.9709 0.887178 16.4211 1.45151 17.7835C2.07969 19.3001 3.00043 20.6781 4.16116 21.8388C5.3219 22.9996 6.69989 23.9203 8.21646 24.5485ZM0.00961874 13.5C0.00321196 13.3336 -7.29354e-09 13.1669 0 13L13 13L13 26C12.8331 26 12.6664 25.9968 12.5 25.9904C10.9635 25.9312 9.44819 25.5999 8.02512 25.0104C6.44788 24.3571 5.01477 23.3996 3.80761 22.1924C2.60045 20.9852 1.64288 19.5521 0.989567 17.9749C0.400108 16.5518 0.0687579 15.0365 0.00961874 13.5Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                ))}
                <Typography
                  variant="body1"
                  sx={{ marginLeft: ".5rem" }}
                  className="subtitle-font"
                  color="#fff"
                  fontWeight="bold"
                >
                  {recoScore.length} / {recoScore.length}
                </Typography>
              </Box>
            </a>
          </Box>
          <Box
            className="row"
            sx={{
              padding: !smallScreen ? "1rem 2rem" : "2rem .8rem",
              backgroundColor: "#FFFAF5",
              zIndex: "10",
              position: "relative",
              top: !smallScreen ? "-150px" : "-40px",
            }}
          >
            <Box
              className="col-12 col-lg-6"
              style={{ padding: !smallScreen ? "1rem" : "0" }}
            >
              <Typography variant="body1" className="body-paragraph">
                Vill du anlita en hantverkare som specialiserat sig på exakt den
                typ av projekt som du vill utföra? Vi på BOB Våtrumsrenovering
                AB utför uteslutande renoveringar av badrum och tvättstugor,
                vilket har lett till att vi blivit extremt duktiga på det vi
                gör.
                <br />
                <br />
                Vi finns med dig genom ditt projekt, från start till mål och ser
                till att göra verklighet av din dröm. För oss är trygghet och
                tillgänglighet själva grundpelarna i det vi gör, och vi
                levererar alltid hantverk av högsta kvalitet. Låt oss hjälpa dig
                att skapa badrum du alltid drömt om. När våra kollegor i
                branschen är fullt upptagna med allt från fasadrenoveringar till
                anläggningar av trädgård och altaner, pysslar vi med
                våtrumsrenovering, från måndag till fredag och ser till att hela
                tiden fortsätta utvecklas inom vår profession.
              </Typography>
            </Box>
            <Box
              className="col-12 col-lg-6"
              style={{ padding: !smallScreen ? "1rem" : "0" }}
            >
              <Typography variant="body1" className="body-paragraph">
                Vi kan allt och lite till om allt som rör våtrumsrenoveringar.
                Vi kan hjälpa dig med materialval, planlösningar, och allt annat
                som rör ditt badrum eller din tvättstuga. För att vi ska kunna
                hjälpa dig på bästa sätt rekommenderar vi att boka in ett första
                möte med en av våra kollegor. Mötet är helt förutsättningslöst
                och ingenting vi tar betalt för. Skicka gärna ett meddelande i
                formuläret så kontaktar vi dig inom kort.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* First section */}
      <section id="hem-intro" style={{ zIndex: "1500", position: "relative" }}>
        <AnimatedBox>
          <Box className="container">
            <IntroSection />
          </Box>
        </AnimatedBox>
      </section>

      <Spacer minus={"32px"} />
      <Box className="container">
        <hr />
      </Box>
      <Spacer />

      {/* Why Us */}
      <section id="renovera-med-oss">
        <AnimatedBox>
          <Box className="container">
            <BoxSelector />
          </Box>
        </AnimatedBox>
        <Spacer />
      </section>

      {/* Contact Form */}
      <section id="kontakt">
        <AnimatedBox>
          <Contact />
        </AnimatedBox>
      </section>
      <Spacer />

      {/* Frequently Asked Questions */}
      <section id="vanliga-fragor">
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
                    padding: "2rem 0",
                    textAlign: "center",
                  }}
                >
                  Vanliga frågor & svar
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
      </section>
    </Box>
  );
}

const recoBox = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "1rem 1.5rem",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
};

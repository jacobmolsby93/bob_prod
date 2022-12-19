import React, { useState } from "react";
import { Box, Typography, Button, Grid, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Call } from "@mui/icons-material";
import { Link } from "react-router-dom"
// Componenets
import Navbar from "../../components/Navbar";
import SectionOne from "../homePage/widgets/SectionOne";
import Spacer from "../../components/Spacer";
import Carousel from "./widgets/Carousel";
import Contact from "../../components/Contact";
import Faq from "./widgets/Faq";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
//Images
import landingImage1 from "../../assets/badrums_bild3.jpg";
import landingImage2 from "../../assets/badrums_bild2.png";
import landingImage3 from "../../assets/IMG-0750.jpg";
import teamwork from "../../assets/support.png";
import sketch from "../../assets/sketch.png";
import quality from "../../assets/quality.png";
import podium from "../../assets/podium.png";
import faq from "../../assets/faq.png";
import shapes from "../../assets/background-shapes.png";

export default function HomePage(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Css style variables
  const secondaryBackground = "#ECEAE8";
  const titleFontSize = "54px";
  const backgroundQuestion = "#FBF9F9";
  const marginTop = "30px";
  const marginRight = "20px";

  // Map Grid Items
  const GridItem = ({ src, alt, text }) => {
    const [hover, setHover] = useState(false);

    return (
      <Grid item xs={5}>
        <Box
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ECEAE8",
            cursor: "default",
            boxShadow: hover ? "0px 0px 4px 4px rgba(194, 102, 45, 0.5)" : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "7.45px",
            padding: "20px",
          }}
        >
          <img src={src} width="70px" height="auto" alt={alt} />
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            {text}
          </Typography>
        </Box>
      </Grid>
    );
  };

  return (
    <Box component="div">
      {/* Landing Page */}
      <Box
        style={{
          backgroundImage: `url(${landingImage1})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          "@media (max-width: 576px)": {
            height: "auto",
          },
        }}
      >
        {/* Navbar component */}
        <Navbar />
        {/* Landing Page */}
        <Box className="container" paddingBottom="15%">
          <Typography
            variant="h1"
            fontWeight="bold"
            className="hero_title"
            fontSize={
              smallScreen ? `clamp(32px, 4vw, ${titleFontSize})` : titleFontSize
            }
            textTransform="uppercase"
            color="#E6E6E6"
          >
            Dröm Badrummet är bara ett ett steg bort!
          </Typography>
          <Typography
            className="hero_paragraph"
            maxWidth={smallScreen ? "100%" : "50%"}
            color="#E3E3E3"
            mt={marginTop}
          >
            Vi är den pålitliga och trygga badrumsrenoveraren som du nästan inte
            trodde fanns. Men vi finns här för dig, och vi står vid din sida
            hela vägen från idé till verklighet. För oss är trygghet och
            tillgänglighet själva grundvalarna i det vi gör, och vi levererar
            alltid hantverk av högsta kvalitet. Låt oss hjälpa dig att skapa det
            drömbadrum du alltid har önskat dig.
          </Typography>
          <Box mt={marginTop}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary[500],
                marginRight: marginRight,
                color: theme.palette.background.default,
                "&:hover": {
                  backgroundColor: theme.palette.primary[300],
                },
              }}
            >
              <Link to="/referenser" style={{ textDecoration: "none", color: "white"}}>Tidigare Object</Link>
            </Button>
            <Button variant="outlined">
              <Call sx={{ marginRight: "5px" }} />
              08 - 400 263 00
            </Button>
          </Box>
        </Box>
      </Box>
      <Spacer />
      {/* Intro */}
      <Box className="container">
        <SectionOne />
      </Box>
      <Spacer />
      {/* Why Us */}
      <Box
        className="row"
        backgroundColor="rgba(233, 229, 225, 0.55)"
        paddingTop="40px"
        paddingBottom="40px"
        minHeight="80vh"
        position="relative"
      >
        <Box
          className="container col-12 col-md-10"
          justifyContent="center"
          alignItems="center"
          display="flex"
          zIndex="100"
        >
          <Box class="col-12 col-md-5">
            <Typography
              variant="h5"
              fontWeight="bold"
              color={theme.palette.primary[500]}
            >
              Vad Vi Står För
            </Typography>
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{ fontSize: `clamp(32px, 4vw, ${titleFontSize})` }}
            >
              Varför Renovera Med Oss?
            </Typography>
            <Box class={marginTop}>
              <span
                style={{
                  width: "18px",
                  height: "auto",
                  marginRight: "10px",
                  backgroundColor: theme.palette.primary[500],
                }}
              ></span>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem apriam eaque ipsa
                quae ab illo inventore
              </p>
            </Box>
            <Box class={marginTop}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary[500],
                  marginRight: marginRight,
                  color: theme.palette.background.default,
                  "&:hover": {
                    backgroundColor: theme.palette.primary[300],
                  },
                }}
              >
                Tidigare Object
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: theme.palette.grey[900],
                  border: `1px solid ${theme.palette.grey[900]}`,
                  "&:hover": { border: `1px solid ${theme.palette.grey[500]}` },
                }}
              >
                Läs Mer
              </Button>
            </Box>
          </Box>
          <Box className="col-12 col-md-5">
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              diplay="flex"
              justifyContent="center"
            >
              <GridItem src={sketch} sx={{ backgroundColor: "#ECEAE8", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"}} alt="Logo Sketch Paper" text="Planering" />
              <GridItem src={quality} alt="Logo Quality" text="Kvalité" />
              <GridItem src={teamwork} alt="Logo hands shake" text="Teamwork" />
              <GridItem src={podium} alt="Logo podium" text="Kund fokus" />
            </Grid>
          </Box>
        </Box>
        <Box sx={{ zIndex: "0", position: "absolute", top: "0", bottom: "0", left: "0", right: "0", height: "100%", width: "100%", backgroundImage: `url(${shapes})`, backgroundPosition: "right", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></Box>
      </Box>
      <Spacer />
      {/* Previous Work Carousel */}
      <Box className="container">
        <Box className="row">
          <Box className="col-12" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
            <Carousel
              image1={landingImage1}
              image2={landingImage2}
              image3={landingImage3}
              smallScreen={smallScreen}
            />
          </Box>
        </Box>
      </Box>
      <Spacer />
      {/* Contact Form */}
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        backgroundColor={secondaryBackground}
        minHeight={!smallScreen ? "640px" : undefined}
      >
        <Box className="container">
          <Contact />
        </Box>
      </Box>
      <Spacer />
      {/* Frequently Asked Questions */}
      <Box className="container">
        <Box className="row" display="flex" justifyContent="center">
          <Box className="col-12 col-lg-10">
            <Typography
              variant="h1"
              sx={{
                fontSize: `clamp(32px, 4vw, ${titleFontSize})`,
                position: "relative",
                width: "max-content",
              }}
              fontWeight="bold"
            >
              FAQ{" "}
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
      <Spacer />
      {/* Team */}
      <Box className="container">
        <Box className="row">
          <Team />
        </Box>
      </Box>
      <Spacer />
      {/* Footer */}
      <Footer />
    </Box>
  );
}

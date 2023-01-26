import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import AnimatedLazyImage from "../../../components/LazyImage";

// Images & Logos
import teamwork from "../../../assets/support.png";
import sketch from "../../../assets/sketch.png";
import quality from "../../../assets/quality.png";
import podium from "../../../assets/podium.png";
import shapes from "../../../assets/backgroundshapes.png";

export default function WhyUs() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const marginTop = "30px";
  const marginRight = "20px";
  // Map Grid Items
  const GridItem = ({ src, alt, text }) => {
    const [hover, setHover] = useState(false);

    return (
      <Grid item lg={5}>
        <Box
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          sx={{
            width: "100%",
            minWidth: "168px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#ECEAE8",
            padding: smallScreen ? "10px" : "20px",
            transition: "300ms",
          }}
        >
          <AnimatedLazyImage
            src={src}
            style={{ width: "70px", height: "70px", margin: "20px" }}
            alt={alt}
          />
          <Typography variant="h3" fontWeight="bold" textAlign="center">
            {text}
          </Typography>
        </Box>
      </Grid>
    );
  };
  return (
    <Box className="wrapper why-us-wrapper" minHeight="70vh">
      <Box
        className="container"
        minHeight="100%"
        display="flex"
        alignItems="center"
        sx={{ margin: mediumScreen ? "30px 0 30px 0" : "0" }}
      >
        <Box className="row flex-centerd-align" height="100%">
          <Box className="col-12 col-lg-6" sx={{ zIndex: "10 " }}>
            <Typography variant="h2" className="subtitle-font primary">
              Vad Vi Står För.
            </Typography>
            <Typography variant="h3" className="title-font">
              Varför Renovera Med Oss?
            </Typography>
            <Box sx={{ marginTop: marginTop }}>
              <span
                style={{
                  width: ".2rem",
                  maxWidth: ".2rem", 
                  height: "auto",
                  marginRight: "10px",
                  backgroundColor: theme.palette.primary[500],
                }}
              ></span>
              <Box>
                <p className="body-paragraph">
                  Vi på BOB Badrum har en gedigen erfarenhet samt spetskompetens
                  inom badrumsrenovering, wc-renoveringar och tvättstugor. Vi är
                  en badrumsrenoveringsfirma som erbjuder våra kunder en
                  helhetslösning när det kommer till allt inom
                  badrumsrenoveringar. Vi har massa lyckade uppdrag runt om i
                  Stockholm. Vi fokuserar endast på badrumsrenoveringar, wc &
                  tvättstugor vilket gör att vi kan erbjuda högsta kvalitet i
                  alla led.
                </p>
              </Box>
            </Box>
            <Box sx={{ marginTop: marginTop }}>
              <Button
                aria-label="Gratis offert"
                variant="contained"
                sx={{
                  marginTop: smallScreen ? "10px" : "",
                  borderRadius: "0",
                  backgroundColor: theme.palette.primary[500],
                  marginRight: marginRight,
                  "&>a": {
                    color: theme.palette.background.default,
                    textDecoration: "none",
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary[600],
                  },
                }}
              >
                <Link to="/kontakt" className="button-text">
                  Gratis Offert
                </Link>
              </Button>
            </Box>
          </Box>
          <Box
            className="col-12 col-lg-6 flex-centerd-align"
            sx={{
              zIndex: "10",
              flexWrap: "wrap",
              marginTop: mediumScreen ? "20px" : "",
            }}
          >
            <Grid container spacing={2} diplay="flex" justifyContent="center">
              <GridItem
                src={sketch}
                sx={{
                  backgroundColor: "#ECEAE8",
                }}
                alt="Logo Sketch Paper"
                text="Planering"
              />
              <GridItem src={quality} alt="Logo Quality" text="Kvalité" />
              <GridItem src={teamwork} alt="Logo hands shake" text="Teamwork" />
              <GridItem src={podium} alt="Logo podium" text="Kund fokus" />
            </Grid>
          </Box>
        </Box>
        <Box
          className="absolute-box-why"
          sx={{
            backgroundPosition: mediumScreen ? "top" : "right",
            backgroundImage: `url(${shapes})`,
            zIndex: "-1",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

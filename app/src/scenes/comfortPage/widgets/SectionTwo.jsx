import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import placeImage from "../../../assets/landingbackground3.webp";
import AnimatedLazyImage from "../../../components/LazyImage";

export default function SectionTwo() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
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
    border: `.1rem solid ${theme.palette.grey[900]}`,
    "&>a": {
      textDecoration: "none",
      color: theme.palette.grey[900],
    },
    "&:hover": {
      border: `.1rem solid ${theme.palette.grey[500]}`,
    },
  };

  return (
    <Box className="container">
      <Box
        display="flex"
        justifyContent={!smallScreen ? "center" : "space-between"}
        alignItems="center"
        className="row"
      >
        <Box
          className="col-12 col-lg-6"
          padding={!lgScreen ? "0 20px 0 0" : "0"}
        >
          <AnimatedLazyImage
            className="img-fluid"
            src={placeImage}
            alt="Placeholder image"
            style={{
              objectFit: "cover",
              height: smallScreen ? "400px" : "100%",
            }}
          />
        </Box>
        <Box
          padding={lgScreen ? "2rem 0 0 0" : "0 0 0 2rem"}
          className="col-12 col-lg-6"
        >
          <article>
            <Typography variant="h2" className="title-font">
              Trygg Renovering
            </Typography>
            <Box display="flex" mt="3rem">
              <span
                style={{
                  width: "1rem",
                  height: "auto",
                  marginRight: "1rem",
                  backgroundColor: "#c2662d",
                }}
              ></span>
              <p className="body-paragraph">
                Och självklart har vi alla behörigheter som krävs för att få
                arbeta med tätskikt, el- samt rörarbeten och vi följer alla
                branschregler för att säkerställa kvaliteten i varje enskilt
                projekt.
                <br />
                <br />
                Vårt motto är att du ska känna dig trygg i varje steg av ditt
                byggprojekt, oavsett om det handlar om tidplan, kvalitet,
                branschregler eller pengar. Vi går helt enkelt ”all in” och ger
                dig det där lilla extra som våra konkurrenter ofta talar om men
                sällan levererar.
                <br />
                <br />
                Låter det kaxigt? Bra, för vi tror på det vi gör. Och framför
                allt tror vi på din vilja att välja trygghet i ett byggprojekt.
                Läs mer om våra tjänster.
              </p>
            </Box>
            <Box mt="2.5rem">
              <Button
                variant="contained"
                sx={buttonStyleContained}
                aria-label="Länk till sidan kontakta oss"
              >
                <Link
                  sx={buttonStyleContained}
                  to="/vanliga-fragor"
                  className="button-text"
                  aria-label="Label"
                >
                  Vanliga Frågor
                </Link>
              </Button>
              <Button
                aria-label="Länk till sidan om oss"
                className="body-paragraph"
                variant="outlined"
                sx={buttonStyleOutline}
              >
                <Link
                  to="/kontakt"
                  className="button-text"
                  aria-label="länk företag"
                >
                  Vill du bli uppringd?
                </Link>
              </Button>
            </Box>
          </article>
        </Box>
      </Box>
    </Box>
  );
}

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
import mobileImage from "../../../assets/aboutimage1.webp";
import desktopCollageImage from "../../../assets/servicesintro.webp"

const Intro = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Box className="row" sx={{ justifyContent: !lgScreen ? "" : "center" }}>
      {!lgScreen ? (
        <Box className="col-12 col-lg-6" display="flex" padding="0 3rem 0 0">
          <Box >
          <img src={desktopCollageImage} className="img-fluid" style={{ height: "100%" }} alt="Collage av 3 bilder på badrum" />
          </Box>
        </Box>
      ) : (
        <Box
          className="col-12"
          sx={{ maxHeight: "500px", marginBottom: "2rem" }}
        >
          <img
            src={mobileImage}
            style={{ objectFit: "cover" }}
            className="img-fluid w-100 h-100"
          />
        </Box>
      )}
      <Box className="col-12 col-xl-6">
        <article>
          <Typography variant="h1" className="title-font">
            Vi Renoverar Ditt Badrum Med Engagemang Och Respekt För Dig Och Ditt
            Hem!
          </Typography>
          <Box display="flex" mt="2.5rem">
            <span
              style={{
                width: "18px",
                height: "auto",
                marginRight: "10px",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p className="body-paragraph">
              Att renovera badrum är både en passion och en av våra
              specialiteter och vi har mer än tio års erfarenhet av renovering
              och ombyggnation i Stockholm med omnejd. Om du väljer oss så får
              du ett fast pris, en tydlig och fastställd tidplan som respekteras
              samt en engagerad projektledare.
              <br />
              <br />
              För att göra projektet så enkelt och smidigt som möjligt, så kan
              du också köpa kakel, klinker och inredning via oss – till
              förmånliga priser. Och vi tar självklart med oss allt du har köpt
              hem till dig när det är dags att montera det. Skicka in en
              offertförfrågan så kontaktar en av våra kundansvariga er. Vi bokar
              då in ett kostnadsfritt och förutsättningslöst hembesök inom
              Stockholmsområdet för att kolla på er badrumsrenovering.
              Möjligheten om att begära en offert från oss utan hembesök går
              självklart också bra.
            </p>
          </Box>
        </article>
        <Box mt="2.5rem">
          <Button
            aria-label="Klicka för att komma till kontakta oss sidan"
            variant="contained"
            sx={{
              marginTop: smallScreen ? "0.5rem" : "",
              borderRadius: "0",
              backgroundColor: theme.palette.primary[500],
              marginRight: "20px",
              "&>a": {
                color: theme.palette.background.default,
                textDecoration: "none",
              },
              "&:hover": {
                backgroundColor: theme.palette.primary[600],
              },
            }}
          >
            <Link to="/kontakt" className="button-text" aria-label="Länk till kontakta oss">
              Kontakta Oss
            </Link>
          </Button>
          <Button
            aria-label="Läs Mer om företaget"
            className="body-paragraph"
            variant="outlined"
            sx={{
              marginTop: smallScreen ? ".5rem" : "",
              borderRadius: "0",
              border: `1px solid ${theme.palette.grey[900]}`,
              "&>a": {
                textDecoration: "none",
                color: theme.palette.grey[900],
              },
              "&:hover": {
                border: `1px solid ${theme.palette.grey[500]}`,
              },
            }}
          >
            <Link to="/om-oss" className="button-text" aria-label="Länk till om oss">
              Om Företaget
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

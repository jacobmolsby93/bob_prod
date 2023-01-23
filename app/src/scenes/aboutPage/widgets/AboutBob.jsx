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
import desktopCollageImage from "../../../assets/servicesintro.webp";

const Intro = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Box className="row" sx={{ justifyContent: !lgScreen ? "" : "center" }}>
      {!lgScreen ? (
        <Box className="col-12 col-lg-6" display="flex" padding="0 3rem 0 0">
          <Box>
            <img
              src={desktopCollageImage}
              className="img-fluid h-100"
              style={{ minHeight: "100%" }}
              alt="Collage av 3 bilder på badrum"
            />
          </Box>
        </Box>
      ) : (
        <Box
          className="col-12"
          sx={{ marginBottom: "2rem" }}
        >
          <img
            src={mobileImage}
            style={{ objectFit: "cover", maxHeight: "300px", width: "100%" }}
            className="img-fluid"
          />
        </Box>
      )}
      <Box className="col-12 col-xl-6" display="flex" justifyContent="center" flexDirection="column">
        <Box>
          <article>
            <Typography variant="h2" className="title-font">
              Om Bob Badrum
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
                Vi är en badrumsfirma i Stockholm som enbart renoverar
                våtutrymmen. Det gör oss väldigt kvalitetssäkra inom området.
                Skillnaden mellan oss och många andra är att vi bara sysslar med
                våtrum. Vi har varit verksamma sedan 2014. Vårt mål med varje
                renovering är att ge kunden en riktigt bra upplevelse och en
                renovering utan krångel. 
              </p>
            </Box>
          </article>
        </Box>

        <Box mt="2.5rem">
          <Button
            aria-label="Klicka för att komma till kontakta oss"
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
            <Link
              to="/kontakt"
              className="button-text"
              aria-label="Länk till kontakta oss"
            >
              Kontakta Oss
            </Link>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

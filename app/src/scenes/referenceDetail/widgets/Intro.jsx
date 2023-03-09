import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import AnimatedLazyImage from "../../../components/LazyImage";

const Intro = ({ thisRenovation }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Box className="row" sx={{ justifyContent: !lgScreen ? "" : "center" }}>
      <Box
        className="col-12 col-lg-6"
        display="flex"
        padding={!smallScreen ? "0 3rem 0 0" : "0"}
      >
        <Box sx={{ height: "100%", width: "100%" }}>
          <AnimatedLazyImage
            src={thisRenovation.img_url}
            className="img-fluid"
            style={{
              minHeight: "100%",
              maxHeight: "600px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="Collage av 3 bilder på badrum"
          />
        </Box>
      </Box>
      <Box className="col-12 col-xl-6" display="flex" alignItems="center">
        <article>
          <Typography variant="h2" className="title-font">
            {thisRenovation.title}
          </Typography>
          <Box display="flex" mt="2.5rem">
            <span
              style={{
                width: "1rem",
                maxWidth: ".2rem",
                minWidth: ".2rem",
                height: "auto",
                marginRight: "10px",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p className="body-paragraph">{thisRenovation.paragraph}</p>
          </Box>
          <Box mt="2.5rem" display="flex" justifyContent="flex-end">
            <Button
              aria-label="Klicka för att komma till kontakta oss sidan"
              variant="contained"
              sx={{
                marginTop: smallScreen ? "0.5rem" : "",
                borderRadius: "0",
                backgroundColor: theme.palette.primary[500],
                marginRight: "20px",
                padding: 0,
                "&>a": {
                  padding: "6px 16px",
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
        </article>
      </Box>
      <Box
        className="row mt-5"
        display={thisRenovation.subtitle ? "flex" : "none"}
      >
        <Typography variant="h3" className="subtitle-font mb-3">
          {thisRenovation.subtitle}
        </Typography>
        <Box className="col-12" display="flex" justifyContent="center">
          <span
            style={{
              width: "1rem",
              maxWidht: ".2rem",
              height: "auto",
              marginRight: "1rem",
              backgroundColor: "#c2662d",
            }}
          ></span>
          <p className="body-paragraph">{thisRenovation.paragraph2}</p>
        </Box>

        {thisRenovation.paragraph3 && (
          <>
            <Typography variant="h3" className="subtitle-font mb-3">
              {thisRenovation.subtitle}
            </Typography>
            <Box className="col-12" display="flex" justifyContent="center">
              <span
                style={{
                  width: "1rem",
                  maxWidht: ".2rem",
                  height: "auto",
                  marginRight: "1rem",
                  backgroundColor: "#c2662d",
                }}
              ></span>
              <p className="body-paragraph">{thisRenovation.paragraph2}</p>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Intro;

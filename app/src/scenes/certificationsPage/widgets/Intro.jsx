import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
// Framer Motion

// Images
import image from "../../../assets/carouselhome1.webp";
import AnimatedLazyImage from "../../../components/LazyImage";

export default function Intro() {
  const theme = useTheme();
  return (
    <Box className="container">
      <Box className="container-fluid">
        <Box
          display="flex"
          justifyContent="center"
          className="row"
          alignItems="center"
        >
          <Box className="col-12 col-md-6">
            <AnimatedLazyImage
              src={image}
              alt="picture of the 2 owners"
              width="100%"
              height="auto"
            />
          </Box>
          <Box marginLeft="20px" className="col-12 col-md-5">
            <article>
              <Typography
                variant="h2"
                fontWeight="bold"
                fontSize="clamp(32px, 4vw, 55px)"
              >
                Badrumsrenovering med fast pris och fastställd tidplan"
              </Typography>
              <Box display="flex" mt="30px">
                <span
                  style={{
                    width: "18px",
                    height: "auto",
                    marginRight: "10px",
                    backgroundColor: theme.palette.primary[500],
                  }}
                ></span>
                <p className="body-paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptat
                  em accusantium doloremque laudantium, totam rem apriam eaque
                  ipsa quae ab illo inventore veritatis et quas accusantium
                  doloremque laudantium, totam rem aperiam eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto
                </p>
              </Box>
            </article>
            <Box mt="30px">
              <Button
                aria-label="Klicka för att komma till kontka oss"
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.primary[500],
                  marginRight: "20px",
                  "&>a": {
                    color: theme.palette.background.default,
                    textDecoration: "none",
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary[300],
                  },
                }}
              >
                <Link
                  to="/kontakt"
                  className="body-paragraph"
                  aria-label="Länk till kontakta oss"
                >
                  Kontakta Oss
                </Link>
              </Button>
              <Button
                aria-label="Klicka för att läsa mer om företaget"
                className="body-paragraph"
                variant="outlined"
                sx={{
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
                <Link to="/om-oss" aria-label="Länk till om oss">
                  Läs Mer
                </Link>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

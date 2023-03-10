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
// Images
const placeImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/landingbackground3.webp";

export default function SectionTwo() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
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
                  maxWidth: ".2rem",
                  height: "auto",
                  marginRight: "1rem",
                  backgroundColor: "#c2662d",
                }}
              ></span>
              <p className="body-paragraph">
                Och sj??lvklart har vi alla beh??righeter som kr??vs f??r att f??
                arbeta med t??tskikt, el- samt r??rarbeten och vi f??ljer alla
                branschregler f??r att s??kerst??lla kvaliteten i varje enskilt
                projekt.
                <br />
                <br />
                V??rt motto ??r att du ska k??nna dig trygg i varje steg av ditt
                byggprojekt, oavsett om det handlar om tidplan, kvalitet,
                branschregler eller pengar. Vi g??r helt enkelt ???all in??? och ger
                dig det d??r lilla extra som v??ra konkurrenter ofta talar om men
                s??llan levererar.
                <br />
                <br />
                L??ter det kaxigt? Bra, f??r vi tror p?? det vi g??r. Och framf??r
                allt tror vi p?? din vilja att v??lja trygghet i ett byggprojekt.
                L??s mer om v??ra tj??nster.
              </p>
            </Box>
            <Box mt="2.5rem">
              <Button
                variant="contained"
                sx={buttonStyleContained}
                aria-label="L??nk till sidan kontakta oss"
              >
                <Link
                  sx={buttonStyleContained}
                  to="/vanliga-fragor"
                  className="button-text"
                  aria-label="Label"
                >
                  Vanliga Fr??gor
                </Link>
              </Button>
              <Button
                aria-label="L??nk till sidan om oss"
                className="body-paragraph"
                variant="outlined"
                sx={buttonStyleOutline}
              >
                <Link
                  to="/kontakt"
                  className="button-text"
                  aria-label="l??nk f??retag"
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

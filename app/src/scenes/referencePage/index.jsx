import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  useTheme,
} from "@mui/material";

import Spacer from "../../components/Spacer.jsx";

// Widgets
import ServiceBox from "./widgets/ServiceBox.jsx";

// images
import landingImage from "../../assets/aboutimage1.webp";
import AnimatedBox from "../../animation/Animated.jsx";
import Credits from "../../components/Credits.jsx";

export default function References() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";
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
    <Box>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${landingImage})`,
          }}
        ></Box>
        {/* Hero Section */}
        <Box
          className="container"
          sx={{
            width: "100%",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: "5%",
            zIndex: "20",
          }}
        >
          <AnimatedBox>
            <Typography
              variant="h1"
              fontWeight="bold"
              className="hero_title"
              fontSize={
                smallScreen
                  ? `clamp(32px, 4vw, ${titleFontSize})`
                  : titleFontSize
              }
              textTransform="uppercase"
              color="#E6E6E6"
            >
              Våra Tjänster
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <ServiceBox />

      <Spacer />

      <Box display="flex" justifyContent="center">
        <Button
          variant="outlined"
          sx={buttonStyleOutline}
          aria-label="Klicka för att komma till sidan kontakta oss"
        >
          <Link aria-label="Länk till kontakta oss" to="/kontakt">
            <strong className="body-paragraph">Kontakta Oss För Offert</strong>
          </Link>
        </Button>
      </Box>

      <Spacer />

      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}

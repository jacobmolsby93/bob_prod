import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import galleryData from "../../data/galleryData";
import Spacer from "../../components/Spacer.jsx";
import Credits from "../../components/Credits.jsx";

// Widgets
import Intro from "./widgets/Intro.jsx";

// Images
import heroImage from "../../assets/landingbackground2.webp";

// Animations
import AnimatedBox from "../../animation/Animated.jsx";
import DetailCarousel from "./widgets/DetailCarousel";

export default function Detail() {
  const { titleUrl } = useParams();
  const thisBathroom = galleryData.find((item) => item.item_url === titleUrl);
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";

  return (
    <Box>
      <Box className="landing-box">
        <Box className="landing-box-home__overlay" zIndex="10"></Box>
        <Box
          className="landing-box-home__image"
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "center top",
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
              {thisBathroom.category}
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      <AnimatedBox>
        <section id={`detail${thisBathroom.index}`}>
          <Box className="container">
            <Intro thisBathroom={thisBathroom} />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <AnimatedBox>
        <section id="detail-carousel">
          <Box className="container">
            <DetailCarousel thisBathroom={thisBathroom} />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <section className="credits-bg">
        <Credits dark={true} />
      </section>
    </Box>
  );
}

import {useState } from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import galleryData from "../../data/galleryDataBathroom";
import galleryDataKitchen from "../../data/galleryDataKitchen";
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
  const { typeUrl } = useParams();
  let thisRenovation = ""

  

  if (typeUrl.includes("badrumsrenovering")) {
    const foundItem = galleryData.find(
      (item) => `${item.type}-${item.item_url}` === typeUrl
    );
    thisRenovation = foundItem
  } else if (typeUrl.includes("koksrenovering")) {
    const foundItem = galleryDataKitchen.find(
      (item) => `${item.type}-${item.item_url}` === typeUrl
    );
    thisRenovation = foundItem
  }


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
            backgroundImage: `url(${thisRenovation.img_url})`,
            backgroundPosition: "center bottom",
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
              {thisRenovation.category}
            </Typography>
          </AnimatedBox>
        </Box>
      </Box>
      <Spacer />

      <AnimatedBox>
        <section id={`detail${thisRenovation.index}`}>
          <Box className="container">
            <Intro thisRenovation={thisRenovation} />
          </Box>
        </section>
      </AnimatedBox>
      <Spacer />

      <AnimatedBox>
        <section id="detail-carousel">
          <Box className="container">
            <DetailCarousel thisRenovation={thisRenovation} />
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

import React from "react";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

export default function LandingBox({image, title}) {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const titleFontSize = "54px";

  return (
    <Box className="landing-box">
      <Box className="landing-box-home__overlay" zIndex="10"></Box>
      <Box
        className="landing-box-home__image"
        sx={{
          backgroundImage: `url(${image})`,
        }}
      ></Box>
      {/* Hero Section */}
      <Box
        className="container"
        component={motion.div}
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
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 30 }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            className="hero_title"
            fontSize={
              smallScreen ? `clamp(32px, 4vw, ${titleFontSize})` : titleFontSize
            }
            textTransform="uppercase"
            color="#E6E6E6"
          >
            {title}
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}

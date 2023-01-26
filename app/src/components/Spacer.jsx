import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function Spacer() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return <Box height={smallScreen ? "50px" : "100px"}></Box>;
}

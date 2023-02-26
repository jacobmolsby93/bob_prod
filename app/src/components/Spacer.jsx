import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

export default function Spacer({ minus }) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box
      height={smallScreen ? "50px" : minus ? `calc(100px - ${minus})` : "100px"}
    ></Box>
  );
}

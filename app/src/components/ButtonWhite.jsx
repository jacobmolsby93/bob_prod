import React from "react";
import { Button, useTheme, useMediaQuery } from "@mui/material";

export const ButtonWhite = ({ buttonText, icon, aria, ariaAtag, href }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const buttonStyleWhite = {
    marginTop: smallScreen ? "1rem" : "",
    backgroundColor: "#fff",
    borderRadius: ".5rem",
    padding: "1rem",
    border: `1px solid ${theme.palette.grey[0]}`,
    minHeight: "62px",
    color: "#242424",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.9",
    },
  };
  return (
    <a href={href} aria-label={ariaAtag} style={{ textDecoration: "none" }}>
      <Button
        sx={buttonStyleWhite}
        aria-label={aria}
        variant="outlined"
        className="button-text"
      >
        {icon}
        {buttonText}
      </Button>
    </a>
  );
};

export default ButtonWhite;

import React from "react";
import { Button, useTheme, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export const ButtonOrange = ({ href, ariaAtag, buttonText, aria }) => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const buttonStyleOrange = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: ".5rem",
    padding: "1rem",
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    minHeight: "62px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };
  return (
    <Link
      to={`/${href}`}
      aria-label={ariaAtag}
      style={{ textDecoration: "none" }}
    >
      <Button
        variant="contained"
        className="button-text"
        sx={buttonStyleOrange}
        aria-label={aria}
      >
        {buttonText}
      </Button>
    </Link>
  );
};

export default ButtonOrange;

import { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

// Images
const logo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/boblogo.png";

export default function NotFound() {
  const theme = useTheme();
  const [errorCode, setErrorCode] = useState(null);
  const buttonStyleContained = {
    borderRadius: "0",
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&,a": {
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  useEffect(() => {
    const currentError = window.location.pathname;
    setErrorCode(currentError);
  }, []);
  return (
    <Box sx={fixedScreen} backgroundColor={theme.palette.background.default}>
      <Box className="error-box">
        <h1>
          <span className="title-font">
            <strong>404</strong>
          </span>
          {errorCode}
          <br />
          Hittades inte
        </h1>
        <Box>
          <p className="body-paragraph">
            Ibland blir de lite fel, vi beklagar.
            <br />
            Klicka gärna på länken nedan för att komma tillbaka till hemsidan!
            <br />
            Eller kontakta oss på{" "}
            <a href="mailto:hej@bobbadrum.se">hej@bobbadrum.se</a>
          </p>
        </Box>

        <Link to="/" className="button-text" aria-label="Länk hem">
          <Button
            variant="contained"
            sx={buttonStyleContained}
            aria-label="Klicka för att komma till hem"
          >
            <p className="button-text">Hem</p>
          </Button>
        </Link>

        <img
          className="logo-error-box"
          width="50px"
          height="50px"
          src={logo}
          alt="Logga av företaget, BOB VÅTRUMSRENOVERING"
        />
      </Box>
    </Box>
  );
}

const fixedScreen = {
  position: "fixed",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  height: "100vh",
  zIndex: "1000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

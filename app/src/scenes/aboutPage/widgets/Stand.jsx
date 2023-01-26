import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import Call from "@mui/icons-material/Call";

// Images
import aboutImage from "../../../assets/aboutimage1.webp";

// Data
import data from "../../../data/Info.json";

const Stand = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const marginRight = "20px";
  const marginTop = "2rem";

  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    backgroundColor: theme.palette.primary[500],
    marginRight: marginRight,
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const buttonStyleOutlined = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: `1px solid #1d1d1d`,
    "&>a": {
      textDecoration: "none",
      color: "#1d1d1d",
    },
    "&:hover": {
      border: `1px solid `,
    },
  };

  return (
    <Box className="row" display="flex" alignItems="center">
      <Box
        className="col-12 col-lg-6 col-content-stand"
        sx={{ margin: "50px 0" }}
      >
        <Box className="heading-bg heading-right" padding="0 0 2rem 0">
          <Typography
            className="mb-0 subtitle-font primary"
            variant="body1"
            component="p"
          >
            Vi är BOB Badrum
          </Typography>
          <Typography variant="h2" component="h2" className="title-font">
            Vi Innoverar Badrum.
          </Typography>
        </Box>
        <Box className="row">
          <Box className="col-xs-12 col-sm-12 col-md-6 feature-1">
            <Typography
              className="text-uppercase subtitle-font"
              variant="h3"
              component="h3"
            >
              Pålitliga
            </Typography>
            <Typography variant="body1">
              Vi strävar efter att vara ett pålitligt val för kunderna, med en
              lång historia av att leverera projekten i tid och inom
              budgetramarna, och med en dedikerad och kompetent personal.
            </Typography>
          </Box>
          <Box className="col-xs-12 col-sm-12 col-md-6 feature-1">
            <Typography
              className="text-uppercase subtitle-font"
              variant="h2"
              component="h2"
            >
              Behöriga Hantverkare
            </Typography>
            <Typography variant="body1">
              Vårt team av specialister är kompetenta och kapabla att maximera
              resultaten och leverera projekten med högsta kvalitet.
            </Typography>
          </Box>
          <Box className="col-xs-12 col-sm-12 col-md-6 feature-1 mb-0">
            <Typography
              className="text-uppercase subtitle-font"
              variant="h2"
              component="h2"
            >
              Genomskilniga Priser
            </Typography>
            <Typography variant="body1">
              Med BOB Badrum kan du vara säker på att projektet kommer att
              levereras precis i tid och inom budgetramarna, utan oväntade
              kostnader eller förseningar.
            </Typography>
          </Box>
          <Box className="col-xs-12 col-sm-12 col-md-6 feature-1 mb-0">
            <Typography
              className="text-uppercase subtitle-font"
              variant="h2"
              component="h2"
            >
              Tiden är viktig för oss
            </Typography>
            <Typography variant="body1">
              Att renoveringen blir klar på avtalad tid är extremt viktigt för
              oss. För att ni som kund skall kunna planera er vardag utifrån
              renoveringen.
            </Typography>
          </Box>

          <Box mt={marginTop}>
            <Button
              aria-label="Klicka för att komma till kontakt sidan"
              variant="contained"
              sx={buttonStyleContained}
            >
              <Link
                aria-label="Länk till kontakta oss"
                className="button-text"
                to="/kontakt"
                style={{ textDecoration: "none", color: "white" }}
              >
                Skriv Till Oss
              </Link>
            </Button>
            <Button
              aria-label="Klicka för att ringa till företaget"
              sx={buttonStyleOutlined}
              name={`Telefon Nummer ${data.telefon}`}
              variant="outlined"
            >
              <Call className="call-icon-dark" />
              <a
                href={`tel:${data.telefon}`}
                className="button-text"
                aria-label="Länk för att ringa företaget direkts"
              >
                {data.telefon}
              </a>
            </Button>
          </Box>
        </Box>
      </Box>
      {!smallScreen && (
        <Box
          className="col-12 col-lg-6 col-img"
          height={mdScreen ? null : "600px"}
        >
          <Box
            style={{
              backgroundImage: `url(${aboutImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
              maxHeight: mdScreen ? "200px" : "",
            }}
          ></Box>
        </Box>
      )}
    </Box>
  );
};

export default Stand;

import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
// icons
import FacebookIcon from "../assets/facebookwhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";

// Images (will need to be urls find suitable place to upload them)
import logo from "../assets/boblogo.png";

export default function Footer() {
  const theme = useTheme();
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const logoFooter = {
    width: "90px",
    height: "90px",
  };

  const mediumMargin = {
    margin: mediumScreen ? "1.5rem 0 1.5rem 0" : "0",
    padding: lgScreen ? "1rem" : "0",
  };

  const styledLinks = {
    padding: "0 0 5px",
    fontSize: ".8rem",
    marginTop: ".4rem",
    color: "#000",
    "&>a": {
      color: "#9d9d9d",
      textDecoration: "none",
      transition: "200ms",
      fontSize: "1rem",
    },
    "&:hover": {
      textDecoration: "none",
      "&>a": { color: theme.palette.primary[800] },
    },
  };

  const buttonStyle = {
    borderRadius: "0",
    marginTop: ".5rem",
    fontSize: "1rem",
    backgroundColor: theme.palette.primary[500],
    color: "#fff",
    "&>a": { color: "#fff", textDecoration: "none" },
    "&:hover": { backgroundColor: theme.palette.primary[600] },
  };

  const footerIcon = {
    color: theme.palette.primary[500],
    fontSize: "1.5rem",
    marginRight: ".5rem",
  };

  return (
    <Box position="relative">
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
        }}
      >
        <Box
          className="container"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box className="row" padding="2rem 0">
            <Box className="col-12 col-md-6 col-lg-3" style={mediumMargin}>
              {/* Company logo and information */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
                mb="1.5rem"
              >
                <Link to="/" aria-label="Länk till hem">
                  <img src={logo} style={logoFooter} alt="Company logo, BOB" />
                </Link>
                ;
              </Box>
              <p style={{ color: "#fff", margin: "0", fontSize: "1rem" }}>
                Pålitliga badrumsrenoverare hjälper dig att skapa drömbadrum.
                Högkvalitativt hantverk, trygghet och tillgänglighet är vår
                prioritet.
              </p>
              <Box dispaly="flex" mt="2rem">
                <a
                  href="https://www.instagram.com/bob.badrum/"
                  target="_blank"
                  aria-label="Länk till företages Instagram"
                  className="social-icon"
                >
                  <Button
                    aria-label="Instagram"
                    variant="outlined"
                    sx={styledIconOutlined}
                  >
                    <InstagramIcon sx={{ width: "20px", height: "20px" }} />
                  </Button>
                </a>
                <a
                  href="https://www.facebook.com/byggobadrumspartner"
                  target="_blank"
                  aria-label="Länk till företages Facebook sida"
                >
                  <Button
                    aria-label="Klicka för att komma till företagets hemsida."
                    variant="outlined"
                    sx={styledIconOutlined}
                  >
                    <img
                      src={FacebookIcon}
                      width="20px"
                      height="20px"
                      alt="Facebook ikon"
                    />
                  </Button>
                </a>
              </Box>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-3"
              display="flex"
              justifyContent={lgScreen ? "flex-start" : "center"}
              style={mediumMargin}
            >
              {/* Links */}
              <Box>
                <Typography
                  variant="h1"
                  color={theme.palette.primary.light}
                  sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                >
                  Länkar
                </Typography>
                <List component="ul">
                  <ListItem sx={styledLinks}>
                    <Link to="/badrum">Badrum</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/behorigheter">Behörigheter</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/kontakt">Kontakt</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/om-oss">Om Oss</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-3"
              display="flex"
              justifyContent="space-between"
              style={mediumMargin}
            >
              {/* Contact Info */}
              <Box>
                <Typography
                  variant="h1"
                  color={theme.palette.primary.light}
                  sx={{ fontSize: "1.4rem", fontWeight: "bold" }}
                >
                  Kontakt
                </Typography>
                <List component="ul">
                  <ListItem sx={{ paddingLeft: "0" }}>
                    <p style={contactP}>
                      <span>
                        <CallRoundedIcon sx={footerIcon} />
                      </span>
                      08 - 33 36 63
                    </p>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0" }}>
                    <a href="mailto:hej@bobbadrum.se" style={contactP}>
                      <span>
                        <EmailRoundedIcon sx={footerIcon} />
                      </span>
                      hej@bobbadrum.se
                    </a>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Box display="flex" alignItems="center">
                      <FmdGoodRoundedIcon sx={footerIcon} />
                      <a
                        style={contactP}
                        href="https://maps.google.com/?q=59.3293234,18.0685808"
                        target="_blank"
                      >
                        BOB Badrum Stockholm
                      </a>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-3"
              sx={{ order: 3 }}
              display="flex"
              justifyContent={mediumScreen ? "flex-start" : "center"}
              style={mediumMargin}
            >
              {/* CTA */}
              <Box mb={lgScreen ? "0" : "20px"}>
                <Typography
                  variant="h1"
                  color={theme.palette.primary.light}
                  sx={{
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                  }}
                >
                  Kom Igång
                </Typography>
                <List>
                  <ListItem sx={styledLinks}>
                    <p style={{ color: theme.palette.primary.light }}>
                      Vi Hjälper Dig Komma Igång!
                    </p>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Button
                      name="offert förfrågan"
                      variant="contained"
                      sx={buttonStyle}
                    >
                      <Link to="/kontakt" className="button-text">
                        Få en offert idag
                      </Link>
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position="absolute" bottom="20px" right="100px">
        <p style={{ color: "#fff", margin: "0", fontSize: ".7rem" }}>
          <span>
            <CopyrightRoundedIcon
              sx={{ color: "#fff", marginRight: ".5rem" }}
            />
          </span>
          2023 <span style={{ color: "#ff7e2f" }}>Bobpartner.se</span> All
          Rights Reserved.
        </p>
      </Box>
    </Box>
  );
}

const contactP = {
  margin: "0",
  color: "#9d9d9d",
  textDecoration: "none",
};

const styledIconOutlined = {
  height: "40px",
  width: "40px",
  minWidth: "unset",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "1px solid #fff",
  "&:hover": {
    border: "1px solid #fff",
    backgroundColor: "#000",
  },
};

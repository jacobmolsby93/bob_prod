import React from "react";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom"
import { Facebook, Instagram } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

// Utils
import ImageScroller from "../utils/ImageScroller";

// Images (will need to be urls find suitable place to upload them)
import logo from "../assets/bob_logo.png";
import reco from "../assets/reeco.png";
import bkr from "../assets/bkr.png";
import el from "../assets/elsakerhets.jpg";
import per from "../assets/per.jpg";

export default function Footer() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const logoFooter = {
    width: "150px",
    height: "150px",
  };

  const mediumMargin = {
    margin: mediumScreen ? "20px 0 20px 0" : "0",
  };

  const styledIcon = {
    height: "40px",
    width: "40px",
    minWidth: "unset",
    borderRadius: "50%",
    backgroundColor: "#fff9e6",
    marginRight: "10px",
    color: theme.palette.primary[500],
    "&:hover": {
      backgroundColor: theme.palette.primary[800],
    },
  };

  const styledLinks = {
    padding: "0 0 5px",
    fontSize: "15px",
    color: "#000",
    "&>a": {
      color: theme.palette.primary.light,
      textDecoration: "none",
      transition: "200ms",
      fontSize: "16px",
      textTransform: "uppercase",
    },
    "&:hover": {
      textDecoration: "none",
      "&>a": { color: theme.palette.primary[800] },
    },
  };

  const topFooter = {
    backgroundColor: "#EBEBEB",
  };

  const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    marginRight: "10px",
    marginTop: "10px"
  };

  return (
    <Box>
      <Box sx={topFooter}>
        <Box sx={{ minHeight: "80px" }} className="container">
          {/* Companies */}
          <ImageScroller />
        </Box>
      </Box>
      <Box sx={topFooter}>
        <Box className="container" sx={{ paddingBottom: "10px", paddingTop: "10px"}}>
          {/* Certifications */}
          <Typography variant="h4">Behörigheter och Certifikat</Typography>
          <Box>
            <img src={el} style={imgStyle} alt="El sakerhetsverket company logo" />
            <img src={bkr} style={imgStyle} alt="bkr company logo" />
            <img src={per} style={imgStyle} alt="Per company logo" />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#1D1D1B",
          borderTop: `5px solid ${theme.palette.primary[500]}`,
          height: mediumScreen ? "max-content" : "400px",
        }}
      >
        <Box
          className="container"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <Box className="row">
            <Box className="col-12 col-md-6 col-lg-3" style={mediumMargin}>
              {/* Company logo and information */}
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="flex-end"
                mb="20px"
              >
                <img src={logo} style={logoFooter} alt="Company logo, BOB" />
                <Box dispaly="flex">
                  <Button variant="contained" sx={styledIcon}>
                    <Facebook />
                  </Button>
                  <Button variant="contained" sx={styledIcon}>
                    <Instagram />
                  </Button>
                </Box>
              </Box>
              <p style={{ color: "#fff", margin: "0" }}>
                Pålitliga badrumsrenoverare hjälper dig att skapa drömbadrum.
                Högkvalitativt hantverk, trygghet och tillgänglighet är vår
                prioritet.
              </p>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-3"
              display="flex"
              justifyContent={mediumScreen ? "flex-start" : "center"}
              style={mediumMargin}
            >
              {/* Links */}
              <Box>
                <Typography variant="h3" color={theme.palette.primary[500]}>
                  Länkar
                </Typography>
                <List component="ul">
                  <ListItem sx={styledLinks}>
                    <Link to="/referens">Referens Projekt</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/vara-tjanster">våra Tjänster</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/offert-forfragan">Offert Förfrågan</Link>
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
                <Typography variant="h3" color={theme.palette.primary[500]}>
                  Kontakt
                </Typography>
                <List component="ul">
                  <ListItem sx={styledLinks}>
                    <Typography variant="h5" style={{ fontWeight: "bold", color: "#fff" }}>
                      BOB Stockholm
                    </Typography>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <p style={{ margin: "0", color: "#fff" }}>
                      Ellipsvägen 11, 141 75, Kungens Kurva
                    </p>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0", paddingBottom: "0" }}>
                    <Link
                      to="info@bobpartner.se"
                      style={{ textDecoration: "none", color: "#fff"}}
                    >
                      info@bobpartner.se
                    </Link>
                  </ListItem>
                  <ListItem sx={{ paddingLeft: "0" }}>
                    <p style={{ color: "#fff", cursor: "default" }}>
                      08 - 400 263 00
                    </p>
                  </ListItem>
                </List>
              </Box>
              {!smallScreen && (
                <span
                  style={{
                    height: "100%",
                    width: "5px",
                    backgroundColor: theme.palette.primary[500],
                  }}
                ></span>
              )}
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-3"
              sx={{ order: 3 }}
              display="flex"
              justifyContent={mediumScreen ? "flex-start" : "center"}
              alignItems="flex-end"
              style={mediumMargin}
            >
              {/* CTA */}
              <Box>
                <img
                  src={reco}
                  width="70px"
                  heigth="70px"
                  alt="Review logo from reco"
                />
                <Typography
                  variant="h5"
                  sx={{ marginTop: "10px" }}
                  color={theme.palette.primary[500]}
                  style={{ textTransform: "uppercase" }}
                >
                  Vi hjälper dig att komma igång
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "10px",
                    fontSize: "16px",
                    backgroundColor: theme.palette.primary[500],
                    color: "#fff",
                    "&>a": {color: "#fff", textDecoration: "none"},
                    "&:hover": { backgroundColor: theme.palette.primary[400] },
                  }}
                >
                  <Link to="/offert-forfragan">Få en offert idag</Link>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

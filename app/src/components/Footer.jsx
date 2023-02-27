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
import logoShapeLight from "../assets/logo-shape-icon-light.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "../assets/facebookwhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";
import footerShape from "../assets/footer-logo-shape.png";
import ButtonOrange from "./ButtonOrange";

// Images (will need to be urls find suitable place to upload them)
const logo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/boblogo.png";
const TikTok =
  "https://storage.googleapis.com/bob-prod-images/media/assets/tik-tok-white.png";

export default function Footer() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(() => theme.breakpoints.down("sm"))
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const logoFooter = {
    width: "70px",
    height: "70px",
  };

  const mediumMargin = {
    margin: mediumScreen ? "1.5rem 0 1.5rem 0" : "0",
    padding: lgScreen ? "1rem" : "0",
    display: "flex",
    flexDirection: "column",
    alignItems: !smallScreen ? "center" : "flex-start",
  };

  const styledLinks = {
    padding: "0 0 5px",
    fontSize: "1rem",
    marginTop: ".4rem",
    color: "#000",
    "&>a": {
      color: "#fff",
      fontWeight: "regular",
      textDecoration: "none",
      transition: "200ms",
      fontSize: "1rem",
    },
    "&:hover": {
      textDecoration: "none",
      "&>a": { color: theme.palette.primary[200] },
    },
  };

  const footerIcon = {
    color: "#fff",
    fontSize: "1.5rem",
    marginRight: ".5rem",
  };

  return (
    <Box position="relative">
      <Box
        position="absolute"
        sx={{
          backgroundImage: `url(${footerShape})`,
          backgroundSize: "cover",
          height: "300px",
          width: !smallScreen ? "50vw" : "100vw",
          bottom: "0",
          right: "0",
          opacity: "0.1",
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#1a1a1a",
          padding: !smallScreen ?  "6rem 0" : "0",
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
            <Box className="col-12 col-md-6 col-lg-4" style={mediumMargin}>
              {/* Company logo and information */}
              <Box display="flex" alignItems="flex-start" mb="1.5rem">
                <Link to="/" aria-label="Länk till hem">
                  <img src={logo} style={logoFooter} alt="Company logo, BOB" />
                </Link>
                <Typography
                  variant="body1"
                  style={{
                    color: "#fff",
                    paddingLeft: "1rem",
                    margin: "0",
                    fontSize: "1rem",
                  }}
                >
                  Pålitliga hantverkare som hjälper dig att göra verklighet av
                  badrummet du drömmer om. Högkvalitativt hantverk, trygghet och
                  tillgänglighet är ledord i vårt företag.
                </Typography>
              </Box>
              <Box mb={lgScreen ? "0" : "20px"}>
                <List>
                  <ListItem sx={styledLinks}>
                    <Typography
                      variant="h6"
                      style={{
                        color: theme.palette.primary.light,
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                      }}
                    >
                      Vi Hjälper Dig Komma Igång!
                    </Typography>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <ButtonOrange
                      href="kontakt"
                      ariaAtag="Länk till kontakta oss"
                      aria="Klicka för att komma till kontakta oss sidan"
                      buttonText="Offert förfrågan"
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-4"
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
                    <Link to="/vara-tjanster">Våra Tjänster</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/referenser">Tidigare Projekt</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/behorigheter">Behörigheter</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/kontakt">Kontakt</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/omoss">Om Oss</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/vanliga-fragor">Vanliga Frågor</Link>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Link to="/trygg-renovering">Trygg Renovering</Link>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Box
              className="col-12 col-md-6 col-lg-4"
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
                    <a
                      href="mailto:hej@bobvatrumsrenovering.se"
                      style={contactP}
                    >
                      <span>
                        <EmailRoundedIcon sx={footerIcon} />
                      </span>
                      hej@bobvatrumsrenovering.se
                    </a>
                  </ListItem>
                  <ListItem sx={styledLinks}>
                    <Box display="flex" alignItems="flex-start">
                      <FmdGoodRoundedIcon sx={footerIcon} />
                      <a
                        style={contactP}
                        href="https://maps.google.com/?q=59.3293234,18.0685808"
                        target="_blank"
                      >
                        BOB VÅTRUMSRENOVERING AB,
                        <br />
                        Org-nummer: 556963-1905
                        <br />
                        Ǻsvägen 9, 155 32, Nykvarn
                      </a>
                    </Box>
                    <Box mt="2rem"></Box>
                  </ListItem>
                  <ListItem sx={{ marginTop: "2rem" }}>
                    <nav style={{ display: "flex" }}>
                      {IconsList.map((item) => (
                        <a
                          key={item.name}
                          href={item.link}
                          alt={`${item.name} Logga`}
                          aria-label={`Länk till BOBs ${item.name}s sida`}
                          style={{ marginRight: "1rem" }}
                        >
                          <Box
                            sx={{
                              backgroundImage: `url(${logoShapeLight})`,
                              backgroundPostition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "55px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "55px",
                              width: "55px",
                            }}
                          >
                            {item.icon}
                          </Box>
                        </a>
                      ))}
                    </nav>
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
            ></Box>
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
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
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

const IconsList = [
  {
    orange: true,
    icon: (
      <img src={FacebookIcon} alt="Facebook ikon" width="auto" height="22px" />
    ),
    link: "https://www.facebook.com/bob.vatrumsrenovering/",
    name: "Facebook",
  },
  {
    icon: (
      <InstagramIcon sx={{ width: "auto", height: "22px", color: "#fff" }} />
    ),
    link: "https://www.instagram.com/bob.vatrumsrenovering/",
    name: "Instagram",
  },
  {
    icon: <img src={TikTok} alt="Tiktok ikon" width="auto" height="22px" />,
    link: "https://www.tiktok.com/@bob.vatrumsrenovering",
    name: "Tiktok",
  },
  {
    icon: (
      <LinkedInIcon sx={{ width: "auto", height: "22px", color: "#fff" }} />
    ),
    link: "https://www.linkedin.com/in/info-bob-v%C3%A5trumsrenovering-ab-0bb772266/",
    name: "LinkedIn",
  },
];

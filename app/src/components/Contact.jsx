import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MessageForm from "../form/MessageForm.jsx";
import FacebookIcon from "../assets/facebookwhite.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const logo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/boblogo.png";
const tikTok =
  "https://storage.googleapis.com/bob-prod-images/media/assets/tik-tok.png";

export default function Contact() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const theme = useTheme();

  const contactIcon = {
    color: theme.palette.primary[500],
    fontSize: "1.8rem",
  };

  const styledIconOutlinedOrange = {
    height: "40px",
    width: "40px",
    minWidth: "unset",
    borderRadius: "50%",
    color: "#2d2d2d",
    margin: ".5rem",
    backgroundColor: theme.palette.primary[500],
    "&:hover": {
      backgroundColor: theme.palette.primary[400],
    },
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      position="relative"
      sx={{
        marginTop: "30px",
        marginBottom: "30px",
        alignItems: "center",
      }}
    >
      {/* Background Logo */}
      <Box
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "contain",
          opacity: "20%",
          height: "30vw",
          width: "30vw",
          zIndex: "0",
          position: "absolute",
        }}
      ></Box>
      <Grid container zIndex="1" mt="20px">
        {/* Text Area */}
        <Box>
          <Grid item xs={10} sx={{ marginBottom: "3rem" }}>
            <Typography
              className="subtitle-font"
              variant="h2"
              component="p"
              color={theme.palette.primary[500]}
            >
              Få en kostnadsfri offert idag!
            </Typography>
            <Typography variant="h1" className="title-font">
              Kontakta Oss Idag.
            </Typography>
            <Box display="flex" mt="2rem">
              <span
                style={{
                  width: ".2rem",
                  height: "auto",
                  marginRight: "10px",
                  backgroundColor: theme.palette.primary[500],
                }}
              ></span>
              <p
                className="body-paragraph"
                style={{
                  maxWidth: !smallScreen ? "70%" : "100%",
                }}
              >
                Vill du ha hjälp med din renovering? Genom att fylla i
                formuläret nedan så kommer vi att kontakta dig för ett
                kostnadsfritt möte. Vi hjälper dig med att förverkliga din nästa
                badrumsrenovering. Välkommen till oss på BOB Våtrumsrenovering
                AB - vi ser fram emot att hjälpa dig med ditt projekt!
              </p>
            </Box>
          </Grid>
        </Box>
        {/* Form Area */}
        <Box width="100%" display="flex" justifyContent="center">
          <MessageForm />
        </Box>
        <Box>
          {/* Social */}
          <Grid item xs={10}></Grid>
          <Box mt="30px" width="max-content">
            <a
              href="https://www.instagram.com/bob.badrum/"
              target="_blank"
              aria-label="Länk till företages Instagram"
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
              href=" https://www.facebook.com/bob.vatrumsrenovering/"
              target="_blank"
              aria-label="Länk till företages Tik-Tok sida"
            >
              <Button
                aria-label="Tik-Tok"
                variant="outlined"
                sx={styledIconOutlinedOrange}
              >
                <img
                  src={FacebookIcon}
                  width="20px"
                  height="20px"
                  alt="Tik-Tok ikon"
                />
              </Button>
            </a>
            <a
              href="https://www.tiktok.com/@bob.badrum"
              target="_blank"
              aria-label="Länk till företages Tik-Tok sida"
            >
              <Button
                aria-label="Tik-Tok"
                variant="outlined"
                sx={styledIconOutlined}
              >
                <img
                  src={tikTok}
                  width="20px"
                  height="20px"
                  alt="Tik-Tok ikon"
                />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/info-bob-v%C3%A5trumsrenovering-ab-0bb772266/"
              target="_blank"
              aria-label="Länk till företages Instagram"
            >
              <Button
                aria-label="Instagram"
                variant="outlined"
                sx={styledIconOutlinedOrange}
              >
                <LinkedInIcon
                  sx={{ width: "20px", height: "20px", color: "#fff" }}
                />
              </Button>
            </a>
          </Box>
          <Box
            mt="30px"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <a
              className="body-paragraph contact-info"
              href="mailto:hej@bobvatrumsrenovering.se?subject=Offert"
              style={{ marginRight: "1rem" }}
            >
              <span style={{ marginRight: ".5rem" }}>
                <MailRoundedIcon sx={contactIcon} />
              </span>
              hej@bobvatrumsrenovering.se
            </a>

            <p className="body-paragraph contact-info">
              <span style={{ marginRight: ".5rem" }}>
                <CallRoundedIcon sx={contactIcon} />
              </span>
              08 - 33 36 63
            </p>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

const styledIconOutlined = {
  height: "40px",
  width: "40px",
  minWidth: "unset",
  borderRadius: "50%",
  color: "#2d2d2d",
  margin: ".5rem",
  backgroundColor: "transparent",
  border: "1px solid #2d2d2d",
  "&:hover": {
    border: "1px solid #2d2d2d",
    backgroundColor: "#fff",
  },
};

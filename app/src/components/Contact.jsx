import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MessageForm from "../form/MessageForm.jsx";
import FacebookIconOrange from "../assets/facebook-orange-icon.png";
import FacebookIconBlack from "../assets/facebook.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logoShapeIcon from "../assets/logo-shape-icon.png";
import logoShapeGrey from "../assets/logo-shape-icon-grey.png";
import ContactBackground from "../assets/contact-background.png";
import Spacer from "./Spacer.jsx";

const logo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/boblogo.png";
const tikTok =
  "https://storage.googleapis.com/bob-prod-images/media/assets/tik-tok.png";

export default function Contact() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const theme = useTheme();
  const sizeToSpacerCount = {
    small: 1,
    medium: 2,
    large: 3,
  };
  const size = smallScreen
    ? 'small'
    : mediumScreen
    ? 'medium'
    : largeScreen
    ? 'large'
    : null;

    const spacerCount = size ? sizeToSpacerCount[size] : null;

  return (
    <Box>
      {/* Grey part */}
      <Box backgroundColor="#F9F9F9" width="100%" padding="3rem 0">
        <Box className="container">
          <Box className="row">
            <Box className="col-12 col-lg-6">
              <Box>
                <Typography variant="h4" className="title-font">
                  Kontakta oss idag.
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  sx={{ fontWeight: "bold", padding: "1rem 0" }}
                >
                  <MailOutlineIcon sx={{ marginRight: ".5rem" }} />
                  hej@bobvatrumsrenovering.se
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  sx={{ fontWeight: "bold" }}
                >
                  <PhoneInTalkIcon sx={{ marginRight: ".5rem" }} />
                  08 - 33 36 63
                </Typography>
              </Box>
            </Box>
            <Box className="col-12 col-lg-6">
              <Typography>
                Vill du ha hjälp med din renovering? Genom att fylla i
                formuläret nedan så kommer vi att kontakta dig för ett
                kostnadsfritt möte. Vi hjälper dig med att förverkliga din nästa
                badrumsrenovering. Välkommen till oss på BOB Våtrumsrenovering
                AB - vi ser fram emot att hjälpa dig med ditt projekt!
              </Typography>
              <Box mt="2rem">
                <nav style={{ display: "flex" }}>
                  {IconsList.map((item) => (
                    <a
                      href={item.link}
                      alt={`${item.name} Logga`}
                      aria-label={`Länk till BOBs ${item.name}s sida`}
                      style={{ marginRight: "1rem" }}
                    >
                      <Box
                        sx={{
                          backgroundImage: `url(${logoShapeGrey})`,
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
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Background Image part */}
      <Box position="relative">
        <Box
          sx={{
            backgroundImage: `url(${ContactBackground})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "30vw",
            position: "absolute",
            left: "0",
            right: "0",
            zIndex: "-1",
          }}
        ></Box>
        <Box>
          <Box className="row" justifyContent="center">
            <MessageForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


const IconsList = [
  {
    orange: true,
    icon: (
      <img
        src={FacebookIconBlack}
        alt="Facebook ikon"
        width="auto"
        height="22px"
      />
    ),
    link: "https://www.linkedin.com/in/boblogo/",
    name: "Facebook",
  },
  {
    icon: (
      <InstagramIcon sx={{ width: "auto", height: "22px", color: "#000" }} />
    ),
    link: "https://www.linkedin.com/in/boblogo/",
    name: "Instagram",
  },
  {
    icon: <img src={tikTok} alt="Tiktok ikon" width="auto" height="22px" />,
    link: "https://www.linkedin.com/in/boblogo/",
    name: "Tiktok",
  },
  {
    icon: (
      <LinkedInIcon sx={{ width: "auto", height: "22px", color: "#000" }} />
    ),
    link: "https://www.linkedin.com/in/boblogo/",
    name: "LinkedIn",
  },
];

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

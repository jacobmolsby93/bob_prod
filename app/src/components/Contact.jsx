import React, { useEffect, useState } from "react";
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
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [screenSize, setScreenSize] = useState([""]);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize(["item"]);
      } else if (width > 768 && width < 1200) {
        setScreenSize(["item 1", "item 2"]);
      } else {
        setScreenSize(["item 1", "item 2", "item 3"]);
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

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
                  sx={{
                    fontWeight: "bold",
                    paddingBottom: !smallScreen ? "0" : "1rem",
                  }}
                >
                  <PhoneInTalkIcon sx={{ marginRight: ".5rem" }} />
                  08 - 33 36 63
                </Typography>
              </Box>
            </Box>
            <Box className="col-12 col-lg-6">
              <Typography variant="body1" className="body-paragraph">
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
                      key={item.name}
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
          {screenSize.map((item, index) => (
            <Spacer key={index} size={index + 1} />
          ))}
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
    link: "https://www.facebook.com/bob.vatrumsrenovering/",
    name: "Facebook",
  },
  {
    icon: (
      <InstagramIcon sx={{ width: "auto", height: "22px", color: "#000" }} />
    ),
    link: "https://www.instagram.com/bob.vatrumsrenovering/",
    name: "Instagram",
  },
  {
    icon: <img src={tikTok} alt="Tiktok ikon" width="auto" height="22px" />,
    link: "https://www.tiktok.com/@bob.vatrumsrenovering",
    name: "Tiktok",
  },
  {
    icon: (
      <LinkedInIcon sx={{ width: "auto", height: "22px", color: "#000" }} />
    ),
    link: "https://www.linkedin.com/in/info-bob-v%C3%A5trumsrenovering-ab-0bb772266/",
    name: "LinkedIn",
  },
];

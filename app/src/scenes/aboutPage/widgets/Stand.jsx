import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ButtonOrange from "../../../components/ButtonOrange";
import ButtonWhite from "../../../components/ButtonWhite";

// Images
const teamwork =
  "https://storage.googleapis.com/bob-prod-images/media/assets/support.png";
const skills =
  "https://storage.googleapis.com/bob-prod-images/media/assets/skills.png";
const offer =
  "https://storage.googleapis.com/bob-prod-images/media/assets/offer.png";
const time =
  "https://storage.googleapis.com/bob-prod-images/media/assets/save-time.png";
const aboutSecond =
  "https://storage.googleapis.com/bob-prod-images/media/assets/about-second.webp";

const Stand = () => {
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const marginTop = "2rem";

  return (
    <Box className="row">
      <Box className="col-12 col-xl-6">
        <Box
          sx={{
            backgroundImage: `url(${aboutSecond})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: !lgScreen ? "300px" : "100%",
            width: "auto",
            padding: "0 !important",
          }}
        ></Box>
      </Box>
      <Box
        className="col-12 col-xl-6"
        sx={{
          padding: !lgScreen ? "3rem 1rem" : "5rem 3rem 5rem 3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          className="title-font"
          sx={{ marginBottom: "2rem" }}
        >
          Vi <br />
          innoverar Badrum.
        </Typography>
        <Box className="row">
          {cols.map((col, index) => (
            <Box
              className="col-12 col-lg-6"
              sx={{
                padding: !mdScreen
                  ? index === 0 || index === 2
                    ? "1.5rem 1.5rem 1.5rem 0"
                    : "1.5rem 0 1.5rem 1.5rem"
                  : "1rem 0",
                borderBottom: !mdScreen
                  ? index === 0 || index === 1
                    ? "2px solid rgba(0, 0, 0, 0.2)"
                    : "none"
                  : "",
                borderRight: !mdScreen
                  ? index === 0 || index === 2
                    ? "2px solid rgba(0, 0, 0, 0.2)"
                    : "none"
                  : "",
              }}
            >
              <Box display="flex" alignItems="center" mb="1rem">
                <img
                  src={col.logo}
                  alt="Logga som symboliserar titteln"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
                <Typography
                  className="subtitle-font"
                  variant="h4"
                  sx={{ marginLeft: ".5rem" }}
                >
                  {col.title}
                </Typography>
              </Box>
              <Typography variant="body1" className="body-paragraph">
                {col.text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box mt={marginTop}>
          <ButtonOrange
            buttonText="Skriv till oss"
            aria="Klicka för att komma till kontakta oss sidan"
            ariaAtag="Länk till kontaka oss sidan"
            href="kontakt"
          />
          <ButtonWhite
            buttonText="08 - 33 36 63"
            aria="Klicka för att ringa företaget"
            ariaAtag="Länk med företagets telefonnummer"
            href="tel:08333663"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Stand;

const cols = [
  {
    id: 1,
    title: "Pålitliga",
    text: "Vi strävar efter att vara ett pålitligt val för kunderna, med en lång historia av att leverera projekten i tid och inom budgetramarna, och med en dedikerad och kompetent personal.",
    logo: teamwork,
    border: "right bottom",
  },
  {
    id: 2,
    title: "Behöriga Hantverkare",
    text: "  Vårt team av specialister är kompetenta och kapabla att maximera resultaten och leverera projekten med högsta kvalitet.",
    logo: skills,
    border: "left bottom",
  },
  {
    id: 3,
    title: "Genomskilniga Priser",
    text: "  Med Bob Våtrumsrenovering AB kan du vara säker på att projektet kommer att levereras precis i tid och inom budgetramarna, utan oväntade kostnader eller förseningar.",
    logo: offer,
    border: "right top",
  },
  {
    id: 4,
    title: "Tiden är viktig för oss",
    text: "  Att renoveringen blir klar på avtalad tid är extremt viktigt för oss. För att ni som kund skall kunna planera er vardag utifrån renoveringen.",
    logo: time,
    border: "left top",
  },
];

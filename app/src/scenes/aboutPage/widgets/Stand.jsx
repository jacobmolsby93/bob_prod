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
            aria="Klicka f??r att komma till kontakta oss sidan"
            ariaAtag="L??nk till kontaka oss sidan"
            href="kontakt"
          />
          <ButtonWhite
            buttonText="08 - 33 36 63"
            aria="Klicka f??r att ringa f??retaget"
            ariaAtag="L??nk med f??retagets telefonnummer"
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
    title: "P??litliga",
    text: "Vi str??var efter att vara ett p??litligt val f??r kunderna, med en l??ng historia av att leverera projekten i tid och inom budgetramarna, och med en dedikerad och kompetent personal.",
    logo: teamwork,
    border: "right bottom",
  },
  {
    id: 2,
    title: "Beh??riga Hantverkare",
    text: "  V??rt team av specialister ??r kompetenta och kapabla att maximera resultaten och leverera projekten med h??gsta kvalitet.",
    logo: skills,
    border: "left bottom",
  },
  {
    id: 3,
    title: "Genomskilniga Priser",
    text: "  Med Bob V??trumsrenovering AB kan du vara s??ker p?? att projektet kommer att levereras precis i tid och inom budgetramarna, utan ov??ntade kostnader eller f??rseningar.",
    logo: offer,
    border: "right top",
  },
  {
    id: 4,
    title: "Tiden ??r viktig f??r oss",
    text: "  Att renoveringen blir klar p?? avtalad tid ??r extremt viktigt f??r oss. F??r att ni som kund skall kunna planera er vardag utifr??n renoveringen.",
    logo: time,
    border: "left top",
  },
];

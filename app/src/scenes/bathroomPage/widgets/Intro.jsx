import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

// Components
import ButtonOrange from "../../../components/ButtonOrange.jsx";
import ButtonWhite from "../../../components/ButtonWhite.jsx";

// Images
const collageImage1 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/services-collage-1.webp";
const collageImage2 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/services-collage-2.webp";
const collageImage3 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/services-collage-3.webp";
const collageImage4 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/services-collage-4.webp";
const completeCollage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-complete.png";

export const Intro = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const xlScreen = useMediaQuery((theme) => theme.breakpoints.down("xl"));
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12 col-xl-6 mb-4 mb-lg-4">
          <img
            src={xlScreen ? collageImage2 : completeCollage}
            width="100%"
            style={{
              borderRadius: "10px",
              maxHeight: !xlScreen ? "" : "500px",
            }}
            alt="Collage på olika badrum"
          />
        </Box>
        <Box
          className="col-12 col-xl-6"
          sx={{
            paddingLeft: lgScreen ? "" : "5rem",
            padding: smallScreen ? "2rem 0" : "",
          }}
        >
          <Box mb="2rem">
            <Typography variant="h2" className="title-font">
              Vi Renoverar Ditt Badrum Med Engagemang Och Respekt För Dig Och
              Ditt Hem!
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" className="body-paragraph">
              Att renovera badrum är både en passion och en av våra
              specialiteter och vi har mer än tio års erfarenhet av renovering
              och ombyggnation i Stockholm med omnejd. Om du väljer oss så får
              du ett fast pris, en tydlig och fastställd tidplan som respekteras
              samt en engagerad projektledare.
              <br />
              <br />
              För att göra projektet så enkelt och smidigt som möjligt, så kan
              du också köpa kakel, klinker och inredning via oss – till
              förmånliga priser. Och vi tar självklart med oss allt du har köpt
              hem till dig när det är dags att montera det. Skicka in en
              offertförfrågan så kontaktar en av våra kundansvariga er. Vi bokar
              då in ett kostnadsfritt och förutsättningslöst hembesök inom
              Stockholmsområdet för att kolla på er badrumsrenovering.
              Möjligheten om att begära en offert från oss utan hembesök går
              självklart också bra.
            </Typography>
            <Box mt="2rem">
              <ButtonOrange
                buttonText="Tidigare Projekt"
                href="vara-tjanster"
                aria="Klicka här för att komma till våra tjänster"
                ariaAtag="Länk till våra tjänster"
              />
              <ButtonWhite
                buttonText="Om oss"
                href="/omoss"
                aria="Klicka här för att läsa mer om Bob Våtrumsrenovering"
                ariaAtag="Länk till om oss"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

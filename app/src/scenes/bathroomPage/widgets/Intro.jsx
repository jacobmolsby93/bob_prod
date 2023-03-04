import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

// Components
import ButtonOrange from "../../../components/ButtonOrange.jsx";
import ButtonWhite from "../../../components/ButtonWhite.jsx";

// Images
import collageImage1 from "../../../assets/services-collage-1.png";
import collageImage2 from "../../../assets/services-collage-2.png";
import collageImage3 from "../../../assets/services-collage-3.png";
import collageImage4 from "../../../assets/services-collage-4.png";
import completeCollage from "../../../assets/collage-complete.png";

export const Intro = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Box className="container">
      <Box className="row">
        <Box className="col-12 col-lg-6">
          <img
            src={smallScreen ? collageImage2 : completeCollage}
            width="100%"
            style={{ borderRadius: "10px" }}
            alt="Collage på olika badrum"
          />
        </Box>
        <Box
          className="col-12 col-lg-6"
          sx={{
            paddingLeft: smallScreen ? "" : "5rem",
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

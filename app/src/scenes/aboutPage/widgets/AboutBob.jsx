import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ButtonOrange from "../../../components/ButtonOrange.jsx";
const AboutIntro = "https://storage.googleapis.com/bob-prod-images/media/assets/about-intro-image.webp";

const Intro = () => {
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box
      className="row"
      sx={{
        justifyContent: !lgScreen ? "" : "center",
        padding: "50px 0",
        display: "flex",
        alignItems: "top",
      }}
    >
      <Box
        className="col-12 col-lg-6"
        sx={{
          padding: !lgScreen ? "" : "2rem 0 0 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" className="title-font">
          Om Bob våtrumsrenovering
        </Typography>
        <Box mt="2rem" className="col-12 col-md-10 col-sm-12">
          <article>
            <Typography variant="body1" className="body-paragraph">
              Vi är en badrumsfirma i Stockholm som enbart renoverar
              våtutrymmen. Det gör oss väldigt kvalitetssäkra inom området.
              Skillnaden mellan oss och många andra är att vi bara sysslar med
              våtrum. Vi har varit verksamma sedan 2014. Vårt mål med varje
              renovering är att ge kunden en riktigt bra upplevelse och en
              renovering utan krångel.
            </Typography>
          </article>
        </Box>
        <Box mt="2rem">
          <ButtonOrange buttonText="Kontakta oss" href="kontakt" />
        </Box>
      </Box>
      <Box
        className="col-12 col-lg-6 order-first order-lg-last"
        position="relative"
      >
        {/* Image */}
        <Box sx={{ position: !lgScreen ? "absolute" : "", top: "-100px" }}>
          <img
            src={AboutIntro}
            alt="Om oss introduktions bild, en bild på ett vardagsrum med fiskbensparkett"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;

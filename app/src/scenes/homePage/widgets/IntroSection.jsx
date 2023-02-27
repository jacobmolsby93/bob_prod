import React from "react";
import { Box, Typography, Grid, useTheme, useMediaQuery } from "@mui/material";

// Components
import ButtonOrange from "../../../components/ButtonOrange.jsx";
import ButtonWhite from "../../../components/ButtonWhite.jsx";
import Carousel from "./Carousel.jsx";

// Images
import collageImage1 from "../../../assets/collage-image-1.png";
import collageImage2 from "../../../assets/collage-image-2.png";
import collageImage3 from "../../../assets/collage-image-fullwidth.png";

export const IntroSection = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  return (
    <Box className="row">
      {!lgScreen ? (
        <Box className="wrapper" display="flex">
          <Box
            display="grid"
            gridTemplateColumns="1fr auto"
            gap={4}
            gridAutoColumns="1fr"
            gridAutoRows="minmax(0, max-content)"
          >
            <Box gridColumn="1 / span 1" gridRow="1 / 3" height="fit-content">
              <Box>
                <img
                  src={collageImage1}
                  alt="Bild på ett handfat"
                  title="Handfat"
                  style={{ maxWidth: "300px", borderRadius: "10px" }}
                />
              </Box>
            </Box>
            <Box gridColumn="2 / span 1" gridRow="2 / 3" height="fit-content">
              <Box>
                <img
                  src={collageImage2}
                  alt="Bild på en toalett"
                  title="Toalett"
                  style={{
                    width: "auto",
                    maxWidth: "300px",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
            <Box
              gridColumn="2 / span 2"
              gridRow="1 / 3"
              height="max-content"
              display="flex"
              alignItems="center"
              padding="3rem 0"
            >
              <Box>
                <Typography variant="h2" className="title-font">
                  Vi utför badrumsrenoveringar med fast pris och en fast
                  tidsplan i Stockholm med omnejd.
                </Typography>
              </Box>
            </Box>
            <Box
              gridColumn="1 / span 2"
              gridRow="3 / span 1"
              height="fit-content"
            >
              <Box>
                <img
                  src={collageImage3}
                  alt="Bild på ett badrum"
                  title="Badrum"
                  style={{
                    width: "auto",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </Box>
            <Box
              gridColumn="3 / span 2"
              gridRow="2 / span 3"
              height="fit-content"
            >
              <Box>
                <Typography variant="body1" className="body-paragraph">
                  Finns det något härligare än att kliva in i sitt splitter nya
                  badrum och inse att den vision man hade för några månader
                  sedan, nu blivit till verklighet? Vi finns här för att skapa
                  just den känslan. Det här är vår passion och det vi brinner
                  för. Tillsammans ser vi till att du får precis det badrum du
                  önskat dig. Vi hjälper dig också med inspiration och ideér, så
                  att du kan ta alla nödvändiga beslut gällande utformningen av
                  ditt badrum.
                  <br />
                  <br />
                  Många gånger kan det enorma utbud av kakel och klinkers som
                  finns på marknaden göra att man famlar bland alla val och
                  möjligheter. Vi kan hjälpa dig med att avgränsa dina val och
                  vägleda dig så att dina beslut blir enklare att ta. Vi på BOB
                  Våtrumsrenovering AB har en gedigen erfarenhet samt
                  spetskompetens inom renovering av badrum och tvättstugor.
                  <br />
                  <br />
                  Vi är ett specialistföretag inom våtutrymmen som erbjuder våra
                  kunder en helhetslösning när det kommer till allt inom badrum,
                  wc & tvättstugor. Önskar du få hjälp med inredning, kakel och
                  klinker har vi samarbeten med flera inredare. Denna tjänst är
                  förstås helt kostnadsfri när du väljer att renovera med oss.
                  Låt oss veta dina önskemål så hjälper vi dig att få det badrum
                  du alltid drömt om.
                </Typography>
                <Box mt="1rem">
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
      ) : (
        <Box className="col-12 col-md-12">
          <Box className="carousel-wrapper" mb="2rem">
            <Carousel
              image1={collageImage1}
              image2={collageImage2}
              image3={collageImage3}
              image4={collageImage1}
              smallScreen={smallScreen}
            />
          </Box>
          <Box>
            <Typography variant="body1" className="body-paragraph">
              Finns det något härligare än att kliva in i sitt splitter nya
              badrum och inse att den vision man hade för några månader sedan,
              nu blivit till verklighet? Vi finns här för att skapa just den
              känslan. Det här är vår passion och det vi brinner för.
              Tillsammans ser vi till att du får precis det badrum du önskat
              dig. Vi hjälper dig också med inspiration och ideér, så att du kan
              ta alla nödvändiga beslut gällande utformningen av ditt badrum.
              <br />
              <br />
              Många gånger kan det enorma utbud av kakel och klinkers som finns
              på marknaden göra att man famlar bland alla val och möjligheter.
              Vi kan hjälpa dig med att avgränsa dina val och vägleda dig så att
              dina beslut blir enklare att ta. Vi på BOB Våtrumsrenovering AB
              har en gedigen erfarenhet samt spetskompetens inom renovering av
              badrum och tvättstugor.
              <br />
              <br />
              Vi är ett specialistföretag inom våtutrymmen som erbjuder våra
              kunder en helhetslösning när det kommer till allt inom badrum, wc
              & tvättstugor. Önskar du få hjälp med inredning, kakel och klinker
              har vi samarbeten med flera inredare. Denna tjänst är förstås helt
              kostnadsfri när du väljer att renovera med oss. Låt oss veta dina
              önskemål så hjälper vi dig att få det badrum du alltid drömt om.
            </Typography>
            <Box mt="1rem">
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
      )}
    </Box>
  );
};

export default IntroSection;

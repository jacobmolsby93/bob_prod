import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AnimatedLazyImage from "../../../components/LazyImage";

// Images & Logos
import teamwork from "../../../assets/support.png";
import sketch from "../../../assets/sketch.png";
import quality from "../../../assets/quality.png";
import podium from "../../../assets/podium.png";
import shapes from "../../../assets/backgroundshapes.png";
import best from "../../../assets/best-price.png"
import offer from "../../../assets/offer.png"
import book from "../../../assets/open-book.png"
import document from "../../../assets/contract.png"

export default function WhyUs() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const marginTop = "30px";


  return (
    <Box className="wrapper why-us-wrapper">
      <Box
        className="container"
        margin="5rem 0"
      >
        <Box className="row flex-centerd-align" height="100">
          <Box className="col-12" sx={{ zIndex: "10 " }} textAlign="center" display="flex" justifyContent="center">
            <Box>
              <Typography variant="h3" className="title-font">
                Varför Renovera Med Oss?
              </Typography>
              <Box sx={{ marginTop: marginTop }}>
                <span
                  style={{
                    width: ".2rem",
                    maxWidth: ".2rem",
                    height: "auto",
                    marginRight: "10px",
                    backgroundColor: theme.palette.primary[500],
                  }}
                ></span>
                <Box>
                  <p className="body-paragraph">
                  Vi på BOB Våtrumsrenovering AB har en gedigen erfarenhet samt spetskompetens inom badrumsrenovering, wc-renoveringar och tvättstugor. Vi är en badrumsrenoveringsfirma som erbjuder våra kunder en helhetslösning när det kommer till allt inom badrumsrenoveringar. Vi har många lyckade uppdrag runt om i Stockholm bakom oss och brinner för att sätta igång med nya projekt. Vi fokuserar endast på badrumsrenoveringar, wc & tvättstugor vilket gör att vi kan erbjuda högsta kvalitet i alla led.
Vi har i princip daglig kontakt och således mycket goda relationer till alla stora leverantörer av material för badrum och våtrum, såsom kakel och klinker. Det innebär att det blir fördelaktigt för dig som kund att beställa hela ditt badrum via oss, både material och arbete. Du slipper blanda in flera parter och kan tryggt luta dig tillbaka medan vi färdigställer ditt badrum. 
Med vårt fastpris, tydliga tidsplan och noggranna dokumentation genom projektet, blir det enkelt för dig att kalkylera, planera och känna dig trygg med att ditt badrum håller högsta kvalité. Alla moment utförs självklart på ett fackmannamässigt sätt och vi har oberoende besiktningsmän som kontrollerar alla steg av våra projekt. 
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="row" margin="3rem 0">
          {ListBoxes.map((item) => (
            <Box className="col-12 col-md-6 col-xl-3" padding="10px" key={item.id}>
              <Box
              height="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 20px 20px -20px"
              backgroundColor="rgba(233, 229, 225, 1)"
              margin="0"
              padding="2rem 1rem"
              >
                <AnimatedLazyImage
                  src={item.src}
                  style={{ width: "70px", height: "70px"}}
                  alt={item.alt}
                />
                <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ margin: "1rem 0"}}>
                  {item.title}
                </Typography>
                <Box margin=".6rem 0" textAlign="center">
                <Typography variant="body1" className="body-paragraph">{item.text}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          className="absolute-box-why"
          sx={{
            backgroundPosition: "top",
            backgroundImage: `url(${shapes})`,
            backgroundSize: "cover",
            zIndex: "-1",
          }}
        ></Box>
      </Box>
    </Box>
  );
}


const ListBoxes = [
  {
    id: 1,
    src: sketch,
    alt: "Logo Sketch Paper",
    title: "Besiktning",
    text: "Vi tillhandahåller en utbildad besiktningsman som kontrollerar varje kritiskt moment under projektets gång, då vi anser att det alltid är bra med fyra ögon på det arbete som utförts. Tjänsten syftar till att vara en extra trygghet för dig som kund. ",
  },
  {
    id: 2,
    src: quality,
    alt: "Logo Quality",
    title: "Egenkontroller",
    text: "Vi utför egenkontroller på samtliga arbeten. Dessa överlämnats till dig som slutkund i samband med avslutningsmötet. Så säkerställer vi kvalité genom hela projektet och erbjuder en transparens för dig som beställare.",
  },
  {
    id: 3,
    src: teamwork,
    alt: "Logo Sketch Paper",
    title: "Hög tillgänglighet",
    text: "Tillgänglighet, från start till mål, är någonting vi värdesätter högt och du kan alltid vända dig till oss med dina frågor och funderingar, eller bara för att stämma av hur projektet fortlöper. ",
  },
  {
    id: 4,
    src: podium,
    alt: "Logo Sketch Paper",
    title: "100% Nöjda Kunder",
    text: "Vi på BOB VÅTRUMSRENOVERING strävar alltid efter att ha 100 % nöjda kunder. Kvalité är viktigt för oss och vi nöjer oss aldrig förrän du som beställare har fått precis det badrum som du drömt om.",
  },
  {
    id: 5,
    src: best,
    alt: "Logo Sketch Paper",
    title: "Fasta Priser",
    text: "Vi lämnar alltid ett fast pris på våra renoveringar. Du kan känna dig trygg med att priset står fast. På så sätt blir det enklare om du till exempel ska planera för finansiering.",
  },
  {
    id: 6,
    src: document,
    alt: "Logo Sketch Paper",
    title: "Dokumentation",
    text: "Med BOB VÅTRUMSRENOVERING kan du känna dig trygg, all nödvändig dokumentation överlämnas till dig som kund efter slutfört arbete! På så sätt kan du se att alla moment utförts på ett fackmannamässigt sätt.",
  },
  {
    id: 7,
    src: book,
    alt: "Logo Sketch Paper",
    title: "Utbildningar",
    text: "Vi håller oss ständigt uppdaterade gällande normer och regler inom branschen! Vi strävar efter att utvecklas hela tiden och ser till att hålla koll på trender och nya material som kommer ut på marknaden.",
  },
  {
    id: 8,
    src: offer,
    alt: "Logo Sketch Paper",
    title: "Rabatter",
    text: "Vi erbjuder alla våra kunder rabatter hos våra leverantörer. Det innebär att du kan handla hela ditt badrum via oss, även materialet. Tala med din kontaktperson för att få veta mer.",
  },

]

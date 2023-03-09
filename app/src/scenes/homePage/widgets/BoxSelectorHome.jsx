import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// Components
import Spacer from "../../../components/Spacer";
// Images & Logos
const teamwork =
  "https://storage.googleapis.com/bob-prod-images/media/assets/support.png";
const sketch =
  "https://storage.googleapis.com/bob-prod-images/media/assets/sketch.png";
const quality =
  "https://storage.googleapis.com/bob-prod-images/media/assets/quality.png";
const podium =
  "https://storage.googleapis.com/bob-prod-images/media/assets/podium.png";
const best =
  "https://storage.googleapis.com/bob-prod-images/media/assets/best-price.png";
const offer =
  "https://storage.googleapis.com/bob-prod-images/media/assets/offer.png";
const book =
  "https://storage.googleapis.com/bob-prod-images/media/assets/open-book.png";
const document =
  "https://storage.googleapis.com/bob-prod-images/media/assets/contract.png";
const collageImage4 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-4.png";
const collageImage5 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-5.png";
const collageImage6 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-6.png";

export default function WhyUs() {
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Box>
      <Box className="row" justifyContent="space-between">
        <Box className="col-12 col-lg-4">
          <Typography variant="h3" className="title-font">
            Varför renovera
            <br />
            med oss?
          </Typography>
        </Box>
        <Box className="col-12 col-lg-6 mt-3 mt-lg-0">
          <Typography variant="body1" className="body-paragraph">
            Vi på BOB Våtrumsrenovering AB har en gedigen erfarenhet samt
            spetskompetens inom badrumsrenovering, wc-renoveringar och
            tvättstugor. Vi är en badrumsrenoveringsfirma som erbjuder våra
            kunder en helhetslösning när det kommer till allt inom
            badrumsrenoveringar. Vi har många lyckade uppdrag runt om i
            Stockholm bakom oss och brinner för att sätta igång med nya projekt.
          </Typography>
        </Box>
      </Box>
      <Box className="row" mt="2rem">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={!lgScreen ? 4 : 2}
          gridTemplateRows="20vw 40vw"
        >
          <Box gridColumn="1 / span 4" gridRow="1 / span 1">
            <Box
              sx={{
                backgroundImage: `url(${collageImage4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
          <Box gridColumn="5 / span 8" gridRow="1 / span 1">
            <Box
              sx={{
                backgroundImage: `url(${collageImage5})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
          <Box gridColumn="1 / span 12" gridRow="2 / span 2">
            <Box
              sx={{
                backgroundImage: `url(${collageImage6})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box className="row" mt="2rem" justifyContent="space-between">
        <Box
          className="col-12 col-lg-6"
          sx={{ padding: !lgScreen ? "0" : "0 0 1rem 0" }}
        >
          <Typography variant="body1" className="body-paragraph">
            Vi har många lyckade uppdrag runt om i Stockholm bakom oss och
            brinner för att sätta igång med nya projekt. Vi fokuserar endast på
            badrumsrenoveringar, wc & tvättstugor vilket gör att vi kan erbjuda
            högsta kvalitet i alla led. Vi har i princip daglig kontakt och
            således mycket goda relationer till alla stora leverantörer av
            material för badrum och våtrum, såsom kakel och klinker. Det innebär
            att det blir fördelaktigt för dig som kund att beställa hela ditt
            badrum via oss, både material och arbete. Du slipper blanda in flera
            parter och kan tryggt luta dig tillbaka medan vi färdigställer ditt
            badrum.
          </Typography>
        </Box>
        <Box
          className="col-12 col-lg-5"
          sx={{ padding: !lgScreen ? "0 0 0 1rem" : "0" }}
        >
          <Typography variant="body1" className="body-paragraph">
            Med vårt fastpris, tydliga tidsplan och noggranna dokumentation
            genom projektet, blir det enkelt för dig att kalkylera, planera och
            känna dig trygg med att ditt badrum håller högsta kvalité. Alla
            moment utförs självklart på ett fackmannamässigt sätt och vi har
            oberoende besiktningsmän som kontrollerar alla steg av våra projekt.
          </Typography>
        </Box>
      </Box>
      <Spacer />
      <hr />
      <Spacer />
      <Box className="row">
        {ListBoxes.map((item, index) => (
          <Box
            key={index}
            className="col-12 col-md-6 col-lg-3"
            padding={!lgScreen ? "1rem" : "0"}
          >
            <Box display="flex" alignItems="center">
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  paddingLeft: "1rem",
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{ color: "rgba(0, 0, 0, 0.7)", padding: "1rem 0" }}
              >
                {item.text}
              </Typography>
            </Box>
          </Box>
        ))}
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
];

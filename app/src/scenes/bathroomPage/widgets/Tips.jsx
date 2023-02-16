import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

// Images
const tip1 = "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome1.webp"

import AnimatedLazyImage from "../../../components/LazyImage";

export default function TipsCarousel() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselIconStyle = {
    fontSize: "2rem",
    color: theme.palette.primary[500],
    transition: "200ms",
    "&:hover": {
      transform: "scale(1.2)",
    },
  };

  return (
    <Box className="row" width="100%">
      <Carousel
        id="tips-carousel"
        indicators={false}
        nextIcon={<ArrowForwardIosIcon sx={carouselIconStyle} />}
        prevIcon={<ArrowBackIosNewIcon sx={carouselIconStyle} />}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        style={{ backgroundColor: "#5864871a" }}
      >
        {tipsData.map((item, i) => (
          <Carousel.Item key={i}>
            <Box
              className="row"
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                className={`col-12 col-lg-6 ${
                  !lgScreen
                    ? item.id % 2 === 0
                      ? "order-last"
                      : "order-first"
                    : "order-first"
                }`}
              >
                <AnimatedLazyImage
                  src={item.image}
                  className="img-fluid"
                  alt={item.title}
                />
              </Box>
              <Box
                className="col-12 col-lg-6"
                sx={{ padding: smallScreen ? "1rem 1rem 3rem 1rem" : "3rem" }}
              >
                <Box className="TextBox">
                  <Typography variant="h2" className="carousel-title-font">
                    <span style={{ marginRight: ".5rem" }}>{item.id}.</span>
                    {item.title}
                  </Typography>
                  <Box display="flex" mt="1.3rem">
                    <span
                      style={{
                        width: ".4rem",
                        maxWidth: ".2rem",
                        height: "auto",
                        marginRight: "1rem",
                        backgroundColor: theme.palette.primary[500],
                      }}
                    ></span>
                    <p className="body-paragraph">{item.paragraph}</p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

const tipsData = [
  {
    id: 1,
    number: "",
    image: tip1,
    title:
      "Bestäm dig för hur mycket pengar du kan avsätta för en badrumsrenovering",
    paragraph:
      "Det finns oändligt många saker man kan göra när man vill renovera badrum. Men plånboken räcker inte till allt. Det är viktigt att man innan man tar kontakt med en hantverkare bestämmer sig för hur mycket pengar man är beredd att lägga.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 2,
    number: "",
    image: tip1,
    title: "Leta upp en erfaren hantverkare!",
    paragraph:
      "En vanlig miss när man ska renovera sitt badrum är att man skickar ut en bred offert till en massa hantverkare. Det är inte alltid en bra idé. Av flera skäl. Risken att skicka ut en allt för bred offert är att man får in en massa anbud och så tar man det billigaste. Risken är då att man väljer en hantverkare som inte är särskilt erfaren och som sedan gör ett sämre jobb och använder dåligt material. Gör en ordentlig research och se till att anlita en bra fackman.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 3,
    number: "",
    image: tip1,
    title: "Mät upp ditt badrum och gör en ritning.",
    paragraph:
      "När du väl har hittat en bra hantverkare i Stockholm för en badrumsrenovering så måste du se till att mäta upp ditt badrum så att hantverkaren har möjlighet att bilda sig en uppfattning av badrummet som han eller hon ska renovera.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 4,
    number: "",
    image: tip1,
    title: "Ta inspiration från andra badrumsrenoveringar.",
    paragraph:
      "Det kan vara svårt att veta exakt hur man vill ha sitt badrum. Det bästa sättet att få inspiration till hur en badrumsrenovering kan göras är att titta på tex. pintrest eller instagram. De finns 1000 olika sätt att renovera badrummet på och det är bara fantasin som sätter stopp för att få just ditt dröm badrum.",
  },
  {
    id: 5,
    number: "",
    image: tip1,
    title:
      "Rådgör med en hantverkare om vad som är möjligt för just ditt badrum.",
    paragraph:
      "Det kan vara svårt för en lekman att veta hur man ska renovera ett badrum och veta precis vad som är möjligt när det gäller att renovera badrum. Säkerställ därför med hantverkaren att det är möjligt att renovera badrum på det sätt som du vill.",
    link: "/kontakt",
    linkText: "Kontakt",
  },
  {
    id: 6,
    number: "",
    image: tip1,
    title: "Anlita bara en hantverkare som har F-skatt.",
    paragraph:
      "Om du ska kunna göra ROT-avdrag för en badrumsrenovering så behöver hantverkaren ha F-skattsedel.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 7,
    number: "",
    image: tip1,
    title: "Fundera över vilket material du vill använda.",
    paragraph:
      "Kolla med din förening om badrumsrenoveringen kräver någon form av anmälan eller bygglov. I 9 av 10 fall räcker det endast med ett mejl till ordförande där ni förklarar att ni vill renovera badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 8,
    number: "",
    image: tip1,
    title: "Bestäm vilken inredning du vill ha i badrummet.",
    paragraph:
      "Informera hantverkaren om vilken inredning du vill ha i badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 9,
    number: "",
    image: tip1,
    title: "Säkerställ att renoveringen är försäkrad.",
    paragraph:
      "Det är viktigt att du har ett fullgott försäkringsskydd när du ska renovera badrummet. Be alltid hantverkaren att skicka över sitt försäkringsbevis.",
    link: "kontakt",
    linkText: "Kontakt",
  },
  {
    id: 10,
    number: "",
    image: tip1,
    title: "Säkerställ att du inte behöver bygglov.",
    paragraph:
      "Det finns oändligt många saker man kan göra när man vill renovera badrum. Men plånboken räcker inte till allt. Det är viktigt att man innan man tar kontakt med en hantverkare bestämmer sig för hur mycket pengar man är beredd att lägga.",
    link: "kontakt",
    linkText: "Kontakt",
  },
];

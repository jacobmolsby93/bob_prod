import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import Spacer from "../../../components/Spacer";
import ButtonOrange from "../../../components/ButtonOrange.jsx";
import ButtonWhite from "../../../components/ButtonWhite.jsx";
import Call from "@mui/icons-material/Call";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// Images
const tip1 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome1.webp";
const tip2 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome2.webp";
const tip3 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome3.webp";
const tip4 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/carouselhome4.webp";
const tip5 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-1.webp";
const tip6 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-2.webp";
const tip7 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-4.webp";
const tip8 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-5.webp";
const tip9 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-6.webp";
const tip10 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/contact-background.webp";
const logoShapeGrey =
  "https://storage.googleapis.com/bob-prod-images/media/assets/logo-shape-icon-grey.png";

export default function TipsCarousel() {
  const theme = useTheme();
  const ref = useRef();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const mdScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [selected, setSelected] = useState(tipsData[0]);
  const [direction, setDirection] = useState(null);
  const [rect, setRect] = useState();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleNext = () => {
    const nextIndex = selected.id + 1;
    if (nextIndex <= tipsData.length) {
      setDirection("next");
      setSelected(tipsData[nextIndex - 1]);
    } else {
      setSelected(tipsData[0]); // loop back to the first item
      setDirection("next");
    }
  };

  const handlePrev = () => {
    const prevIndex = selected.id - 1;
    if (prevIndex >= 1) {
      setDirection("prev");
      setSelected(tipsData[prevIndex - 1]);
    } else {
      setSelected(tipsData[tipsData.length - 1]); // loop back to the last item
      setDirection("prev");
    }
  };

  const [maxHeight, setMaxHeight] = useState(0);

  // Ref to the wrapper div
  const wrapperRef = useRef(null);

  // Calculate the maximum height of the items in the array
  useEffect(() => {
    if (smallScreen) {
      const heights = tipsData.map((post) => {
        const { height } = wrapperRef.current.querySelector(
          `div[data-id="${post.id}"]`
        ).getBoundingClientRect();
        return height;
      });
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  return (
    <Box>
      <Box className="container">
        {/* Title section */}
        <Box className="row">
          <Box className="col-12" textAlign="center">
            <Typography variant="h4" className="title-font" mb="3rem">
              10 Tips Inför Din Badrumsrenovering
            </Typography>
            <Box className="flex-centerd-justify" mb="4rem">
              <Typography
                variant="body1"
                className="body-paragraph"
                style={{
                  width: smallScreen || mdScreen ? "100%" : "70%",
                  textAlign: "center",
                }}
              >
                Den som äger ett hus eller en lägenhet i Stockholm behöver lägga
                tid och pengar för att renovera sin bostad. En av de vanligaste,
                och roligaste rummen att renovera enligt oss är såklart badrum!
              </Typography>
            </Box>
            <hr />
          </Box>
        </Box>
      </Box>
      <Box className="wrapper" position="relative">
        {/* Controls */}
        {!smallScreen && (
          <Box sx={absoluteBox}>
            <Box sx={absolutePrev}>
                <span onClick={handlePrev} style={{ zIndex: 99, cursor: "pointer"}}>
                  <ArrowBackIosNewIcon sx={{ color: theme.palette.primary[500], fontSize: "2rem"}}/>
                </span>
            </Box>
            <Box sx={absoluteNext}>
              <span onClick={handleNext} style={{ zIndex: 99, cursor: "pointer"}}>
                  <ArrowForwardIosIcon sx={{ color: theme.palette.primary[500], fontSize: "2rem"}}/>
                </span>
            </Box>
          </Box>
        )}
        <Spacer />
        <Box className="container" height="fit-content" overflow="hidden">
          <AnimatePresence mode="wait">
            {/* Carousel */}
            {selected &&
              /* Desktop Carousel */
              (!smallScreen ? (
                <motion.div
                  className="row"
                  key={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: "0%",
                    transition: { duration: 0.5, type: "spring", bounce: 0.25 },
                  }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                  {/* Text Box */}
                  <motion.div
                    className="col-12 col-lg-6 order-last order-lg-first"
                    style={{
                      padding: !lgScreen ? "0 3rem 0 0" : "2rem 2rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: theme.palette.primary[500],
                        position: "relative",
                        left: lgScreen ? "100%" : "0",
                      }}
                      className="title-font"
                    >
                      {selected.id}
                    </span>
                    <Typography variant="h5" className="title-font">
                      {selected.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      className="body-paragraph"
                      sx={{ marginTop: "1rem" }}
                    >
                      {selected.paragraph}
                    </Typography>
                    <Box mt="2rem">
                      <ButtonOrange
                        buttonText="Skriv till oss"
                        aria="Klicka för att komma till kontakta oss"
                        ariaAtag="Länk till kontakt sidan"
                        href="kontakt"
                      />
                      <ButtonWhite
                        icon={<Call sx={{ marginRight: "5px" }} />}
                        buttonText="08-33 36 63"
                        aria="Klicka för att ringa BOB VÅTRUMSRENOVERING"
                        ariaAtag="Länk med företagets telefonnummer"
                        href="tel:08-333663"
                      />
                    </Box>
                  </motion.div>
                  {/* Image Box */}

                  <motion.div className={`col-12 col-lg-6`}>
                    <img
                      src={selected.image}
                      alt={selected.title}
                      style={{
                        width: "100%",
                        height: "450px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </motion.div>
                </motion.div>
              ) : (
                /* Mobile Carousel */
                <Box ref={wrapperRef} minHeight={`${maxHeight}px`} sx={{ display: "flex", alignItems: "flex-start"}}>
                <Carousel id="tip-carousel">
                  {tipsData.map((post, uuid) => (
                    <Carousel.Item key={uuid} data-id={post.id}>
                      <Box className="col-12 col-md-6 col-lg-4" padding=".75rem">
                        <Card sx={cardStyle}>
                          <Box
                            className="card-header"
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            paddingBottom="1rem"
                          >
                            <Box display="flex" alignItems="center">
                              <Box position="relative" left="-10px">
                                <Box
                                  sx={{
                                    backgroundColor: "#fff",
                                    borderRadius: "50%",
                                    display: "flex",
                                    justifyContent: "center",
                                    position: "absolute",
                                    alignItems: "center",
                                    height: "55px",
                                    width: "55px",
                                  }}
                                >
                                  <span style={{ color: theme.palette.primary[500], fontSize: "2rem", fontWeight: "bold"}}>
                                    {post.id}
                                  </span>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                          <CardMedia
                            component="img"
                            alt="Instagram"
                            sx={{ height: "250px", objectFit: "cover" }}
                            height="100%"
                            image={post.image}
                            title="Instagram"
                          />
                          <CardContent>
                            <Typography variant="h5" className="subtitle-font">
                              {post.title}
                            </Typography>
                            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                              {post.paragraph}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Box>
              ))}
          </AnimatePresence>
          {!smallScreen && (
            <Box
              className="row"
              mt="2rem"
              justifyContent="center"
              sx={{
                right: "15px",
              }}
            >
              {tipsData.map((item, index) => (
                <span
                  key={index}
                  style={{
                    height: ".2rem",
                    width: selected.id === item.id ? "5rem" : "2rem",
                    margin: ".4rem",
                    backgroundColor:
                      selected.id === item.id
                        ? theme.palette.primary[500]
                        : theme.palette.primary[100],
                  }}
                ></span>
              ))}
            </Box>
          )}
        </Box>
      </Box>
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
      "Det finns oändligt många saker man kan göra när man vill renovera badrum. Men plånboken räcker inte till allt. Det är viktigt att man innan man tar kontakt med en hantverkare bestämmer sig för hur mycket pengar man är beredd att lägga samt att du bestämmer dig för hur badrummet ska se ut. Ska du ha golvvärme, spottar, handukstork, vägghäng-wc osv.",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 2,
    number: "",
    image: tip2,
    title: "Leta upp ett tryggt företag!",
    paragraph:
      "En vanlig miss när man ska renovera sitt badrum är att man skickar ut en bred offert till en massa företag. Det är inte alltid en bra idé. Av flera skäl. Risken att skicka ut en allt för bred offert är att man får in en massa anbud och så blir det svårt att jämföra. Vårt tips är att ni skriver ner vad ni vill få gjort i badrummet och sedan skickar ut en offertförfrågan till de utvalda företagen då blir det mycket enklare att jämföra och ni får förhoppningsvis offerter som är lika varandra när det kommer till innehåll. Gör en ordentlig research och se till att anlita ett tryckt och bra företag!",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 3,
    number: "",
    image: tip3,
    title: "Förbered dig inför hembesöket.",
    paragraph:
      "När företaget kommer hem till dig för att kolla på badrummet så tar dem vanligtvis mått på badrummet och ställer en rad frågor för att ta reda på hur du vill ha ditt badrum. Se till att skriva ner mycket frågor och försök tänka till hur du skulle vilja ha ditt nya badrum för att enklare kunna ge en bra bild till företaget som kommer ut.",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 4,
    number: "",
    image: tip4,
    title: "Ta inspiration från andra badrumsrenoveringar.",
    paragraph:
      "Det kan vara svårt att veta exakt hur man vill ha sitt badrum. Det bästa sättet att få inspiration till hur en badrumsrenovering kan göras är att titta på tex. pintrest eller instagram. De finns 1000 olika sätt att renovera badrummet på och det är bara fantasin som sätter stopp för att få just ditt dröm badrum. Kika gärna in på våran Instagram eller TikTok för att hämta inspiration.",
    ref: React.createRef(),
  },
  {
    id: 5,
    number: "",
    image: tip5,
    title:
      "Rådgör med oss om vad som är möjligt för just ditt badrum.",
    paragraph:
      "Det kan vara svårt för en lekman att veta hur man ska renovera ett badrum och veta precis vad som är möjligt när det gäller att renovera badrum. Säkerställ därför med oss att det är möjligt att renovera badrum på det sätt som du vill.",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 6,
    number: "",
    image: tip6,
    title: "Anlita bara en hantverkare som har F-skatt.",
    paragraph:
      "Om du ska kunna göra ROT-avdrag för en badrumsrenovering så behöver hantverkaren ha F-skattsedel.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 7,
    number: "",
    image: tip7,
    title: "Kolla vilka du behöver informera om din badrumsrenovering om du bor i lägenhet eller radhus.",
    paragraph:
      "Kolla med din förening om badrumsrenoveringen kräver någon form av anmälan. I 9 av 10 fall räcker det endast med ett mejl till ordförande där ni förklarar att ni vill renovera badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 8,
    number: "",
    image: tip8,
    title: "Bestäm vilken inredning du vill ha i badrummet.",
    paragraph:
      "Hos oss får du hjälp med att välja inredning, kakel & klinker hos någon av våra samarbetspartners. Fråga din kundansvarige så informerar denna dig!",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 9,
    number: "",
    image: tip9,
    title: "Säkerställ att renoveringen är försäkrad.",
    paragraph:
      "Det är viktigt att du har ett fullgott försäkringsskydd när du ska renovera badrummet. Be alltid företaget att skicka över sitt försäkringsbevis.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 10,
    number: "",
    image: tip10,
    title: "Ta in en besiktningsman för att säkerhetsställa att renoveringen blir godkänd!",
    paragraph:
      "Det finns många företag på marknaden, vi besiktar alltid våra badrum med vår interna besiktningsman uppdelat i sex besiktningstillfällen. Det är långt ifrån alla företag som gör detta. Ta därför alltid in en besiktningsman som följer renoveringen och ser till att allt blir utfört enligt gällande branschregler. Att ett företag är behörigt betyder inte alltid att dem gör rätt.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
];

// Styles

const absoluteBox = {
  position: "absolute",
  top: 0,
  bottom: 0,
  height: "100%",
  width: "100%",
  zIndex: 10,
};

const absolutePrev = {
  position: "absolute",
  top: 0,
  left: "50px",
  bottom: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
};

const absoluteNext = {
  position: "absolute",
  top: 0,
  right: "50px",
  bottom: 0,
  height: "100%",
  display: "flex",
  alignItems: "center",
};

const cardStyle = {
  padding: "1rem",
  boxShadow: "0",
};

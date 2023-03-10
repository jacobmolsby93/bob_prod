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
        const { height } = wrapperRef.current
          .querySelector(`div[data-id="${post.id}"]`)
          .getBoundingClientRect();
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
              10 Tips Inf??r Din Badrumsrenovering
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
                Den som ??ger ett hus eller en l??genhet i Stockholm beh??ver l??gga
                tid och pengar f??r att renovera sin bostad. En av de vanligaste,
                och roligaste rummen att renovera enligt oss ??r s??klart badrum!
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
              <span
                onClick={handlePrev}
                style={{ zIndex: 99, cursor: "pointer" }}
              >
                <ArrowBackIosNewIcon
                  sx={{ color: theme.palette.primary[500], fontSize: "2rem" }}
                />
              </span>
            </Box>
            <Box sx={absoluteNext}>
              <span
                onClick={handleNext}
                style={{ zIndex: 99, cursor: "pointer" }}
              >
                <ArrowForwardIosIcon
                  sx={{ color: theme.palette.primary[500], fontSize: "2rem" }}
                />
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
                      padding: !lgScreen ? "0 3rem 0 0" : "0 2rem 0 0",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: theme.palette.primary[500],
                        position: "relative",
                        left: smallScreen ? "100%" : "0",
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
                        aria="Klicka f??r att komma till kontakta oss"
                        ariaAtag="L??nk till kontakt sidan"
                        href="kontakt"
                      />
                      <ButtonWhite
                        icon={<Call sx={{ marginRight: "5px" }} />}
                        buttonText="08-33 36 63"
                        aria="Klicka f??r att ringa BOB V??TRUMSRENOVERING"
                        ariaAtag="L??nk med f??retagets telefonnummer"
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
                <Box
                  ref={wrapperRef}
                  minHeight={`${maxHeight}px`}
                  sx={{ display: "flex", alignItems: "flex-start" }}
                >
                  <Carousel id="tip-carousel">
                    {tipsData.map((post, uuid) => (
                      <Carousel.Item key={uuid} data-id={post.id}>
                        <Box
                          className="col-12 col-md-6 col-lg-4"
                          padding=".75rem"
                        >
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
                                    <span
                                      style={{
                                        color: theme.palette.primary[500],
                                        fontSize: "2rem",
                                        fontWeight: "bold",
                                      }}
                                    >
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
                              <Typography
                                variant="h5"
                                className="subtitle-font"
                              >
                                {post.title}
                              </Typography>
                              <Typography
                                variant="body1"
                                sx={{ marginTop: "1rem" }}
                              >
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
      "Best??m dig f??r hur mycket pengar du kan avs??tta f??r en badrumsrenovering",
    paragraph:
      "Det finns o??ndligt m??nga saker man kan g??ra n??r man vill renovera badrum. Men pl??nboken r??cker inte till allt. Det ??r viktigt att man innan man tar kontakt med en hantverkare best??mmer sig f??r hur mycket pengar man ??r beredd att l??gga samt att du best??mmer dig f??r hur badrummet ska se ut. Ska du ha golvv??rme, spottar, handukstork, v??ggh??ng-wc osv.",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 2,
    number: "",
    image: tip2,
    title: "Leta upp ett tryggt f??retag!",
    paragraph:
      "En vanlig miss n??r man ska renovera sitt badrum ??r att man skickar ut en bred offert till en massa f??retag. Det ??r inte alltid en bra id??. Av flera sk??l. Risken att skicka ut en allt f??r bred offert ??r att man f??r in en massa anbud och s?? blir det sv??rt att j??mf??ra. V??rt tips ??r att ni skriver ner vad ni vill f?? gjort i badrummet och sedan skickar ut en offertf??rfr??gan till de utvalda f??retagen d?? blir det mycket enklare att j??mf??ra och ni f??r f??rhoppningsvis offerter som ??r lika varandra n??r det kommer till inneh??ll. G??r en ordentlig research och se till att anlita ett tryckt och bra f??retag!",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 3,
    number: "",
    image: tip3,
    title: "F??rbered dig inf??r hembes??ket.",
    paragraph:
      "N??r f??retaget kommer hem till dig f??r att kolla p?? badrummet s?? tar dem vanligtvis m??tt p?? badrummet och st??ller en rad fr??gor f??r att ta reda p?? hur du vill ha ditt badrum. Se till att skriva ner mycket fr??gor och f??rs??k t??nka till hur du skulle vilja ha ditt nya badrum f??r att enklare kunna ge en bra bild till f??retaget som kommer ut.",
    link: "/kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 4,
    number: "",
    image: tip4,
    title: "Ta inspiration fr??n andra badrumsrenoveringar.",
    paragraph:
      "Det kan vara sv??rt att veta exakt hur man vill ha sitt badrum. Det b??sta s??ttet att f?? inspiration till hur en badrumsrenovering kan g??ras ??r att titta p?? tex. pintrest eller instagram. De finns 1000 olika s??tt att renovera badrummet p?? och det ??r bara fantasin som s??tter stopp f??r att f?? just ditt dr??m badrum. Kika g??rna in p?? v??ran Instagram eller TikTok f??r att h??mta inspiration.",
    ref: React.createRef(),
  },
  {
    id: 5,
    number: "",
    image: tip5,
    title: "R??dg??r med oss om vad som ??r m??jligt f??r just ditt badrum.",
    paragraph:
      "Det kan vara sv??rt f??r en lekman att veta hur man ska renovera ett badrum och veta precis vad som ??r m??jligt n??r det g??ller att renovera badrum. S??kerst??ll d??rf??r med oss att det ??r m??jligt att renovera badrum p?? det s??tt som du vill.",
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
      "Om du ska kunna g??ra ROT-avdrag f??r en badrumsrenovering s?? beh??ver hantverkaren ha F-skattsedel.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 7,
    number: "",
    image: tip7,
    title:
      "Kolla vilka du beh??ver informera om din badrumsrenovering om du bor i l??genhet eller radhus.",
    paragraph:
      "Kolla med din f??rening om badrumsrenoveringen kr??ver n??gon form av anm??lan. I 9 av 10 fall r??cker det endast med ett mejl till ordf??rande d??r ni f??rklarar att ni vill renovera badrummet.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 8,
    number: "",
    image: tip8,
    title: "Best??m vilken inredning du vill ha i badrummet.",
    paragraph:
      "Hos oss f??r du hj??lp med att v??lja inredning, kakel & klinker hos n??gon av v??ra samarbetspartners. Fr??ga din kundansvarige s?? informerar denna dig!",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 9,
    number: "",
    image: tip9,
    title: "S??kerst??ll att renoveringen ??r f??rs??krad.",
    paragraph:
      "Det ??r viktigt att du har ett fullgott f??rs??kringsskydd n??r du ska renovera badrummet. Be alltid f??retaget att skicka ??ver sitt f??rs??kringsbevis.",
    link: "kontakt",
    linkText: "Kontakt",
    ref: React.createRef(),
  },
  {
    id: 10,
    number: "",
    image: tip10,
    title:
      "Ta in en besiktningsman f??r att s??kerhetsst??lla att renoveringen blir godk??nd!",
    paragraph:
      "Det finns m??nga f??retag p?? marknaden, vi besiktar alltid v??ra badrum med v??r interna besiktningsman uppdelat i sex besiktningstillf??llen. Det ??r l??ngt ifr??n alla f??retag som g??r detta. Ta d??rf??r alltid in en besiktningsman som f??ljer renoveringen och ser till att allt blir utf??rt enligt g??llande branschregler. Att ett f??retag ??r beh??rigt betyder inte alltid att dem g??r r??tt.",
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

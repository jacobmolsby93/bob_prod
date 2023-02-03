import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

// Images
import kitchen from "../../../assets/kitchen.webp";
import bathroom from "../../../assets/bathroom.webp";

// Spacer
import Spacer from "../../../components/Spacer";

import AnimatedLazyImage from "../../../components/LazyImage";

const services = [
  {
    serviceImage: bathroom,
    serviceTitle: "Badrumsrenovering",
    serviceText:
      "Är det dags att renovera badrummet? Låt BOB vara med och räkna på vad det skulle kosta! Vi renoverar ett stort antal badrum och tvättstugor varje år. När vi utför en badrumsrenovering får ni alltid ett fast pris, en fastställd tidplan och en kontaktperson som är med er hela vägen från start till slut.",
    serviceLink: "/vara-tjanster/badrumsrenovering",
    id: 1,
  },
  {
    serviceImage: kitchen,
    serviceTitle: "Köksrenovering",
    serviceText:
      "Är det dags att renovera köket? Från skiss till färdigt kök, vi hjälper dig hela vägen! Vi lämnar alltid 2 års garanti, 10 års ansvarstid, fast pris och tidsplan på din köksrenovering. Vi på BOB hjälper er att förverkliga ert drömkök.",
    serviceLink: "/vara-tjanster/koksrenovering",
    id: 2,
  },
  {
    serviceImage: kitchen,
    serviceTitle: "Totalrenovering",
    serviceText:
      "Behöver du totalrenovera bostaden? Vi på Bygg & BadrumsPartner är specialiserade på totalrenoveringar och hjälper mer än gärna till med helhetslösningar.",
    serviceLink: "/vara-tjanster/totalrenovering-stockholm",
    id: 3,
  },
];

export default function ServiceBox() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const theme = useTheme();

  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    padding: 0,
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
      padding: "6px 16px",
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };
  return (
    <Box className={!lgScreen ? "" : "container"}>
      {!lgScreen ? null : <Spacer />}
      {services.map((item) => (
        <Box className="row" key={item.id}>
          <Box
            className={`col-12 col-lg-6 ${item.id % 2 === 0 && "mt-5 mt-lg-0"}`}
          >
            <AnimatedLazyImage
              src={item.serviceImage}
              alt="A detailed description of the image"
              title="A title for the image"
              style={{
                width: "100%",
                height: "100%",
                maxHeight: "660px",
                objectFit: "cover",
              }}
            />
          </Box>
          <Box
            className={`col-12 col-lg-6 ${
              item.id % 2 === 0 && "order-last order-lg-first"
            }`}
            padding={lgScreen ? "2rem 0 0 0" : "0 2rem 0 2rem"}
          >
            <Box className="flex-centerd-align" height="100%">
              <article>
                <Typography variant="h2" className="title-font">
                  {item.serviceTitle}
                </Typography>
                <Box display="flex" mt="3rem">
                  <span
                    style={{
                      maxWidth: ".2rem",
                      width: "1rem",
                      height: "auto",
                      marginRight: "1rem",
                      backgroundColor: "#c2662d",
                    }}
                  ></span>
                  <p className="body-paragraph">{item.serviceText}</p>
                </Box>
                <Box mt="2.5rem">
                  <Button
                    variant="contained"
                    sx={buttonStyleContained}
                    aria-label={`Klicka för att komma till sidan ${item.serviceTitle} oss`}
                  >
                    <Link
                      sx={buttonStyleContained}
                      to={item.serviceLink}
                      className="button-text"
                      aria-label={`Länk till sidan ${item.serviceTitle}`}
                    >
                      Läs mer om {item.serviceTitle}
                    </Link>
                  </Button>
                </Box>
              </article>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

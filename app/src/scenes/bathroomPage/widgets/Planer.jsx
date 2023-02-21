import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import AnimatedLazyImage from "../../../components/LazyImage";

// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Images
const collageImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-light.webp";

export default function Planer() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const arrowIcon = {
    color: theme.palette.primary[500],
    fontSize: "1.7rem",
  };
  return (
    <div>
      <Box className="row">
        <Box
          className="col-12 col-xl-6 order-last order-xl-first"
          sx={{ marginTop: "20px" }}
        >
          <Typography variant="h2" component="h2" className="title-font">
            Bra Att Tänka På När Du Planerar Ditt Badrum!
          </Typography>
          <Box display="flex" mt="30px">
            <span
              style={{
                width: ".7rem",
                maxWidth: ".2rem",
                height: "auto",
                marginRight: "1rem",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p className="body-paragraph">
              Att renovera badrum är både en passion och en av våra
              specialiteter och vi har mer än tio års erfarenhet av renovering
              och ombyggnation i Stockholm med omnejd. Om du väljer oss så får
              du ett fast pris, en tydlig och fastställd tidplan som respekteras
              samt en engagerad projektledare.
            </p>
          </Box>

          <Box>
            <List className="list-unstyled">
              {tips.map((tip, index) => (
                <ListItem key={index} sx={{ paddingLeft: "0" }}>
                  <span style={{ marginRight: "1rem" }}>
                    <ArrowForwardIcon sx={arrowIcon} />
                  </span>
                  {tip}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box
          className="col-12 col-xl-6"
          sx={{ paddingLeft: !lgScreen ? "3rem" : "0" }}
        >
          <AnimatedLazyImage
            src={collageImage}
            className="img-fluid"
            style={{ maxHeight: "100%" }}
            alt="Collage med 3 bilder på olika badrum"
          />
        </Box>
      </Box>
    </div>
  );
}

const tips = [
  "De går bra att handla porslin från olika tillverkare i badrummet.",
  "Spegeln eller spegelskåpet bör inte vara bredare än handfatet och tänk på bra belysning.",
  "Duschvägg? Ska den vara vikbar, fast, skjutbar, rund eller platsbyggd?",
  "Vill du ha en golvstående eller vägghängd toalett?",
  "Vilka blandare vill du ha till duschen, badkaret och tvättstället?",
  "Ska handdukstorken vara elektrisk eller vattenburen? Ska den vara diskret eller som ett smycke på väggen.",
];

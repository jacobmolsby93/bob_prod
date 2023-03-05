import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Images
const collageImage1 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/collage-image-1.webp";
const collageImage2 =
  "https://storage.googleapis.com/bob-prod-images/media/assets/bathroom-planner.webp";
const LogoShape =
  "https://storage.googleapis.com/bob-prod-images/media/assets/logo-shape-icon.png";

export default function Planer() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const arrowIcon = {
    color: theme.palette.primary[500],
    fontSize: "1.2rem",
  };
  return (
    <div>
      <Box className="row">
        <Box className="col-12 col-xl-6" sx={{ marginTop: "20px" }}>
          <Typography variant="h2" component="h2" className="title-font">
            Bra Att Tänka På När Du Planerar Ditt Badrum!
          </Typography>
          <Box display="flex" mt="30px">
            <Typography variant="body1" className="body-paragraph">
              Att renovera badrum är både en passion och en av våra
              specialiteter och vi har mer än tio års erfarenhet av renovering
              och ombyggnation i Stockholm med omnejd. Om du väljer oss så får
              du ett fast pris, en tydlig och fastställd tidplan som respekteras
              samt en engagerad projektledare.
            </Typography>
          </Box>

          <Box>
            <List className="list-unstyled">
              {tips.map((tip, index) => (
                <ListItem key={index} sx={{ paddingLeft: "0" }}>
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "1rem",
                      backgroundImage: `url(${LogoShape})`,
                      backgroundPosition: "center",
                      height: "30px",
                      width: "30px",
                      minWidth: "30px",
                      minHeight: "30px",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                  >
                    <ArrowForwardIcon sx={arrowIcon} />
                  </span>
                  {tip}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        <Box
          className="col-12 col-xl-6 order-first"
          sx={{
            paddingRight: !lgScreen ? "3rem" : "0",
            display: "flex",
            position: "relative",
            bottom: !lgScreen ? "-50px" : "",
          }}
        >
          {!lgScreen ? (
            <>
              <Box
                sx={{
                  padding: "0 10px 0 0",
                  position: "relative",
                  top: "-50px",
                }}
              >
                <img
                  src={collageImage2}
                  alt="Bild på ett ljust badrum"
                  className="img-fluid"
                  style={{
                    height: "100%",
                    maxHeight: "600px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Box padding="0 0 0 10px">
                <img
                  src={collageImage1}
                  alt="Bild på ett handfat"
                  className="img-fluid"
                  style={{
                    height: "100%",
                    maxHeight: "600px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Box>
            </>
          ) : (
            <img
              src={collageImage2}
              style={{
                maxHeight: "400px",
                width: "100%",
                minWidth: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              className="img-fluid"
              alt="Bild på ett handfat"
            />
          )}
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

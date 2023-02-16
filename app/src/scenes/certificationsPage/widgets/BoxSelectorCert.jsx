import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import data from "../../../data/certData.json";
import LaunchIcon from "@mui/icons-material/Launch";
import AnimatedLazyImage from "../../../components/LazyImage";

const shapes = "https://storage.googleapis.com/bob-prod-images/media/assets/backgroundshapes.png"

export default function WhyUs() {
  const theme = useTheme();
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const mediumScreen = useMediaQuery(() => theme.breakpoints.down("md  "));
  const [certData, setCertData] = useState(data.entries);
  const [selected, setSelected] = useState(certData[0].id);

  const titleFontSize = "44px";
  const marginTop = "20px";
  const marginRight = "20px";
  // Map Grid Items
  const GridItem = ({ src, alt, id }) => {
    const [hover, setHover] = useState(false);
    return (
      <Grid item xs={6} lg={5}>
        <Box
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => setSelected(id)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ECEAE8",
            cursor: "pointer",
            boxShadow: hover
              ? "0px 0px 4px 4px rgba(194, 102, 45, 0.5)"
              : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            transition: "300ms",
            height: "100%",
            width: "100%",
          }}
        >
          <AnimatedLazyImage
            id={id}
            src={src}
            style={{
              borderRadius: "7px",
              padding: "20%",
              width: "100%",
              height: "100%",
            }}
            alt={alt}
          />
        </Box>
      </Grid>
    );
  };

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: "rgba(233, 229, 225, 0.55)",
        minHeight: "70vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        className="container"
        minHeight="100%"
        display="flex"
        alignItems="center"
      >
        <Box
          className="flex-centerd-align"
          sx={{ padding: !lgScreen ? "" : "30px 0" }}
        >
          <Box
            className="row flex-centerd-align"
            justifyContent="space-between"
            display="flex"
            flexDirection={mediumScreen ? "column" : "row"}
            zIndex="100"
          >
            <Box className="col-12 col-lg-6">
              {certData.map((text) => {
                return selected == text.id ? (
                  <Box key={text.id}>
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      fontSize="20px"
                      color={theme.palette.primary[500]}
                    >
                      {text.subtitle}
                    </Typography>
                    <Typography
                      variant="h2"
                      fontWeight="bold"
                      sx={{ fontSize: `clamp(32px, 4vw, ${titleFontSize})` }}
                    >
                      {text.title}
                    </Typography>
                    <Box sx={{ marginTop: marginTop }} display="flex">
                      <span
                        style={{
                          width: "18px",
                          maxWidth: ".2rem",
                          height: "auto",
                          marginRight: "10px",
                          backgroundColor: theme.palette.primary[500],
                        }}
                      ></span>
                      <p className="body-paragraph">{text.body}</p>
                    </Box>
                    <Box
                      sx={{ marginTop: marginTop }}
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Button
                        aria-label={`Klicka för att komma till ${text.subtitle} hemsida`}
                        variant="contained"
                        sx={{
                          borderRadius: "0",
                          backgroundColor: theme.palette.primary[500],
                          marginRight: marginRight,
                          "&>a": {
                            color: theme.palette.background.default,
                            textDecoration: "none",
                          },
                          "&:hover": {
                            backgroundColor: theme.palette.primary[600],
                          },
                        }}
                      >
                        <a
                          aria-label="Lönk till företagets hemsida"
                          className="button-text flex-centerd-align"
                          href={text.url}
                          target="_blank"
                        >
                          Läs Mer <LaunchIcon sx={{ marginLeft: ".5rem" }} />
                        </a>
                      </Button>
                    </Box>
                  </Box>
                ) : null;
              })}
            </Box>
            <Box
              className="col-12 col-lg-5 flex-centerd-align"
              marginTop={mediumScreen ? "20px" : ""}
            >
              <Grid
                container
                spacing={2}
                justifyContent="center"
                margin="0 !important"
              >
                {certData.map((item) => {
                  return (
                    <GridItem
                      key={item.url}
                      id={item.id}
                      src={item.image}
                      sx={{
                        backgroundColor: "#ECEAE8",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                      alt={item.alt}
                    />
                  );
                })}
              </Grid>
            </Box>
          </Box>
          <Box
            className="absolute-box-why"
            sx={{
              backgroundImage: `url(${shapes})`,
            }}
          ></Box>
        </Box>
      </Box>
    </div>
  );
}

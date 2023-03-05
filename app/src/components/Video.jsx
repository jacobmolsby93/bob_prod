import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import ButtonOrange from "./ButtonOrange";
import ButtonWhite from "./ButtonWhite";
import { motion, AnimatePresence } from "framer-motion";
const videoShape =
  "https://storage.googleapis.com/bob-prod-images/media/assets/video-dots.webp";
const videoDots =
  "https://storage.googleapis.com/bob-prod-images/media/assets/video-shape.webp";

export default function Video() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [selected, setSelected] = useState(Interviews[0]);

  const handleClick = (event) => {
    let id = event.target.id;
    setSelected(Interviews[id - 1]);
  };

  const transition = { duration: 0.4, ease: "easeInOut" };

  return (
    <Box
      className="background-wrapper"
      sx={{ backgroundColor: theme.palette.grey[50] }}
    >
      <Box className="container" position="relative">
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${videoShape})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              height: "100%",
              width: "50%",
            }}
          ></Box>
          {!smallScreen && (
            <Box
              sx={{
                position: "absolute",
                top: "-2%",
                right: "-2%",
                backgroundImage: `url(${videoDots})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right",
                height: "300px",
                width: "300px",
              }}
            ></Box>
          )}
        </Box>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition }}
              exit={{ opacity: 0, transition }}
            >
              <Box
                className="row"
                padding={!smallScreen ? "4rem 0" : ""}
                alignItems="center"
              >
                <Box className="col-12 col-lg-5" padding="0 3rem 0 0">
                  <Typography variant="h3" className="title-font" mb="2rem">
                    {selected.title}
                  </Typography>
                  <Typography variant="body1" className="body-paragraph">
                    {selected.description}
                  </Typography>
                  <Box mt="2rem">
                    <ButtonOrange
                      href="kontakt"
                      aria="Klicka här att komma till kontakta oss"
                      ariaAtag="Länk till kontakta oss"
                      buttonText="Skriv till oss"
                    />
                    <ButtonWhite
                      href="omoss"
                      aria="Klicka här att läsa mer om BOB VÅTRUMSRENOVERING"
                      ariaAtag="Länk till om oss"
                      buttonText="Mer om oss"
                    />
                  </Box>
                </Box>
                <Box
                  className="col-12 col-lg-7 order-first order-lg-last mb-4 mb-lg-0"
                  position="relative"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition }}
                    exit={{ opacity: 0, transition }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          position: "relative",
                          "& .MuiCardMedia-root": {
                            height: "400px !important",
                            objectFit: "cover",
                          },
                        }}
                      >
                        <CardMedia
                          component="video"
                          className="card-media"
                          controls
                          src={selected.videoUrl}
                          title="Contemplative Reptile"
                          sx={{
                            margin: "auto",
                            borderRadius: "10px",
                          }}
                        />
                      </Box>
                    </Card>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
        <Box
          className="row"
          justifyContent="center"
          pb={!smallScreen ? "2rem" : "0"}
          padding={!smallScreen ? "" : "2rem 0"}
        >
          {Interviews.map((item) => (
            <Button
              key={item.id}
              id={item.id}
              onClick={handleClick}
              title="Klicka här!"
              sx={{
                width: "20px",
                height: ".3rem",
                margin: "0 5px",
                padding: "0",
                backgroundColor:
                  selected.id === item.id
                    ? theme.palette.primary[500]
                    : theme.palette.primary[300],
                borderRadius: "0",
                "&:hover": {
                  backgroundColor: theme.palette.primary[600],
                },
              }}
            ></Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
const Interviews = [
  {
    id: 1,
    title: "Intervju 1",
    videoUrl:
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-webm-file.webm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae ab eum quaerat obcaecati magni? Consequatur, quam expedita. Fugiat, cumque ad! Voluptatum labore atque vel nihil, commodi enim dolor nemo saepe unde autem fugit minus consectetur quam alias possimus eaque, necessitatibus rerum",
  },
  {
    id: 2,
    title: "Intervju 2",
    videoUrl:
      "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-webm-file.webm",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, beatae ab eum quaerat obcaecati magni? Consequatur, quam expedita. Fugiat, cumque ad! Voluptatum labore atque vel nihil, commodi enim dolor nemo saepe unde autem fugit minus consectetur quam alias possimus eaque, necessitatibus rerum",
  },
];

import { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  useTheme,
  ImageList,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";

import galleryData from "../../../data/galleryData.json";

export default function QuiltedImageList() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const matches = useMediaQuery("(min-width: 1000px)");
  const [isHovered, setIsHovered] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [category, setCategory] = useState(null);

  const buttonStyleOutline = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: `.1rem solid ${theme.palette.grey[900]}`,
    color: theme.palette.grey[900],
    "&>a": {
      textDecoration: "none",
      color: theme.palette.grey[900],
    },
    "&:hover": {
      border: `.1rem solid ${theme.palette.grey[500]}`,
    },
  };
  // Responsive Design
  let cols;
  if (smallScreen) {
    cols = 1;
  } else if (matches) {
    cols = 3;
  } else {
    cols = 2;
  }

  const GalleryVariants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.9,
      },
    },
  };

  // Loading Images
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 500);
  };

  // Modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleFullScreen = (item) => {
    setSelectedImg(item);
    setModalIsOpen(!modalIsOpen);
  };
  const handleNext = () => {
    const index = galleryData.images.findIndex((item) => item === selectedImg);
    const nextImg = galleryData.images[index + 1];
    if (nextImg !== undefined) {
      setSelectedImg(nextImg);
    }
  };

  const handlePrev = () => {
    const index = galleryData.images.findIndex((item) => selectedImg === item);
    const prevImg = galleryData.images[index - 1];
    if (prevImg !== undefined) {
      setSelectedImg(prevImg);
    }
  };

  const categories = [
    ...new Set(galleryData.images.map((item) => item.category)),
  ];

  const filteredData = galleryData.images.filter(
    (item) => category == null || category == item.category
  );

  return (
    <Box position="relative">
      <Box className="gallery-title col-8">
        <article>
          <Typography variant="h1" component="h1" className="section-title">
            Se våra senaste renoveringar.
          </Typography>
          <Box display="flex" mt="30px">
            <span
              style={{
                width: ".2rem",
                maxWidth: ".2rem",
                height: "auto",
                marginRight: "10px",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p className="body-paragraph">
              Titta på bilder från våra tidigare projekt och få inspiration för
              din egen renovering.
            </p>
          </Box>
        </article>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        margin={!smallScreen ? "2rem 0 0.5rem 0" : "1rem 0"}
      >
        <Box>
          <Button
            aria-label="Klicka för att visa alla bilder på renoveringar"
            sx={{
              margin: "5px",
              color: "#2d2d2d",
            }}
            disableRipple={true}
            onClick={() => setCategory(null)}
          >
            Alla
          </Button>
          {categories.map((category) => (
            <Button
              aria-label={`Klicka för att visa bilder inom ${category}`}
              key={category}
              sx={{
                margin: "5px",
                color: "#2d2d2d",
              }}
              disableRipple={true}
              onClick={() => setCategory(category)}
            >
              {category}
            </Button>
          ))}
        </Box>

        <Link
          to="/kontakt"
          aria-label="Länk till konakt sidan"
          style={{ textDecoration: "none" }}
        >
          <Button
            variant="outlined"
            sx={buttonStyleOutline}
            aria-label="Låt oss prata"
          >
            Låt oss prata
          </Button>
        </Link>
      </Box>
      <ImageList
        cols={cols}
        gap={9}
        className="portfolio-wrapper"
        sx={{ overflow: "hidden" }}
      >
        {filteredData.map((item) => (
          <motion.div
            key={item.img_url}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            style={{ position: "relative", height: "100% !important" }}
            onHoverStart={() => setIsHovered(item.img_url)}
          >
            <motion.div variants={GalleryVariants} style={{ height: "100%" }}>
              <motion.img
                onLoad={imageLoaded}
                style={{ objectFit: "cover", height: "100%", maxWidth: "100%" }}
                src={item.img_url}
              />
            </motion.div>
            {!lgScreen ? (
              isHovered == item.img_url && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  style={isHoverdStyle}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Box
                    sx={{
                      height: "100%",
                      width: "100%",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                      }}
                    >
                      <FullscreenIcon
                        onClick={() => handleFullScreen(item)}
                        sx={iconStyle}
                      />
                    </span>
                    <span
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                      }}
                    >
                      <Typography
                        variant="h4"
                        style={{ color: "white" }}
                        className="subtitle-font"
                      >
                        {item.title}
                      </Typography>
                    </span>
                  </Box>
                </motion.div>
              )
            ) : (
              <span
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                }}
              >
                <FullscreenIcon
                  aria-label="Klicka för att aktivera fullskärms läge"
                  onClick={() => handleFullScreen(item)}
                  sx={iconStyle}
                />
              </span>
            )}
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

const buttonStyle = {
  marginRight: "20px",
  color: "#2d2d2d",
  borderColor: "#2d2d2d",
  "&:hover": {
    borderColor: "#2d2d2d",
    backgroundColor: "#fff",
  },
};

const iconStyle = {
  transition: "300ms",
  color: "white",
  cursor: "pointer",
  fontSize: "2rem",
  "&:hover": { transform: "scale(1.2)" },
};

const isHoverdStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

const indicatorBox = {
  padding: "30px",
  borderRadius: "0 0 10px 10px",
};

const modalImgStyle = {
  width: "auto",
  maxWidth: "90vw",
  maxHeight: "90vh",
  objectFit: "cover",
  boxShadow: "0px 2px 4px 4px rgba(0, 0, 0, 0.2) ",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  border: "none !important",
  outline: "none",
  boxShadow: 24,
  borderRadius: "10px important",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  borderRadius: "10px",
  p: 4,
  display: "flex",
  justifyContent: "center",
};

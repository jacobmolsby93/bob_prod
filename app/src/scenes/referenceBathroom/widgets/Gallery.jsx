import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Modal,
  Button,
  useTheme,
  ImageList,
  useMediaQuery,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import galleryData from "../../../data/galleryDataBathroom";

export default function BathroomGallery() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const matches = useMediaQuery("(min-width: 1000px)");
  const [isHovered, setIsHovered] = useState(false);
  const [category, setCategory] = useState(null);
  const [gallery, setGallery] = useState(galleryData);
  const navigate = useNavigate();

  const buttonStyleContained = {    
    marginTop: smallScreen ? "1rem" : "",
  borderRadius: "0",
  border: "none",
  marginRight: "1rem",
  backgroundColor: theme.palette.primary[500],
  padding: 0,
  "&>a": {
    padding: "6px 16px",
    textDecoration: "none",
    color: "#fff",
  },
  "&:hover": {
    backgroundColor: theme.palette.primary[600],
  },}

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

  const categories = [...new Set(gallery.map((item) => item.category))];

  const filteredData = gallery.filter(
    (item) => category == null || category == item.category
  );

  return (
    <Box position="relative">
      <Box className="gallery-title col-8">
        <article>
          <Typography variant="h1" component="h1" className="section-title">
            Se Våra Senaste Badrumsrenoveringar.
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
            variants={GalleryVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{
              position: "relative",
              height: "100% !important",
              cursor: "pointer",
              minHeight: smallScreen ? "400px" : "700px"
            }}
            onHoverStart={() => setIsHovered(item.img_url)}
          >
            <motion.div style={{ height: "100%" }}>
              <motion.img
                style={{ objectFit: "cover", height: "100%", maxWidth: "100%" }}
                src={item.img_url}
              />
            </motion.div>
            {/* What is this ? */}
            {isHovered == item.img_url && (
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
                    padding: "2rem",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Box>
                  <Typography
                      variant="h3"
                      style={{ color: "white" }}
                      className="subtitle-font"
                    >
                      {item.title}
                    </Typography>

                  <Typography variant="body1" component="p" className="body-paragraph" sx={{ color: "#fff", padding: "1rem 0"}}>{`${item.paragraph.slice(0, 100)}...`}</Typography>

                  <Button
                variant="contained"
                sx={buttonStyleContained}
                aria-label={`Klicka för att läsa mer om ${item.title}`}
              >
                  <Link
                    to={`/referenscase/${item.type}-${item.item_url}`}
                    className="button-text"
                    aria-label={`Länk till ${item.item_url}`}
                  >
                    Läs Mer
                  </Link>
              </Button>
                  </Box>
                </Box>
              </motion.div>
            )}
          </motion.div>
        ))}
      </ImageList>
    </Box>
  );
}

const isHoverdStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
};

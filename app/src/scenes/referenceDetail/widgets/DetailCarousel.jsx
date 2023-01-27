import React, { useState, useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import AnimatedLazyImage from "../../../components/LazyImage";
import { motion, useMotionValue } from "framer-motion";

const ImageSlider = ({ thisBathroom }) => {
  const [width, setWidth] = useState(0);
  const slider_wraper = useRef();
  const [next, setNext] = useState(null);

  const sliderWraper = {
    width: "100%",
    overflow: "hidden",
    padding: "20px 0",
    display: "flex",
  };

  const handleNextClick = () => {
    console.log(width);
    console.log(slider_wraper);
  };

  useEffect(() => {
    setWidth(
      slider_wraper.current.scrollWidth - slider_wraper.current.offsetWidth
    );
  });
  return (
    <Box className="row" display="flex" position="relative">
      <Box className="col-12" display="flex">
        <motion.div style={sliderWraper} ref={slider_wraper} id="slider-wraper">
          <motion.div
            style={{ display: "inline-flex", scrollBehavior: "smooth" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {thisBathroom.gallery.map((item, index) => (
              <motion.div
                style={{
                  width: "400px",
                  height: "auto",
                  PointerEvents: "none",
                  display: "flex",
                  padding: "0 20px",
                }}
                whileTap={{ cursor: "grabbing" }}
                whileHover={{ cursor: "pointer" }}
              >
                <AnimatedLazyImage
                  src={item}
                  style={imageStyle}
                  draggable="false"
                  alt="random"
                  key={`${index}} + ${item.length}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Button onClick={handleNextClick}> Next </Button>
      </Box>
    </Box>
  );
};

export default ImageSlider;

const imageStyle = {
  backdropFilter: "blur(20px)",
  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.24)",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  PointerEvents: "none",
};

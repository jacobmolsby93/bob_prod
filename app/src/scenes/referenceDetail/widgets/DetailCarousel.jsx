import React, { useState, useEffect, useRef } from "react";
import { Box, Button, Modal } from "@mui/material";
import AnimatedLazyImage from "../../../components/LazyImage";
import { motion } from "framer-motion";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

const ImageSlider = ({ thisRenovation }) => {
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


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
    <Box className="row" display="flex" position="relative">
      <Box className="col-12" display="flex">
        <motion.div style={sliderWraper} ref={slider_wraper} id="slider-wraper">
          <motion.div
            style={{ display: "inline-flex", scrollBehavior: "smooth" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {thisRenovation.gallery.map((item, index) => (
              <motion.div
                style={{  width: "400px",
                height: "auto",
                PointerEvents: "none",
                display: "flex",
                margin: index === 0 ? "0 20px 0 0" :"0 20px" ,
                position: "relative"
              
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

              <Box sx={{ position: "absolute", right: "0", left: "0", top: "0", bottom: "0", backgroundColor: "rgba(0, 0, 0, 0.4)", width: "100%"}}>
                  <FullscreenIcon onClick={handleOpen}/>
              </Box>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </Box>
    <Box className="row" backgroundColor="black">
        <Box className="col-12" height="10px">

        </Box>
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


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

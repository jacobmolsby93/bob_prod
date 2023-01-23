import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Modal from "react-modal";
import { styled } from "@mui/material/styles";

// Images
import wc from "../../../assets/toilet.png";
import bath from "../../../assets/bath.png";
import laundry from "../../../assets/washingmachine.png";

import { motion } from "framer-motion";

export default function CostCalculator() {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [roomType, setRoomType] = useState("");
  const [cost, setCost] = useState(0);
  const [hovered, setHovered] = useState(null);

  const handleChange = (event) => {
    setRoomType(event.target.value);
  };
  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 5,
  };

  function CalculatorBox({ imgSrc, altText, roomType, setRoomType }) {
    return (
      <Box
        className="calculator-box"
        component={motion.div}
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{ scale: 1 }}
        transition={transition}
      >
        <img
          src={imgSrc}
          alt={altText}
          width="50px"
          height="50px"
          onClick={() => {
            setRoomType(roomType);
          }}
        />
      </Box>
    );
  }
  return (
    <Box>
      <Box
        className="col-12 col-md-10 flex-centerd-align"
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFF1E2",
          borderRadius: "7px",
          minHeight: !smallScreen ? "600px" : undefined,
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        }}
      >
        {!roomType && (
          <Box textAlign="center">
            <Typography variant="h2" fontWeight="bold" className="title-font">
              Kostnads Kalkyl
            </Typography>
            <p className="body-paragraph">
              Testa våran gratis kalkyl för att få en uppskattning av vad just
              ditt projekt kan kosta!
            </p>
            <Box className="flex-centerd-justify">
              <Box display="flex" justifyContent="space-between">
                <CalculatorBox
                  imgSrc={wc}
                  altText="Logo of a toilet"
                  roomType="toilet"
                  setRoomType={setRoomType}
                />
                <CalculatorBox
                  imgSrc={bath}
                  altText="Logo of a bathtub"
                  roomType="bath"
                  setRoomType={setRoomType}
                />
                <CalculatorBox
                  imgSrc={laundry}
                  altText="Logo of a washing machine"
                  roomType="laundry"
                  setRoomType={setRoomType}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

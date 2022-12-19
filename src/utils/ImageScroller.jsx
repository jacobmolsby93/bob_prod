import React, { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";

import ff from "../assets/ff_kakel.png";
import bauhaus from "../assets/bauhaus-logo-grey.png";
import optimera from "../assets/optimera-logo-grey.png";

export default function ImageScroller() {
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const containerWidth = `100vw`; // Set the width of the images
  const images = [
    <img key="1" style={{ width: '200px', height: '30px' }} src={optimera} alt="Optimera company logo" />,
    <img key="2" style={{ width: '', height: '70px' }} src={ff} alt="FF company logo" />,
    <img key="3" style={{ width: '200px', height: '50px' }} src={bauhaus} alt="Bauhaus company logo" />,
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Clone the first image element and append it to the end of the images array
    const clonedImage = React.cloneElement(images[0], { key: '4' });
    images.push(clonedImage);

    const intervalId = setInterval(() => {
      setLeft((prevLeft) => {
        // When the left position reaches a negative value that is equal to the width of the images, reset the left position to 0
        if (prevLeft < -containerWidth) {
          return 0;
        }

        // Otherwise, increment the left position by 1 pixel
        return prevLeft - 1;
      });
    }, 20); // Update the left position every 20 milliseconds

    return () => clearInterval(intervalId);
  }, []); // Only run the effect once

  return (
    <Box
      ref={containerRef}
      style={{
        overflow: "hidden",
        position: "relative", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        left: `${left}px`,
        opacity: "0.4"
      }}
    >
    {images}
    </Box>
  );
}


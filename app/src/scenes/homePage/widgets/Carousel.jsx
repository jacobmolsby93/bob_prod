import { Box } from "@mui/system";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image: props.image1
    },
    {
      image: props.image2
    },
    {
      image: props.image3
    },
    {
      image: props.image4
    },
  ];

  return (
    <div>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {carouselItems.map((item, i) => (
          <Carousel.Item key={i}>
            <Box
              style={{
                width: "100%",
                height: props.smallScreen ? "400px" : "700px",
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            ></Box>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

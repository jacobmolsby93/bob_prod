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
      image: props.image1,
      caption: {
        title: "First slide label",
        text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
      },
    },
    {
      image: props.image2,
      caption: {
        title: "Second slide label",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      image: props.image3,
      caption: {
        title: "Third slide label",
        text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
      },
    },
  ];

  return (
    <div style={{ overflow: "hidden", borderRadius: "10px" }}>
      <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {carouselItems.map((item, i) => (
          <Carousel.Item key={i}>
            <Box
              width="100%"
              height={props.smallScreen ? "400px" : "600px"}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
              }}
            ></Box>
            <Carousel.Caption>
              <h3>{item.caption.title}</h3>
              <p>{item.caption.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

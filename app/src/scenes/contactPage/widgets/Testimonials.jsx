import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

// Images
import quotes from "../../../assets/quote.png";

// Data
import testData from "../../../data/testimonialData.json";

const Testimonials = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [selectedPerson, setSelectedPerson] = useState(testData.entries[0]);

  const determineRating = () => {
    const rating = selectedPerson.rating;
    let rated = [];

    for (let i = 0; i < Math.ceil(rating); i++) {
      if (i < Math.floor(rating)) {
        // Render a <div> element for whole numbers
        rated.push(<StarIcon className="rating-star" />);
      } else {
        // Render a <h2> element for the decimal part
        rated.push(<StarHalfIcon className="rating-star" />);
      }
    }
    return rated;
  };

  return (
    <div>
      {/* Testimonials */}
      <Box className="testimonial-wrapper col-12">
        {!smallScreen && (
          <Box
            className="quotes"
            style={{ backgroundImage: `url(${quotes})` }}
          ></Box>
        )}
        {/* Title */}
        <Box className="testimonial-title">
          <Typography variant="body1" className="primary">
            Vad folk Säger Om Oss
          </Typography>
          <Typography variant="h2" className="title-font">
            Tidigare Betyg
          </Typography>
        </Box>
        <Box className="row">
          <Box className="col-12 col-md-4">
            {testData.entries.map((data) => (
              <Box
                onClick={() => setSelectedPerson(data)}
                className="testimonial-person-wrapper"
                key={data.key}
                sx={{
                  transition: "300ms",
                  "&:hover": { transform: "scale(1.01)", cursor: "pointer" },
                }}
              >
                <Button aria-label="Klicka för att see vad vald person har sagt om företaget">
                  <img
                    src={data.imageURL}
                    className="person-testimonial-image"
                    alt={data.fullName}
                    style={{
                      width: !smallScreen ? "60px" : "40px",
                      height: !smallScreen ? "60px" : "40px",
                    }}
                  />
                </Button>
                <Box m="auto">
                  <Box>
                    <Typography variant="h4">{data.fullName}</Typography>
                    <Typography variant="body1">
                      {data.role}, {data.company}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box className="col-12 col-md-8">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Box
                className="review-wrapper"
                sx={{ margin: smallScreen ? "30px" : "0 0  100px 0" }}
              >
                <Box className="rating-wrapper">
                  <Typography variant="h3" fontWeight="bold">
                    {selectedPerson.title}
                  </Typography>
                  <Box>{determineRating()}</Box>
                </Box>
                <Typography variant="body1">
                  {selectedPerson.testimonial}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Testimonials;

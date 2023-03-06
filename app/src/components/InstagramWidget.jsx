import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
// Images
const defaultImage =
  "https://storage.googleapis.com/bob-prod-images/media/assets/about-intro-image.png";
const InstgramLogo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/instagram-logo.png";
const bobLogo =
  "https://storage.googleapis.com/bob-prod-images/media/assets/boblogo.png";
const shape =
  "https://storage.googleapis.com/bob-prod-images/media/assets/logo-shape-instagram.webp";

export const InstagramWidget = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Box
      sx={{ backgroundColor: theme.palette.primary[500], padding: "5rem 0" }}
      position="relative"
    >
      <Box className="container">
        <Box className="row">
          {!smallScreen ? (
            numPosts.map((post) => (
              <Box
                className="col-12 col-md-6 col-lg-4 instagram-box"
                key={post.id}
                padding=".75rem"
              >
                <Card sx={cardStyle}>
                  <Box
                    className="card-header"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingBottom="1rem"
                  >
                    <Box display="flex" alignItems="center">
                      <img
                        src={bobLogo}
                        alt="Instagram Logo"
                        style={{ width: "62px", height: "62px" }}
                      />
                      <Box ml=".5rem">
                        <Typography
                          variant="h5"
                          sx={{
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginBottom: "0",
                          }}
                        >
                          Comments: {post.comments}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                          Likes: {post.likes}
                        </Typography>
                      </Box>
                    </Box>
                    <img
                      src={InstgramLogo}
                      alt="Instagram Logo"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </Box>
                  <CardMedia
                    component="img"
                    alt="Instagram"
                    sx={{ borderRadius: "10px" }}
                    height="100%"
                    image={post.image}
                    title="Instagram"
                  />
                </Card>
              </Box>
            ))
          ) : (
            <Carousel activeIndex={index} onSelect={handleSelect} id="instagram-carousel">
              {numPosts.map((post, uuid) => (
                <Carousel.Item key={uuid}>
                  <Box
                    className="col-12 col-md-6 col-lg-4 instagram-box"
                    key={post.id}
                    padding=".75rem"
                  >
                    <Card sx={cardStyle}>
                      <Box
                        className="card-header"
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        paddingBottom="1rem"
                      >
                        <Box display="flex" alignItems="center">
                          <img
                            src={bobLogo}
                            alt="Instagram Logo"
                            style={{ width: "62px", height: "62px" }}
                          />
                          <Box ml=".5rem">
                            <Typography
                              variant="h5"
                              sx={{
                                fontSize: "1.5rem",
                                fontWeight: "bold",
                                marginBottom: "0",
                              }}
                            >
                              Comments: {post.comments}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ fontSize: "1rem" }}
                            >
                              Likes: {post.likes}
                            </Typography>
                          </Box>
                        </Box>
                        <img
                          src={InstgramLogo}
                          alt="Instagram Logo"
                          style={{ width: "40px", height: "40px" }}
                        />
                      </Box>
                      <CardMedia
                        component="img"
                        alt="Instagram"
                        sx={{ borderRadius: "10px" }}
                        height="100%"
                        image={post.image}
                        title="Instagram"
                      />
                    </Card>
                  </Box>
                </Carousel.Item>
              ))}
            </Carousel>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default InstagramWidget;

const cardStyle = {
  padding: "1rem",
  background: "#FFFFFF",
  boxShadow: "0px 6px 40px rgba(0, 0, 0, 0.2)",
  borderRadius: "10px",
};

const numPosts = [
  {
    id: 1,
    likes: 3000,
    comments: 200,
    image: "https://www.instagram.com/reel/CpUP-5HDF2V/?utm_source=ig_embed&amp;utm_campaign=loading",
  },
  {
    id: 2,
    likes: 3000,
    comments: 200,
    image: defaultImage,
  },
  {
    id: 3,
    likes: 3000,
    comments: 200,
    image: defaultImage,
  },
  {
    id: 4,
    likes: 3000,
    comments: 200,
    image: defaultImage,
  },
  {
    id: 5,
    likes: 3000,
    comments: 200,
    image: defaultImage,
  },
  {
    id: 6,
    likes: 3000,
    comments: 200,
    image: defaultImage,
  },
];

import {Box, useMediaQuery } from "@mui/material";

const CardContainer = ({ images, speed = 5000 }) => {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const bannerImage = {
    width: "350px",
    height: "100%",
    filter: "grayscale(1px)"
  };


  return (
    <Box className="inner" sx={{ height: !smallScreen ? "200px" : "150px" }}>
      <Box className="banner-wrapper" height="100%">
        <section className="banner-section" style={{ "--speed": `${speed}ms`, height: "100%" }}>
          {images.map(({ id, image, url }) => (
            <Box className="banner-image" key={id}>
              <a href={url} target="_blank">
                <img
                  className="banner-img-src"
                  style={bannerImage}
                  src={image}
                  alt={id}
                />
              </a>
            </Box>
          ))}
        </section>
        <section className="banner-section" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image, url }) => (
            <div className="banner-image" key={id}>
              <a href={url} target="_blank">
                <img
                  className="banner-img-src"
                  style={bannerImage}
                  src={image}
                  alt={id}
                />
              </a>
            </div>
          ))}
        </section>
        <section className="banner-section" style={{ "--speed": `${speed}ms` }}>
          {images.map(({ id, image, url }) => (
            <div className="banner-image" key={id}>
              <a href={url} target="_blank">
                <img
                  className="banner-img-src"
                  style={bannerImage}
                  src={image}
                  alt={id}
                />
              </a>
            </div>
          ))}
        </section>
      </Box>
    </Box>
  );
};

export default CardContainer;

import React from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Link as PageLink } from "react-scroll";

export default function Intro(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const buttonStyleContained = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: "none",
    marginRight: "1rem",
    backgroundColor: theme.palette.primary[500],
    "&>a": {
      textDecoration: "none",
      color: "#fff",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };
  const buttonStyleOutline = {
    marginTop: smallScreen ? "1rem" : "",
    borderRadius: "0",
    border: `.1rem solid ${theme.palette.grey[900]}`,
    "&>a": {
      textDecoration: "none",
      color: theme.palette.grey[900],
    },
    "&:hover": {
      border: `.1rem solid ${theme.palette.grey[500]}`,
    },
  };

  return (
    <Box className="container">
      <Box
        display="flex"
        justifyContent={!smallScreen ? "center" : "space-between"}
        alignItems="center"
        className="row"
      >
        <Box
          className="col-12 col-lg-6"
          padding={!lgScreen ? "0 20px 0 0" : "0"}
        >
          <Box height="auto">
            <img
              className="img-fluid"
              src={props.image}
              alt={props.alt}
              style={{
                objectFit: "cover",
                height: smallScreen ? "400px" : "100%",
                width: smallScreen ? "100%" : "auto",
              }}
            />
          </Box>
        </Box>
        <Box
          padding={lgScreen ? "2rem 0 0 0" : "0 0 0 2rem"}
          className="col-12 col-lg-6"
        >
          <article>
            <Typography variant="h2" className="title-font">
              {props.title}
            </Typography>
            <Box display="flex" mt="3rem">
              <span
                style={{
                  width: "1rem",
                  maxWidht: ".2rem",
                  height: "auto",
                  marginRight: "1rem",
                  backgroundColor: "#c2662d",
                }}
              ></span>
              <p className="body-paragraph">{props.body}</p>
            </Box>
            <Box mt="2.5rem">
              <Button
                variant="contained"
                sx={buttonStyleContained}
                aria-label="Länk till sidan kontakta oss"
              >
                {props.pageLink ? (
                  <PageLink
                    to={props.to}
                    className="button-text"
                    aria-label={props.label}
                    smooth={true}
                    duration={200}
                  >
                    {props.linkName}
                  </PageLink>
                ) : (
                  <Link
                    sx={buttonStyleContained}
                    to={props.to}
                    className="button-text"
                    aria-label={props.label}
                  >
                    {props.linkName}
                  </Link>
                )}
              </Button>
              <Button
                aria-label="Länk till sidan om oss"
                className="body-paragraph"
                variant="outlined"
                sx={buttonStyleOutline}
              >
                <Link
                  to="/om-oss"
                  className="button-text"
                  aria-label="länk företag"
                >
                  Om Företaget
                </Link>
              </Button>
            </Box>
          </article>
        </Box>
      </Box>
    </Box>
  );
}

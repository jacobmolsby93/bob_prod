import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

// Data
import data from "../data/team.json";
// Images

export default function Team() {
  const theme = useTheme();
  const mediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [team, setTeam] = useState(data.persons);

  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [hoverd, setHoverd] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredCardId(id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  const styledTag = {
    minWidth: "unset",
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.background.default,
    padding: "10px",
    borderRadius: "3.22px",
  };

  return (
    <Box className="row" display="flex" justifyContent="center">
      <Box className="col-12 col-md-10">
        <Typography
          textAlign="center"
          variant="h1"
          fontWeight="bold"
          fontSize="clamp(32px, 4vw, 55px)"
        >
          Team
        </Typography>
        <hr
          style={{ backgroundColor: theme.palette.primary[500], height: "2px" }}
        />
        <Box display="flex" mt="30px">
          <p style={{ textAlign: "center" }}>
            Vi på BOBPARTNER har en djup erfarenhet av badrum och vet hur man
            ska hantera ett badrums projekt från idé till färdigt resultat. Att
            arbeta tillsammans med våra kunder för att förverkliga deras
            visioner är det roligaste vi vet, och vi är experter på det vi gör.
            Kontakta oss gärna om du har några frågor eller behöver hjälp med
            ditt badrum.
          </p>
        </Box>
      </Box>
      {team.map((person) => (
        <Box
          className="col-12 col-md-6 col-lg-4"
          display="flex"
          justifyContent="center"
          mt="30px"
        >
          <Card
            key={person.id}
            sx={{
              minWidth: 270,
              minHeight: 400,
              backgroundColor: "#F8F6EF",
            }}
            id={person.id}
            onMouseEnter={(event) => handleMouseEnter(event.currentTarget.id)}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              display="flex"
              height="100%"
              widht="100%"
              alignItems="flex-end"
              position="relative"
            >
              <CardMedia
                image={person.image}
                sx={{
                  width: "100%",
                  height: "70%",
                  backgroundSize: "contain",
                  zIndex: "10",
                }}
                title={person.namn}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: "10px",
                  right: "20px",
                  padding: "0",
                  zIndex: "10",
                  "&.MuiCardContent-root": { padding: "0" },
                }}
              >
                <Typography variant="h4" sx={styledTag} className="tag">
                  {person.roll}
                </Typography>
              </CardContent>

              {hoveredCardId == person.id && (
                <Box
                  component={motion.div}
                  animate={{
                    x: 0,
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    top: "0",
                    left: "0",
                    cursor: "pointer",
                    zIndex: "0",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <Box
                    sx={{ position: "absolute", height: "100%", width: "100%" }}
                  >
                    <Typography>{person.name}</Typography>
                    {person.facebook}
                    {person.instagram}
                    {person.telefon}
                  </Box>
                </Box>
              )}
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

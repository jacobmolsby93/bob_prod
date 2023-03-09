import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
const reco =
  "https://storage.googleapis.com/bob-prod-images/media/assets/reco.webp";
const hitta =
  "https://storage.googleapis.com/bob-prod-images/media/assets/hitta-se.webp";
const trust =
  "https://storage.googleapis.com/bob-prod-images/media/assets/trustpilot.webp";

export const Reco = () => {
  const theme = useTheme();
  return (
    <Box className="container" mt="3rem">
      <Box display="flex" justifyContent="center">
        <Box textAlign="center" width="100%">
          <Typography variant="h2" className="title-font">
            Våra kunder litar på oss!
          </Typography>
          <Box
            className="row"
            display="flex"
            justifyContent="center"
            marginTop="2rem"
          >
            {RecoList.map((item, index) => (
              <Box
                className="col-12 col-xl-4"
                maxWidth="300px"
                margin="1.5rem 0"
              >
                <a
                  href={item.atag}
                  target="_blank"
                  key={item.id}
                  style={{
                    textDecoration: "none",
                    color: theme.palette.primary[900],
                  }}
                >
                  <img
                    src={item.logo}
                    style={{
                      width: index === 1 ? "40px" : "132px",
                      height: "30px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography variant="body1" sx={{ fontSize: "40px" }}>
                    {item.rating}
                  </Typography>
                </a>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Reco;

const RecoList = [
  {
    id: 1,
    logo: reco,
    rating: "5/5",
    atag: "https://www.reco.se/bob-vatrumsrenovering-ab",
    alt: "Reco logga",
  },
  {
    id: 2,
    logo: hitta,
    rating: "5/5",
    atag: "https://www.hitta.se/bob+v%C3%A5trumsrenovering+ab/nykvarn/muyiamsvb",
    alt: "Hitta.se logga",
  },
  {
    id: 3,
    logo: trust,
    rating: "3.7/5",
    atag: "https://www.trustpilot.com/review/bobvatrumsrenovering.se",
    alt: "Trust Pilot Loggga",
  },
];

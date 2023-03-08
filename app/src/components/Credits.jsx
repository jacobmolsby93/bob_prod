import React, { useState } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// Icons
const employee =
  "https://storage.googleapis.com/bob-prod-images/media/assets/employee.png";
const medal =
  "https://storage.googleapis.com/bob-prod-images/media/assets/medal.png";
const costumer =
  "https://storage.googleapis.com/bob-prod-images/media/assets/costumer.png";

const facts = [
  {
    counter: 78,
    text: "Avklarade Projekt",
    icon: costumer,
  },
  {
    counter: 15,
    text: "Anställda",
    icon: employee,
  },
  {
    counter: 100,
    text: "Mål - 100% kundnöjdhet",
    icon: medal,
  },
];

export default function Credits(props) {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const lgScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="container text-center">
      <Box className="row" sx={{ justifyContent: "space-between" }}>
        {facts.map((fact, index) => (
          <Box
            className="col-3 flex-centerd-justify"
            key={fact.counter}
            sx={{
              backgroundColor: "#fff",
              padding: !lgScreen ? "2rem 0" : ".5rem 0rem",
              width: "30%",
            }}
          >
            <Box className="mt-2 mt-sm-2 mt-none">
              <ScrollTrigger onEnter={() => setCounterOn(true)}>
                <Box mb=".5rem">
                  <img
                    src={fact.icon}
                    style={icon}
                    alt="Icon med nöjda kunder"
                  />
                </Box>
                <Box className="counter">
                  {counterOn && (
                    <Typography
                      variant="h3"
                      fontWeight="bold"
                      color={theme.palette.text.primary}
                      sx={{ fontSize: "clamp(16px, 5vw, 45px)" }}
                    >
                      <CountUp
                        start={0}
                        end={fact.counter}
                        duration={2}
                        delay={0}
                      />
                      {index === 2 ? "%" : ""}
                    </Typography>
                  )}
                </Box>
              </ScrollTrigger>

              <Typography
                variant="body1"
                className="text-uppercase body-paragrapy"
                color={theme.palette.text.primary}
                sx={{ fontSize: "clamp(8px, 2vw, 16px)" }}
              >
                {fact.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}

const icon = {
  width: "clamp(50px, 10vw, 80px)",
  height: "clamp(50px, 10vw, 80px)",
};

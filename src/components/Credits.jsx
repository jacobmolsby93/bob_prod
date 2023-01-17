import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
// Images 
import costumer from "../assets/costumer.png"
import medal from "../assets/medal.png"
import employee from "../assets/employee.png"

const facts = [
  {
    counter: 498,
    text: "Avklarade Projekt",
    icon: costumer,
  },
  {
    counter: 20,
    text: "Anställda",
    icon: employee,
  },
  {
    counter: 5,
    text: "Rekommenderat Företag",
    icon: medal,
  },
];


export default function Credits(props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="container text-center">
      <Box className="row flex-centerd-justify">
        {facts.map((fact) => {
          return (
            <Box
              className="col-12 col-sm-6 col-lg-3 flex-centerd-justify"
              key={fact.counter}
            >
              <Box className="mt-2 mt-sm-2 mt-none">
                <ScrollTrigger onEnter={() => setCounterOn(true)}>
                  <Box>
                    <img src={fact.icon} style={icon} alt="Icon med nöjda kunder" />
                  </Box>
                  <Box className="counter">
                    {counterOn && (
                      <Typography variant="h2" fontWeight="bold" color={props.dark ? "#2d2d2d" : "#e0e0e0"}>
                        <CountUp
                          start={0}
                          end={fact.counter}
                          duration={2}
                          delay={0}
                        />
                      </Typography>
                    )}
                  </Box>
                </ScrollTrigger>

                <Typography
                  variant="body1"
                  className="text-uppercase body-paragrapy"
                  color={props.dark ? "#2d2d2d" : "#e0e0e0"}
                >
                  {fact.text}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}


const icon = {
  width: "50px",
  height: "50px"
}
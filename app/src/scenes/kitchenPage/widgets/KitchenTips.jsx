import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material"

const steg = [
    {
        step: "Steg 1.",
        text: " Innan vi sätter igång, skriver vi ett avtal utformat av Konsumentverket, det så kallade Hantverksformuläret 14, där vi avtalar om en fast tidsplan, fast pris och vem er projektledare kommer att bli."
    },
    {
        step: "Steg 2.",
        text: "Sedan har vi ett uppstartsmöte för att säkerställa att köket blir precis som du vill ha det. Projektledaren, snickaren rörmokaren och elektrikern är med på mötet och tillsammans ritar vi upp hela köket med väggar, golv, tak, inredning samt vitvaror."
    },
    {
        step: "Steg 3.",
        text: " Innan vi sätter igång, skriver vi ett avtal utformat av Konsumentverket, det så kallade Hantverksformuläret 14, där vi avtalar om en fast tidsplan, fast pris och vem er projektledare kommer att bli."
    },
    {
        step: "Steg 4.",
        text: " Innan vi sätter igång, skriver vi ett avtal utformat av Konsumentverket, det så kallade Hantverksformuläret 14, där vi avtalar om en fast tidsplan, fast pris och vem er projektledare kommer att bli."
    }
]


export default function KitchenTips() {
  return (
    <Box className="row">
        <Typography variant="h2">Tips inför en köksrenovering</Typography>
        <img src="" alt="" />
        <Box>
            <List component="ol">
                <ListItem>
                    <p className="body-paragraph"><strong></strong></p>
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

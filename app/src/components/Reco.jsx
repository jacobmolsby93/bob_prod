import React from 'react'
import { Box, Typography, useMediaQuery, useTheme} from '@mui/material'

import reco from "../assets/reco.webp"
import hitta from "../assets/hitta-se.webp"
import trust from "../assets/trustpilot.webp"


export const Reco = () => {
  return (
    <Box className="container">
        <Box className="row">
            {RecoList.map((item) => (
                <img src={item.logo} style={{ width: "auto", height: "30px"}} />
            ))}
        </Box>  
    </Box>
  )
}

export default Reco


const RecoList = [
    {
        id: 1,
        logo: reco,
        rating: "",
        atag: "",
        alt: "Reco logga"
    },
    {
        id: 2,
        logo: hitta,
        rating: "",
        atag: "",
        alt: "Trust pilot logga"
    },
    {
        id: 3,
        logo: trust,
        rating: "",
        atag: "",
        alt: "Hitta.se Loggga"
    },
]

import { Box, Typography, Button, useTheme } from "@mui/material";
import React from "react";

// Images
import image from "../../../assets/owners_image.png";

export default function SectionOne() {
  const theme = useTheme();
  return (
    <Box className="container-fluid">
      <Box display="flex" justifyContent="center" className="row" alignItems="center">
        <Box className="col-12 col-md-6">
          <img
            src={image}
            alt="picture of the 2 owners"
            width="100%"
            height="auto"
          />
        </Box>
        <Box marginLeft="20px" className="col-12 col-md-5">
          <Typography variant="h1" fontWeight="bold" fontSize="clamp(32px, 4vw, 55px)">
            Badrumsrenovering med fast pris och fastställd tidplan"
          </Typography>
          <Box display="flex" mt="30px">
            <span
              style={{
                width: "18px",
                height: "auto",
                marginRight: "10px",
                backgroundColor: theme.palette.primary[500],
              }}
            ></span>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat em
              accusantium doloremque laudantium, totam rem apriam eaque ipsa
              quae ab illo inventore veritatis et quas accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa quae ab illo inventore
              veritatis et quasi architecto
            </p>
          </Box>
          <Box mt="30px">
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary[500],
                marginRight: "20px",
                color: theme.palette.background.default,
                "&:hover": {
                  backgroundColor: theme.palette.primary[300],
                },
              }}
            >
              Tidigare Object
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.grey[900],
                border: `1px solid ${theme.palette.grey[900]}`,
                "&:hover": { border: `1px solid ${theme.palette.grey[500]}` },
              }}
            >
              Läs Mer
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
import React, { useState, useRef } from "react";
import { Box, TextField, Typography, Button, useTheme } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../assets/bob_logo.png";
import { borderRadius } from "@mui/system";
import { Call, MailOutline, Facebook, Instagram } from "@mui/icons-material";

export default function Contact() {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const color = "#ECEAE8";
  const theme = useTheme();
  const styledInput = {
    marginBottom: "20px",
    backgroundColor: "#F8F8F8",
    borderRadius: ".3rem",
  };
  const styledIcon = {
    height: "40px",
    width: "40px",
    minWidth: "unset",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary[500],
    marginRight: "20px",
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.primary[300],
    },
  };
  const styledButton = {
    minWidth: "unset",
    backgroundColor: theme.palette.primary[500],
    color: theme.palette.background.default,
    "&:hover": {
      backgroundColor: theme.palette.primary[300],
    },
  };
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: theme.palette.primary[500],
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary[500],
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: theme.palette.primary[500],
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary[500],
      },
    },
  });

  const fileInput = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isImage, setIsImage] = useState(Boolean);

  const handleChange = () => {
    const file = fileInput.current.files[0];

    if (file.type.includes("image")) {
      setIsImage(true);
    } else {
      setIsImage(false);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box
      className="row"
      position="relative"
      display="flex"
      justifyContent="center"
    >
      <Box
        className="col-12"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          opacity: "30%",
          minHeight: "100%",
          position: "absolute",
        }}
      ></Box>
      {/* Text Area */}
      <Box class="col-12 col-md-5">
        <Typography
          variant="h5"
          fontWeight="bold"
          color={theme.palette.primary[500]}
        >
          Få en kostnadsfri offert idag!
        </Typography>
        <Typography
          variant="h1"
          fontWeight="bold"
          fontSize="clamp(32px, 4vw, 55px)"
        >
          Kontakta Oss Idag
        </Typography>
        <Box class="mt-30">
          <span
            style={{
              width: "18px",
              height: "auto",
              marginRight: "10px",
              backgroundColor: theme.palette.primary[500],
            }}
          ></span>
          <p
            style={{
              maxWidth: !smallScreen ? "70%" : "100%",
            }}
          >
            Fyll i informationen och beskriv vad du vill ha hjälp med så
            kontaktar vi dig inom kort!
          </p>
        </Box>
        <Box mt="30px">
          <Button variant="contained" sx={styledIcon}>
            <Facebook />
          </Button>
          <Button variant="contained" sx={styledIcon}>
            <Instagram />
          </Button>
        </Box>
        <Box mt="30px">
          <a href="#mail" style={{ textDecoration: "none", color: "GrayText" }}>
            info@bobpartner.se
          </a>
          <p style={{ color: "GrayText" }}>08 - 400 263 00</p>
        </Box>
      </Box>

      {/* Form Area */}
      <Box className="col-12 col-md-5">
        <CssTextField
          id="name-input-main"
          label="Name"
          fullWidth
          style={styledInput}
        />
        <CssTextField
          id="email-input-main"
          label="Epost"
          fullWidth
          style={styledInput}
        />
        <CssTextField
          id="phone-input-main"
          label="Telefon Nummer"
          fullWidth
          style={styledInput}
        />
        <CssTextField
          multiline
          minRows={4}
          id="text-box-main"
          label="Medelande"
          fullWidth
          style={styledInput}
        />
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              ref={fileInput}
              onChange={handleChange}
            />

            <Button sx={styledButton} variant="contained" component="span">
              Upload button
            </Button>
          </label>
          {isImage ? (
            <img src={preview} width="30px" height="30px" alt="File preview" />
          ) : (
            <object
              data={preview}
              type="application/pdf"
              width="40px"
              height="40px"
            >
              <p>
                It appears your browser doesn't support PDF previews. You can{" "}
                <a href={preview}>download the PDF file here</a>.
              </p>
            </object>
          )}
        </Box>
      </Box>
    </Box>
  );
}

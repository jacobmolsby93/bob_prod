import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  RadioGroup,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  Typography,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { onSubmit } from "./onSubmit";
import axios from "axios";
import ButtonOrange from "../components/ButtonOrange";
import footerShape from "../assets/footer-logo-shape.png";

const validationSchema = Yup.object({
  typ: Yup.string(),
  fornamn: Yup.string().required("Förnamn är obligatoriskt"),
  efternamn: Yup.string().required("Efternamn är obligatoriskt"),
  stadsdel_kommun: Yup.string(),
  epost: Yup.string()
    .email("Ogiltig e-postadress")
    .required("E-post är obligatoriskt"),
  telefon: Yup.string(),
  arende: Yup.string(),
  medelande: Yup.string().required("Medelande är obligatoriskt"),
  bild: Yup.mixed()
    .test("fileFormat", "Endast JPG, PNG eller GIF format stöds", (value) => {
      if (value && value.length) {
        const fileType = value[0].type;
        return (
          fileType === "image/jpeg" ||
          fileType === "image/png" ||
          fileType === "image/gif"
        );
      } else {
        return true;
      }
    })
    .test("fileSize", "Bilden får inte vara större än 2MB", (value) => {
      if (value && value.length) {
        const fileSize = value[0].size;
        return fileSize <= 2000000;
      } else {
        return true;
      }
    }),
});
const MessageFields = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/list-select/"
        );
        setChoices(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <Box className="container">
        <Box className="row" justifyContent="center">
          <Box className="col-12 col-md-10 col-lg-8 col-xl-7">
            <Grid item>
              <Box
                sx={{
                  backgroundColor: "#1D1D1B",
                  borderRadius: "10px",
                  padding: !smallScreen ? "5rem" : "1rem",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    backgroundImage: `url(${footerShape})`,
                    backgroundPosition: "bottom right",
                    backgroundRepeat: "no-repeat",
                    width: !smallScreen ? "30vw" : "70vw",
                    height: !smallScreen ? "20vw" : "40vw",
                    backgroundSize: "cover",
                    opacity: "0.1",
                  }}
                ></Box>
                <Typography
                  variant="h5"
                  className="title-font"
                  sx={{ color: "#fff" }}
                >
                  Kontakt formulär
                </Typography>
                <Typography
                  variant="body1"
                  className="body-paragraph"
                  sx={{ color: "#fff", padding: "1rem 0" }}
                >
                  Fyll i formuläret nedan så kontaktar vi dig så fort vi kan!
                </Typography>
                <Formik
                  onSubmit={onSubmit}
                  initialValues={{
                    typ: "",
                    fornamn: "",
                    efternamn: "",
                    stadsdel_kommun: "",
                    epost: "",
                    telefon: "",
                    arende: "",
                    medelande: "",
                  }}
                  validationSchema={validationSchema}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <Grid item xs={12} sx={{ backgroundImage: `url()` }}>
                        <Field name="typ">
                          {({ field }) => (
                            <FormControl component="fieldset">
                              <FormLabel component="legend">
                                Selected Option
                              </FormLabel>
                              <RadioGroup
                                style={{
                                  display: "inline",
                                  color: "#fff",
                                }}
                                {...field}
                                value={props.values.typ}
                                onChange={props.handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Privat"
                                  value="privat"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Företag"
                                  value="foretag"
                                />
                              </RadioGroup>
                            </FormControl>
                          )}
                        </Field>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          id="fornamn"
                          name="fornamn"
                          label="Förnamn"
                          value={props.values.fornamn}
                          onChange={props.handleChange}
                          error={
                            props.touched.fornamn &&
                            Boolean(props.errors.fornamn)
                          }
                          helperText={
                            props.touched.fornamn && props.errors.fornamn
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          id="efternamn"
                          name="efternamn"
                          label="Efternamn"
                          type="efternamn"
                          value={props.values.efternamn}
                          onChange={props.handleChange}
                          error={
                            props.touched.efternamn &&
                            Boolean(props.errors.efternamn)
                          }
                          helperText={
                            props.touched.efternamn && props.errors.efternamn
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          id="epost"
                          name="epost"
                          label="Epost"
                          type="email"
                          value={props.values.epost}
                          onChange={props.handleChange}
                          error={
                            props.touched.epost && Boolean(props.errors.epost)
                          }
                          helperText={props.touched.epost && props.errors.epost}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          id="telefon"
                          name="telefon"
                          label="Telefon"
                          type="telefon"
                          value={props.values.telefon}
                          onChange={props.handleChange}
                          error={
                            props.touched.telefon &&
                            Boolean(props.errors.telefon)
                          }
                          helperText={
                            props.touched.telefon && props.errors.telefon
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          variant="outlined"
                          name="stadsdel_kommun"
                          id="stadsdel_kommun"
                          select
                          label="Stadsdel / Kommun"
                          value={props.values.stadsdel_kommun}
                          onChange={props.handleChange}
                          error={
                            props.touched.stadsdel_kommun &&
                            Boolean(props.errors.stadsdel_kommun)
                          }
                          helperText={
                            props.touched.stadsdel_kommun &&
                            props.errors.stadsdel_kommun
                          }
                        >
                          <MenuItem key={""} value={""}>
                            No Selected // Or Empty
                          </MenuItem>
                          {choices.length !== 0 &&
                            choices.stadsdel_kommun.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          variant="outlined"
                          name="arende"
                          id="arende"
                          select
                          label="Ärende"
                          value={props.values.arende}
                          onChange={props.handleChange}
                          error={
                            props.touched.arende && Boolean(props.errors.arende)
                          }
                          helperText={
                            props.touched.arende && props.errors.arende
                          }
                        >
                          <MenuItem key={""} value={""}></MenuItem>
                          {choices.length !== 0 &&
                            choices.arende.map((option) => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          sx={TextFieldStyles}
                          rows={10}
                          multiline
                          id="medelande"
                          name="medelande"
                          label="Medelande"
                          type="medelande"
                          value={props.values.medelande}
                          onChange={props.handleChange}
                          error={
                            props.touched.medelande &&
                            Boolean(props.errors.medelande)
                          }
                          helperText={
                            props.touched.medelande && props.errors.medelande
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          onChange={(event) => {
                            props.setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                      </Grid>
                      <Box
                        sx={{
                          padding: "0.5rem 0",
                          color: "#fff",
                          width: !smallScreen ? "70%" : "80%",
                        }}
                      >
                        <Typography>
                          Genom att klicka på skicka medelande så godkänner du
                          våran policy för gdpr, du kan när som helst skriva
                          till oss för att ta bort dina uppgifter.
                        </Typography>
                      </Box>
                      <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "flex-end" }}
                      >
                        <ButtonOrange
                          buttonText="Skicka Medelande"
                          type="submit"
                          aria="Klicka för att skicka medelande"
                        />
                      </Grid>
                    </form>
                  )}
                </Formik>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MessageFields;

const TextFieldStyles = {
  margin: ".5rem 0",
  "& .MuiInputBase-root": { color: "#fff" },
  "& fieldset": { border: "1px solid rgba(250, 250, 250, 0.5)" },
  "& textarea": { color: "#fff !important" },
  "& MuiLabel-root": { color: "#fff" },
  "& label": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
};

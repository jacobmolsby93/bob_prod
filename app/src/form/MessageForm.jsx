import React, { useState, useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Checkbox,
  RadioGroup,
  TextField,
  Select,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Paper,
  Radio,
  Typography,
  MenuItem,
} from "@mui/material";
import { onSubmit } from "./onSubmit";
import axios from "axios";

const validationSchema = Yup.object({
  typ: Yup.string(),
  fornamn: Yup.string().required("Förnamn är obligatoriskt"),
  efternamn: Yup.string().required("Efternamn är obligatoriskt"),
  stadsdel_kommun: Yup.string().required("Ort är obligatoriskt"),
  epost: Yup.string()
    .email("Ogiltig e-postadress")
    .required("E-post är obligatoriskt"),
  telefon: Yup.string().required("Telefon är obligatoriskt"),
  arende: Yup.string().required("Ärende är obligatoriskt"),
  medelande: Yup.string().required("Medelande är obligatoriskt"),
});

const MessageFields = () => {
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
          <Box className="col-12 col-md-10 col-lg-7">
            <Grid item>
              <Box
                sx={{
                  backgroundColor: "#1D1D1B",
                  borderRadius: "10px",
                  padding: "5rem",
                }}
              >
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
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
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
                        <Field name="typ">
                          {({ field }) => (
                            <FormControl component="fieldset">
                              <FormLabel component="legend">
                                Selected Option
                              </FormLabel>
                              <RadioGroup
                                {...field}
                                value={props.values.typ}
                                onChange={props.handleChange}
                              >
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Option 1"
                                  value="privat"
                                />
                                <FormControlLabel
                                  control={<Radio />}
                                  label="Option 2"
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
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                        >
                          Submit
                        </Button>
                      </Grid>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Errors
                      </Typography>
                      <pre>{JSON.stringify(props.errors, null, 2)}</pre>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        Values
                      </Typography>
                      <pre>{JSON.stringify(props.values, null, 2)}</pre>
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

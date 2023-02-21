import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Modal,
  Typography,
  Button,
  FormControl,
  Select,
  InputLabel,
  FormGroup,
  FormHelperText,
  MenuItem,
  RadioGroup,
  FormLabel,
  Radio,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import axios from "axios";

const Options = {
  foretag: "foretag",
  privat: "privat",
};

const MessageFields = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [ort, SetOrt] = useState("");
  const [arende, setArende] = useState("");
  const [selectedValue, setSelectedValue] = useState("privat");
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/email/");
        setChoices(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    SetOrt(e.target.value);
  };

  const handleArendeChange = (e) => {
    setArende(e.target.value);
  };

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleRadioChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const handleAccept = () => {
    setGdprAccepted(true);
    setOpenModal(false);
  };

  const initialValues = {
    typ: "privat",
    fornamn: "",
    efternamn: "",
    stadsdel_kommun: ort,
    epost: "",
    telefon: "",
    arende: "",
    medelande: "",
  };

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

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
      password: "foobar",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Grid item xs={10} className="mt-sm-3 mt-lg-none">
      {showMessage && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="col-10 col-md-8 col-lg-5">
            <Typography
              id="modal-modal-title"
              fontWeight="bold"
              variant="h3"
              component="h2"
            >
              {!errorMessage
                ? `Tack för ditt medelande, ${formValues.namn}!`
                : "Oj då"}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              variant="body1"
              className="body-paragraph"
            >
              {!errorMessage
                ? "Vi återkommer så fort vi kan. Under tiden så kan du läsa mer om våra"
                : `${errorMessage}`}
              {!errorMessage && (
                <Link
                  to="/vara-tjanster"
                  aria-label="Länk till våra Tjänster"
                  style={{ marginLeft: ".5rem" }}
                >
                  tjänster
                </Link>
              )}
            </Typography>
          </Box>
        </Modal>
      )}
      {/* Form goes here */}
      <form onSubmit={formik.handleSubmit}>
        {/* Radio Buttons */}
        <FormControl
          required
          component="fieldset"
        >
          <FormLabel component="legend">Pick two</FormLabel>
          <FormGroup>
            <Field
              type="checkbox"
              name="checkboxes"
              value="gilad"
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Gilad Gray"
                />
              )}
            </Field>
            <Field
              type="checkbox"
              name="checkboxes"
              value="jason"
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Jason Killian"
                />
              )}
            </Field>
            <Field
              type="checkbox"
              name="checkboxes"
              value="antoine"
            >
              {({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label="Antoine Llorca"
                />
              )}
            </Field>
          </FormGroup>
          <FormHelperText>
            You can display an error
          </FormHelperText>
        </FormControl>
        <TextField
          fullWidth
          id="fornamn"
          name="fornamn"
          label="Förnamn"
          value={formik.values.fornamn}
          onChange={formik.handleChange}
          error={formik.touched.fornamn && Boolean(formik.errors.fornamn)}
          helperText={formik.touched.fornamn && formik.errors.fornamn}
        />
        <TextField
          fullWidth
          id="efternamn"
          name="efternamn"
          label="Efternamn"
          type="efternamn"
          value={formik.values.efternamn}
          onChange={formik.handleChange}
          error={formik.touched.efternamn && Boolean(formik.errors.efternamn)}
          helperText={formik.touched.efternamn && formik.errors.efternamn}
        />
        {/* Dropdown Select Menu */}
        <TextField
          fullWidth
          id="stadsdel_kommun"
          name="stadsdel_kommun"
          label="Stadsdel / Kommun"
          type="stadsdel_kommun"
          value={formik.values.stadsdel_kommun}
          onChange={formik.handleChange}
          error={
            formik.touched.stadsdel_kommun &&
            Boolean(formik.errors.stadsdel_kommun)
          }
          helperText={
            formik.touched.stadsdel_kommun && formik.errors.stadsdel_kommun
          }
        />
        <TextField
          fullWidth
          id="epost"
          name="epost"
          label="Epost"
          type="email"
          value={formik.values.epost}
          onChange={formik.handleChange}
          error={formik.touched.epost && Boolean(formik.errors.epost)}
          helperText={formik.touched.epost && formik.errors.epost}
        />
        <TextField
          fullWidth
          id="telefon"
          name="telefon"
          label="Telefon"
          type="telefon"
          value={formik.values.telefon}
          onChange={formik.handleChange}
          error={formik.touched.telefon && Boolean(formik.errors.telefon)}
          helperText={formik.touched.telefon && formik.errors.telefon}
        />
        {/* Dropdown Select */}
        <TextField
          fullWidth
          id="arende"
          name="arende"
          label="Ärende"
          type="arende"
          value={formik.values.arende}
          onChange={formik.handleChange}
          error={formik.touched.arende && Boolean(formik.errors.arende)}
          helperText={formik.touched.arende && formik.errors.arende}
        />
        <TextField
          fullWidth
          id="medelande"
          name="medelande"
          label="Medelande"
          type="medelande"
          rows={10}
          value={formik.values.medelande}
          onChange={formik.handleChange}
          error={formik.touched.medelande && Boolean(formik.errors.medelande)}
          helperText={formik.touched.medelande && formik.errors.medelande}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Grid>
  );
};

export default MessageFields;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#fffaf5",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
};

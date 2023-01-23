import React, { useState } from "react";
import { useFormik } from "formik";
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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const MessageFields = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [formStatus, setFormStatus] = useState(null);
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(null);

  const [openModal, setOpenModal] = useState(false);
  const [gdprAccepted, setGdprAccepted] = useState(false);
  let envVars = {};
  if (process.env.NODE_ENV === 'production') {
    envVars = {
      templateId: process.env.VITE_TEMPLATE_ID,
      serviceId: process.env.VITE_SERVICE_ID,
      publicKey: process.env.VITE_PUBLIC_KEY,
    };
  } else {
    envVars = {
      templateId: import.meta.env.VITE_TEMPLATE_ID,
      serviceId: import.meta.env.VITE_SERVICE_ID,
      publicKey: import.meta.env.VITE_PUBLIC_KEY,
    };
  }
  const [envVariables, setEnvVariables] = useState(envVars);
  console.log(envVariables)



  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const handleAccept = () => {
    setGdprAccepted(true);
    setOpenModal(false);
  };

  const styledInput = {
    marginBottom: "20px",
    backgroundColor: "#fefaf5",
    borderRadius: ".3rem",
    gridColumn: "1fr",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
    color: "red",
    "& label": {
      color: "#2d2d2d",
    },
    "& label.Mui-focused": {
      color: "#2d2d2d",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.primary[500],
      },
      "&:hover fieldset": {
        border: `2px solid ${theme.palette.primary[500]}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary[500],
      },
    },
  };

  const buttonStyle = {
    borderRadius: "0",
    backgroundColor: theme.palette.primary[500],
    "&": {
      color: theme.palette.background.default,
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
  };

  const checkBoxStyle = {
    paddingLeft: "0",
    color: theme.palette.primary[500],
    "&.Mui-checked": {
      color: theme.palette.primary[600],
    },
  };

  const formik = useFormik({
    initialValues: {
      namn: "",
      epost: "",
      telefon: "",
      medelande: "",
      gdpr: false,
    },
    validationSchema: Yup.object({
      namn: Yup.string()
        .min(2, "Namn måste vara minst 2 bokstäver lånt")
        .max(100, "Får ej överskrida 100 bokstäver")
        .required("Namn är obligatoriskt"),
      epost: Yup.string()
        .email("Ange en giltig e-post address")
        .required("Epost är obligatoriskt"),
      telefon: Yup.string().matches(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        "Ogiltigt nummer"
      ),
      medelande: Yup.string().min(
        10,
        "Medelandet måste vara minst 10 bokstäver"
      ),
      gdpr: Yup.boolean(),
    }),
    onSubmit: (values) => {
      const { namn, epost, telefon, medelande } = values;
      setFormValues(values);
      const valuesWithCustomFields = {
        ...values,
        to_name: "Bob Badrum",
        from_name: namn,
        message: `${medelande} \n Telefon: ${telefon}`,
        reply_to: epost,
      };
      emailjs
        .send(envVariables.serviceId, envVariables.templateId, valuesWithCustomFields, envVariables.publicKey)
        .then(
          (result) => {
            setOpen(true);
            setFormStatus("success");
            formik.resetForm();
          },
          (error) => {
            setFormStatus("error");
          }
        )
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });

  return (
    <Grid item xs={12} md={8} lg={6} className="mt-sm-3 mt-lg-none">
      {formValues && (
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
              Tack för ditt medelande, {formValues.namn}!
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              component="p"
            >
              Vi återkommer så fort vi kan. Under tiden så kan du läsa mer om
              våra
              <Link to="/vara-tjanster" aria-label="Länk till våra Tjänster" sx={{ marginLeft: ".5rem"}}>
                tjänster
              </Link>
              .
            </Typography>
          </Box>
        </Modal>
      )}
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <TextField
          className="form-field"
          name="namn"
          label="Namn"
          type={formik.values.namn}
          value={formik.values.namn}
          onChange={formik.handleChange}
          error={formik.touched.namn && Boolean(formik.errors.namn)}
          helperText={formik.touched.namn && formik.errors.namn}
          sx={styledInput}
        />
        <TextField
          className="form-field"
          id="epost"
          name="epost"
          label="Epost"
          value={formik.values.epost}
          onChange={formik.handleChange}
          error={formik.touched.epost && Boolean(formik.errors.epost)}
          helperText={formik.touched.epost && formik.errors.epost}
          sx={styledInput}
        />
        <TextField
          className="form-field"
          id="telefon"
          name="telefon"
          label="Telefon"
          value={formik.values.telefon}
          onChange={formik.handleChange}
          error={formik.touched.telefon && Boolean(formik.errors.telefon)}
          helperText={formik.touched.telefon && formik.errors.telefon}
          sx={styledInput}
        />
        <TextField
          id="medelande"
          name="medelande"
          label="Medelande"
          rows={4}
          multiline
          value={formik.values.medelande}
          onChange={formik.handleChange}
          error={formik.touched.medelande && Boolean(formik.errors.medelande)}
          helperText={formik.touched.medelande && formik.errors.medelande}
          sx={styledInput}
        />
        <FormControlLabel
          name="gdpr"
          sx={{ marginLeft: "0", position: "relative" }}
          label={
            <span>
              Jag godkänner <Link onClick={() => setOpenModal(true)}>GDPR</Link>
              -villkoren
            </span>
          }
          control={
            <Checkbox
              sx={checkBoxStyle}
              onChange={formik.handleChange}
              onClick={() => setGdprAccepted(!gdprAccepted)}
              checked={gdprAccepted}
            />
          }
        />
        {formik.touched.gdpr && formik.errors.gdpr && (
          <span
            style={{ position: "absolute", bottom: "20px", color: "#c2662d" }}
          >
            {formik.errors.gdpr}
          </span>
        )}

        {openModal && (
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} className="col-10 col-md-7 col-lg-5">
              <Box position="relative">
                <Box
                  sx={{
                    position: "aboslute",
                    width: "100%",
                    top: "20px",
                    right: "20px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    onClick={() => handleClose()}
                    sx={{
                      minWidth: "0 !important",
                      color: "#2d2d2d",
                      padding: "0 !important",
                      margin: "0 !important",
                    }}
                  >
                    <CloseIcon />
                  </Button>
                </Box>
                <Typography
                  id="modal-modal-title"
                  fontWeight="bold"
                  variant="h2"
                  component="h2"
                  sx={{
                    "@media (max-width: 600px)": {
                      fontSize: "1.2rem",
                    },
                  }}
                >
                  HANTERING AV PERSONUPPGIFTER (GDPR)
                </Typography>
                <Box
                  sx={
                    !smallScreen
                      ? {}
                      : { maxHeight: "300px", overflowY: "scroll" }
                  }
                >
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <strong>Bob Badrum AB</strong> samlar in och bearbetar dina
                    personuppgifter för att tillhandahålla produkter och
                    tjänster åt dig, för att informera dig om nyheter och
                    uppdateringar av våra produkter och tjänster,
                    <br />
                    <br />
                    för att anpassa din upplevelse av vår webbplats samt för att
                    förbättra våra produkter och tjänster. När som helst har du
                    rätt att få tillgång till, korrigera och radera dina
                    personuppgifter och att invända mot bearbetning av dina
                    personuppgifter. Du kan utöva dessa rättigheter genom att
                    skicka ett e-postmeddelande till följande adress{" "}
                    <Link href="mailto:hej@bobbadrum.se">hej@bobbadrum.se</Link>
                    .
                    <br />
                    <br />
                    <strong>Bob Badrum AB</strong> förbinder sig att respektera
                    och skydda dina personuppgifter och din personliga
                    integritet i enlighet med gällande lagstiftning,
                    branschregler och andra relevanta normer. Vi lämnar aldrig
                    ut dina personuppgifter till tredje part utan ditt
                    godkännande.
                  </Typography>
                </Box>
                <Box mt="10px" className="flex-centerd-justify">
                  <Button
                    onClick={() => handleAccept()}
                    variant="contained"
                    color="success"
                  >
                    Jag Accepterar Vilkoren
                  </Button>
                </Box>
              </Box>
            </Box>
          </Modal>
        )}
        {/* Submit Form */}
        <Box display="flex" justifyContent="flex-end">
          <Button
            name="skicka"
            type="submit"
            variant="contained"
            sx={buttonStyle}
          >
            <p className="button-text">Skicka</p>
          </Button>
        </Box>
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

export const styledInput = {
    marginBottom: ".7rem",
    backgroundColor: "#fff",
    borderRadius: ".3rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
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

export const radioStyle = {
    color: theme.palette.primary[500],
    "&.Mui-checked": {
        color: theme.palette.primary[500],
    },
}

export const buttonStyle = {
    borderRadius: "0",
    backgroundColor: theme.palette.primary[500],
    "&": {
      color: theme.palette.background.default,
      textDecoration: "none",
      fontWeight: "bold",
    },
    "&:hover": {
      backgroundColor: theme.palette.primary[600],
    },
}

export const checkBoxStyle = {
    paddingLeft: "0",
    color: theme.palette.primary[500],
    "&.Mui-checked": {
      color: theme.palette.primary[600],
    },
}
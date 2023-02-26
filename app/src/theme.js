// color design tokens export
export const tokensLight = {
  grey: {
    0: "#FFFAF5", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    20: "#E9E5E1",
    30: "F9F9F9",
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#1d1d1b",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // red
    100: "#f3e0d5",
    200: "#e7c2ab",
    300: "#daa381",
    400: "#ce8557",
    500: "#c2662d",
    600: "#9b5224",
    700: "#743d1b",
    800: "#4e2912",
    900: "#271409",
  },
  secondary: {
    // yellow
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light" && {
        // palette values for light mode
        primary: {
          ...tokensLight.primary,
          main: tokensLight.grey[50],
          light: tokensLight.grey[100],
        },
        secondary: {
          ...tokensLight.secondary,
          main: tokensLight.secondary[600],
          light: tokensLight.secondary[700],
        },
        neutral: {
          ...tokensLight.grey,
          main: tokensLight.grey[500],
        },
        background: {
          default: tokensLight.grey[0],
          alt: tokensLight.grey[50],
        },
        text: {
          primary: tokensLight.grey[800],
          secondary: tokensLight.grey[300],
        },
      }),
    },
    typography: {
      fontFamily: ["Mulish", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Mulish", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

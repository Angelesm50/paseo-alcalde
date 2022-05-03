import { createTheme, responsiveFontSizes } from "@mui/material";
// import RalewayMedium from '../assets/fonts/Raleway/static/Raleway-Medium.ttf';
// import Mallory from '../assets/fonts/Mallory/Mallory Light.ttf';

const theme = responsiveFontSizes(
  createTheme({
    // spacing: 0,
    typography: {
      fontFamily: ["Raleway", "sans-serif"].join(","),
      // h1: {
      //   fontSize: "5rem",
      //   fontFamily: "Raleway",
      // },
      // h2: {
      //   fontSize: "3.5rem",
      //   fontFamily: "Open Sans",
      //   fontStyle: "bold",
      // },
      // h3: {
      //   fontSize: "2.5rem",
      //   fontFamily: "Roboto",
      // },
    },
    // shape: {
    //   borderRadius: 28,
    // },
    palette: {
      background: {
        default: "#F4F5F8", //gray
      },
      primary: {
        main: "#202945", //indigo
      },
      secondary: {
        main: "#FF8C40", //orange
      },
      error: {
        main: "#D72A2A", //red
      },
      warning: {
        main: "#FC7B09", //orange
      },
      info: {
        main: "#6B7D6A", //skyblue
      },
      success: {
        main: "#09FE00", //green
      },
      text: {
        primary: "#000000", //black
        // secondary: "#FFFFFF", //white
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 28,
            textTransform: "capitalize",
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          },
        },
      },
    },
  })
);

export default theme;

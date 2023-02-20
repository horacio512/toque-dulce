import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: "#cb6ce6"
        }
    },

    typography: {
        h1: {
            fontSize: "calc(2.1em + 2.1vw)"
        },
        h5:{
            fontSize:"calc(0.8em + 0.8vw)"
        },
        p:{
            fontSize: "calc(0.7em + 0.7vw)"
        },
        fontFamily: "Montserrat, sans-serif"
    },
  
})

export default theme


import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: "#cb6ce6"
        },
        secondary: {
            main: "#FFFFFF"
        }
    },

    typography: {
        h1: {
            fontSize: "calc(1.4em + 1.5vw)",
            fontWeight: 200
        },
        h2: {
            fontSize: "calc(1.2em + 1vw)"
        },
        h3: {
            fontSize: "calc(1.3em + 1.3vw)",
            fontWeight: 300
        },
        h4: {
            fontSize: "calc(1em + 0.8vw)",
        },
        h5: {
            fontSize: "calc(0.8em + 0.8vw)"
        },
        p: {
            fontSize: "calc(0.7em + 0.7vw)"
        },
        fontFamily: "Montserrat, sans-serif"
    },

})

export default theme


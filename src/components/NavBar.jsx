import React from "react";
import logo from "../assets/logos/logo.jpg"
import theme from "../assets/MuiTheme";
import { Box, ThemeProvider } from "@mui/system";
import { AppBar, Button, Grid, Typography } from "@mui/material";

const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" >
                <Grid item xs={5} sm={4} md={3} lg={2} textAlign="center">
                    <img src={logo} width="70%" height="auto" />
                </Grid>
            </Grid>

            <Box display="flex" justifyContent="center" borderBottom={1} borderColor="#cb6ce6" sx={{ position: "sticky", top: 0, backgroundColor: "#cb6ce6" }} zIndex={1}>
                <Button><Typography color="white" variant="p">Inicio</Typography></Button>
                <Button><Typography color="white" variant="p">Nuestro Trabajo</Typography></Button>
                <Button><Typography color="white" variant="p">Contacto</Typography></Button>
            </Box>

        </ThemeProvider >
    )
}

export default NavBar
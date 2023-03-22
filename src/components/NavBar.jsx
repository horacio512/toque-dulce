import React from "react";
import logo from "../assets/logos/logo.jpg"
import theme from "../assets/MuiTheme";
import { Box, ThemeProvider } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" >
                <Grid item xs={5} sm={4} md={3} lg={2} textAlign="center">
                    <img src={logo} width="70%" alt="logo" height="auto" />
                </Grid>
            </Grid>

            <Box display="flex" justifyContent="center" sx={{ position: "sticky", top: 0, backgroundColor: "#cb6ce6" }} zIndex={1}>
                <Button mr={10}><Link to="/"><Typography color="white" variant="p">Inicio</Typography></Link></Button>
                <Button mr={10}><Link to="/contact"><Typography color="white" variant="p">Contacto</Typography></Link></Button>
            </Box>

        </ThemeProvider >
    )
}

export default NavBar
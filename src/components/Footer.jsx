import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../assets/MuiTheme'
import Instagram from "../assets/logos/instagram.png"
import Wpp from "../assets/logos/wpp.png"
import { ThemeProvider } from '@mui/system'



const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{ backgroundColor: "#cb6ce6" }} justifyContent="center" color="white">
                <Grid item xs={12} textAlign="center" mt={1}>

                    <Typography variant="h5">
                        Nuestras Redes
                    </Typography>
                </Grid>
                <Grid item xs={1} p={2}>
                    <Button href="https://www.instagram.com/toquedulce23/" target="_blank">
                        <img src={Instagram} width="70%" height="auto" />
                    </Button>
                </Grid>
                <Grid item xs={1} p={2}>
                    <Button href="https://wa.me/59892606528" target="_blank">
                        <img src={Wpp} width="70%" height="auto" />
                    </Button>
                </Grid>
                <Grid item xs={12} textAlign="end" variant="p">
                    <Typography>® Copyright 2023 por Horacio Garcia</Typography>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer
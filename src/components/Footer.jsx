import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../assets/MuiTheme'
import Instagram from "../assets/logos/instagram.png"
import Wpp from "../assets/logos/wpp.png"
import { ThemeProvider } from '@mui/system'



const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{ backgroundColor: "#cb6ce6" }} justifyContent="center" textAlign="center" color="white">

                <Grid item xs={12} pl={1} mt={1} mb={2} >
                    <Typography variant="p">Ubicación: Montevideo, Uruguay</Typography>
                </Grid>
                <Grid item xs={12} pl={1}>
                    <Typography variant="p">Contacto: dulcetoque23@gmail.com </Typography>

                    <Grid item xs={12} display="flex" justifyContent="center">
                        <Grid item xs={3} sm={1} p={2}>
                            <Button href="https://www.instagram.com/toquedulce23/" target="_blank">
                                <img src={Instagram} loading='lazy' title="instagram" width="70%" height="auto" alt="instagram" />
                            </Button>
                        </Grid>

                        <Grid item xs={3} sm={1} p={2}>
                            <Button href="https://wa.me/59892606528" target="_blank">
                                <img src={Wpp} loading='lazy' title="wpp" width="70%" height="auto" alt="wpp" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} textAlign="end" variant="p" pr={1} display="flex" alignItems="center">
                    <Grid item xs={7} textAlign="start" pl={1}>
                        <Typography color="white" variant="p-1">Creado por: </Typography>
                        <Button href="https://www.linkedin.com/in/horacio-garcia-6a9a39234/" target="_blank"><Typography variant="p" color="black">Horacio</Typography></Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="p">® Copyright 2023 Toque Dulce</Typography>
                    </Grid>

                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer
import React from 'react'
import { Box, ThemeProvider } from '@mui/system'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import mercadopago from "../assets/logos/mercadopago.png"
import titleLogo from "../assets/logos/title.png"

const StoreTitle = ({ title }) => {

    return (
        <ThemeProvider theme={theme} >

            <Grid item xs={12} textAlign="center" mb={1} display="flex" justifyContent="center" alignItems="center"
                sx={{ backgroundImage: `url(${titleLogo})`, WebkitBackgroundSize: "fit-content", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} height="20vh" >
                <Typography color="black" sx={{opacity: 0.7}} variant="h2" fontFamily="Delicious Handrawn"  mt={2}>{title}</Typography>
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center" sx={{ borderBottomStyle: "ridge", borderBottomRightRadius: "10%", borderBottomLeftRadius: "10%" }} mb={2}>
                <Grid item xs={4} display="flex" justifyContent="center" alignItems="center"><Typography variant="h3">Pagar con </Typography></Grid>
                <Grid item xs={4} sm={2}><img src={mercadopago} loading='lazy' title="mercadopago" alt="boton mercadopago" width="100%" height="auto" /> </Grid>
            </Grid>
        </ThemeProvider >

    )
}

export default StoreTitle
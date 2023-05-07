import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import { useState } from 'react'
import pay from "../assets/logos/pay.webp"

const Boxes = (data) => {


    const [mouseEnter, setMouseEnter] = useState(Number);

    const { id, name, price, url } = data.data

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} sm={9} alignItems="center" color="white"
                sx={{ display: "flex", flexWrap: "wrap", backgroundColor: "#cb6ce6", sm: { opacity: 0.8 }, "&:hover": { sm: { opacity: 1, backgroundColor: "#A622CC", transform: "scale(1.1)" } } }} >
                <Grid item xs={6} sm={6}><Typography variant="h4">{name}</Typography></Grid>

                <Grid item display="flex" flexWrap={'wrap'} alignItems="center" xs={6} sm={6}>
                    <Grid item xs={4} sm={6}><Typography variant="h5" fontWeight={600} >${price}</Typography></Grid>
                    <Grid item xs={8} sm={6} display="flex" alignItems="end" onMouseEnter={() => { setMouseEnter(id) }} onMouseLeave={() => { setMouseEnter(0) }} sx={{ textAlign: { xs: "center", sm: "start" } }}  >
                        <Button href={url} target="_blank" sx={{ "&:hover": { transform: "rotate(15deg)" } }} >
                            <img src={pay} width="50%" loading='lazy' title="pagar" height="auto" alt="boton pagar" /></Button>
                        <Typography variant="p" sx={{ display: { xs: "none", sm: "flex" } }} color="#29E537" p={1} visibility={mouseEnter === id ? ("unset") : ("hidden")}  >Pagar</Typography>
                    </Grid>


                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Boxes
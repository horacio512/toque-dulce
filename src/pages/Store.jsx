import { Button, Grid, Link, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React, { useState } from 'react'
import data from "../../data.json"
import theme from '../assets/MuiTheme'
import mercadopago from "../assets/logos/mercadopago.png"
import pay from "../assets/logos/pay.png"


const Store = () => {

    const [mouseEnter, setMouseEnter] = useState(Number);

    return (
        <ThemeProvider theme={theme}>

            <Grid container sx={{ backgroundColor: "#cb6ce6" }} justifyContent="center" textAlign="center" color="white" pb={2}>
                <Grid item xs={12} justifyContent="center" display="flex" flexWrap={"wrap"}>
                    <Grid item xs={12} textAlign="center" mb={1}>
                        <Typography variant="h2" fontFamily="Permanent Marker" pt={2}>Cajas</Typography>
                    </Grid>

                    <Grid item xs={12} display="flex" justifyContent="center" borderBottom={1} sx={{borderBottomRightRadius: "20%", borderBottomLeftRadius: "20%"}} mb={2}>
                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center"><Typography variant="h4" >Pagar con </Typography></Grid>
                    <Grid item xs={4} sm={2}><img src={mercadopago} alt="boton mercadopago" width="100%" height="auto" /> </Grid>
                    </Grid>

                    {data.map((data) => {
                        const { id, name, price, url } = data
                        return (
                            <Grid key={id} item xs={12} sm={9} alignItems="center"
                                sx={{ display: "flex", flexWrap: "wrap", sm: { opacity: 0.8 }, "&:hover": { sm: { opacity: 1, backgroundColor: "#A622CC", transform: "scale(1.1)" } } }} >
                                <Grid item xs={6} sm={6}><Typography variant="h5">{name}</Typography></Grid>

                                <Grid item display="flex" flexWrap={'wrap'} alignItems="center" xs={6} sm={6}>
                                    <Grid item xs={4} sm={6}><Typography variant="h5" fontWeight={600} >${price}</Typography></Grid>
                                    <Grid item xs={8} sm={6} display="flex" alignItems="end" onMouseEnter={() => { setMouseEnter(id) }} onMouseLeave={() => { setMouseEnter(0) }} sx={{ textAlign: { xs: "center", sm: "start" } }}  >
                                        <Button href={url} target="_blank" sx={{ "&:hover": { transform: "rotate(15deg)" } }} >
                                            <img src={pay} width="50%" height="auto" alt="boton pagar" /></Button>
                                        <Typography variant="p" sx={{ display: { xs: "none", sm: "flex" } }} color="#29E537" p={1} visibility={mouseEnter === id ? ("unset") : ("hidden")}  >Pagar</Typography>
                                    </Grid>


                                </Grid>
                            </Grid>
                        )
                    })}
                </Grid>


            </Grid>
        </ThemeProvider >
    )
}

export default Store
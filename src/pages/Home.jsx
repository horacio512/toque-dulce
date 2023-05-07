
import React from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import home from "../assets/home.webp"
import home2 from "../assets/home2.webp"


const Home = () => {
  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent="center" alignItems="center" id="home" mb={5} mt={3}>

        <Grid item xs={11} sm={10} display="flex" justifyContent="center" textAlign="center" mb={5}>
          <Typography variant="h1" sx={{ textDecoration: "none" }} letterSpacing={3}>
            <Link color="primary" sx={{ cursor: "pointer" }} href="https://www.instagram.com/toquedulce23/" target="_blank">Toque Dulce <br /></Link>
            Presente en tus desayunos, meriendas o fechas especiales.
          </Typography>
        </Grid>

        <Grid xs={12} sm={6} lg={4} item mb={3} display="flex" justifyContent="center">
          <img src={home} style={{ borderRadius: "3%" }} alt="emprendedora td" title="emprendedora toque dulce" width="80%" height="auto" />
        </Grid>
        <Grid xs={12} sm={5} lg={5} item p={2} textAlign="center" >
          <Typography variant="h2" sx={{ textDecoration: "none" }} letterSpacing={3}>
            Hola, soy Melania y tengo 25 años oriunda de Colonia.
            Realice el bachillerato de gastronomía en la UTU de Colonia del Sacramento y recientemente me recibí de pastelera profesional
            en el <Link href="https://www.ithu.edu.uy/" sx={{ cursor: "pointer" }} target="_blank" color="#fffff">ITHU</Link> de Montevideo.
          </Typography>

        </Grid>

        <Grid xs={12} sm={5} lg={5} textAlign="center" item p={2} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h2">Con el fin de seguir ampliando mis conocimientos y gracias a una oportunindad que se me presentó, me encuentro ahorrando para
            viajar a España mas especificamente a la <Link href="https://www.usal.es/" sx={{ cursor: "pointer" }} target="_blank" color="#fffff">Universidad de Salamanca.</Link>
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} item mt={3} mb={2} order={{ xs: 1, sm: 2 }} display="flex" justifyContent="center">
          <img src={home2} style={{ borderRadius: "3%" }} title="universidad de salamanca" alt="foto universidad" width="100%" height="auto" />
        </Grid>


      </Grid>

    </ThemeProvider>
  )
}

export default Home
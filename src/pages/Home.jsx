import React from 'react'
import theme from '../assets/MuiTheme'
import { Container, ThemeProvider } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import home from "../assets/home.jpg"
import home2 from "../assets/home2.jpg"
import home3 from "../assets/home3.jpg"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>

        <Grid container justifyContent="center" alignItems="center" mb={2} mt={3}>
          <Grid xs={12} sm={6} lg={4} item mb={3}>
            <img src={home} style={{ borderRadius: "3%" }} alt="budin limon" width="100%" height="auto" />
          </Grid>
          <Grid xs={12} sm={5} lg={5} textAlign="center" item p={2}>
            <Typography variant="h4" >Hola somos </Typography>
            <Link href="https://www.instagram.com/toquedulce23/" target="_blank"><Typography variant="h4" color="primary" sx={{ cursor: "pointer", textDecoration: "none" }} >Toque Dulce </Typography></Link>
            <Typography variant="h4">un emprendimiento que quiere estar presente en tus desayunos, meriendas, fechas especiales o cuando busques darte un gusto.</Typography>
          </Grid>


      
          <Grid xs={12} sm={5} lg={5} textAlign="center" item p={2}>
            <Typography variant="h4">Soy Pastelera Profesional presente en cursos desde que tengo 10 años te invito a probar todas mis creaciones. </Typography>
          </Grid>
          <Grid xs={12} sm={6} lg={4} item mt={3} mb={2} >
            <img src={home2} style={{ borderRadius: "3%" }} alt="alfajor chocolate" width="100%" height="auto" />
          </Grid>


          <Grid xs={12} sm={6} lg={4} item mt={3} mb={2}>
            <img src={home3} style={{ borderRadius: "3%" }} alt="bufin frutos secos" width="100%" height="auto" />
          </Grid>
          <Grid xs={12} sm={5} lg={5} textAlign="center" item p={2}>
            <Typography variant="h4">Creamos una gran variedad de productos, no dude en consultar..</Typography>
          </Grid>

        </Grid>
    
    </ThemeProvider>
  )
}

export default Home
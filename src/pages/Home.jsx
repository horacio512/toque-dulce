
import React from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import { Grid, Link, Typography } from '@mui/material'
import home from "../assets/home.jpg"
import home2 from "../assets/home2.jpg"


const Home = () => {
  return (
    <ThemeProvider theme={theme}>

      <Grid container justifyContent="center" alignItems="center" id="home" mb={5} mt={3}>

        <Grid xs={12} sm={6} lg={4} item mb={3}>
          <img src={home} style={{ borderRadius: "3%" }} alt="imagen budin" title="budin limon" width="100%" height="auto" />
        </Grid>
        <Grid xs={12} sm={5} lg={5} item p={2} textAlign="center" >
          <Typography variant="h1" sx={{ textDecoration: "none" }} letterSpacing={3}>
            <Link color="primary" sx={{ cursor: "pointer" }} href="https://www.instagram.com/toquedulce23/" target="_blank">Toque Dulce </Link>
            Presente en tus desayunos, meriendas o feches especiales.
          </Typography>

        </Grid>

        <Grid xs={12} sm={5} lg={5} textAlign="center" item p={2} order={{ xs: 2, sm: 1 }}>
          <Typography variant="h2">Soy Pastelera Profesional presente en cursos desde que tengo 10 años te invito a probar todas mis creaciones. </Typography>
        </Grid>
        <Grid xs={12} sm={6} lg={4} item mt={3} mb={2} order={{ xs: 1, sm: 2 }} >
          <img src={home2} style={{ borderRadius: "3%" }} title="alfajor de chocolate" alt="imagen alfajor" width="100%" height="auto" />
        </Grid>


      </Grid>

    </ThemeProvider>
  )
}

export default Home
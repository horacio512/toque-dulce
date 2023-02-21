import React from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import home from "../assets/home.jpg"

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="start">
        <Grid item xs={12} textAlign="center">
          <Typography variant="h1">
            Bienvenidos no se que poner!
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} item>
          <img src={home} width="100%" height="auto" style={{ objectFit: "cover" }} />
        </Grid>

      </Grid>
    </ThemeProvider>
  )
}

export default Home
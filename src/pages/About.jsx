import React from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import { Grid } from '@mui/material'
const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default About
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/material'
import emailjs from "emailjs-com"
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import { Box } from '@mui/system'

const Contact = () => {

  const [status, setStatus] = useState(400)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm("service_gsyv9la", "template_hmuwgiu", e.target, "ChOWLlJNNmx50J9eJ")
      .then(response => setStatus(response))
      .catch(error => console.log(error))
  }

  return (
    <ThemeProvider theme={theme} >
      <Box pt={10}>
        <Card id="contact" >
          <CardContent >
            <Typography mt={3} textAlign="center" mb={2} variant="h4" color="primary" sx={{ opacity: 1.5 }}>Contáctese con nosotros</Typography>
            <Typography textAlign="center" mb={4} variant="h5" sx={{ opacity: 0.8 }}>Llene el formulario y nos contactaremos con usted a la brevedad!</Typography>
            <form onSubmit={sendEmail}>
              <Grid spacing={1} container justifyContent="center" textAlign="center" mb={5}>

                <Grid item xs={12} sm={5} >
                  <TextField label="Nombre" fullWidth placeholder="Ingrese su Nombre..." name="name" variant="filled" required />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField label="Apellido" fullWidth placeholder="Ingrese su Apellido..." name="lastName" variant="filled" required />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField label="Asunto" fullWidth placeholder="Ingrese el asunto del mensaje" name="affair" variant="filled" required />
                </Grid>
                <Grid item xs={12} mb={3} sm={5} >
                  <TextField type="email" fullWidth label="email" placeholder="Ingrese su correo" name="email" variant="filled" required />
                </Grid>
                <Grid item xs={12} mb={1} sm={5}>
                  <TextField label="Mensaje" fullWidth multiline rows={4} placeholder="Ingrese su mensaje..." name="msj" variant="outlined" required />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="outlined">Enviar</Button>
                </Grid>
              </Grid>
            </form>

            {status.status === 200 ? (<Typography variant="h4" textAlign="center" >Mensaje Enviado <MarkEmailReadOutlinedIcon /></Typography>) : ('')}

          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  )
}

export default Contact
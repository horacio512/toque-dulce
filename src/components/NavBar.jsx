import React, { useState } from "react"
import { AppBar, Button, Grid, Menu, MenuItem } from "@mui/material"
import theme from '../assets/MuiTheme'
import { ThemeProvider } from "@mui/system"
import logo from "../assets/logos/logo.jpg"
import { Link } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }


    return (
        <ThemeProvider theme={theme} >
            <AppBar position="sticky" sx={{ backgroundColor: 'inherit' }} >
                <Grid container alignItems="center" textAlign="center" sx={{ display: { xs: "none", sm: "flex" } }}>
                <Grid item sm={2} md={1} p={2}>
                        <img alt="logo" src={logo} width="100%" height="auto" />
                    </Grid>
                    <Grid item sm={10} display="flex" justifyContent="end" >
                        <Grid item mr={1}>
                            <Link to="/" >
                                <Button variant="contained" size="large">
                                    Inicio
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item mr={1}>
                            <Link to="/about">
                                <Button variant="contained" size="large">
                                    Sobre Nosotros
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item>
                            <Link to="/contact">
                                <Button variant="contained" size="large">
                                    Contacto
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ display: { sm: "none" } }} alignItems="center" justifyContent="center">
                    <Grid item xs={2} >
                        <img alt="logo" src={logo} width="100%" height="auto" />
                    </Grid>
                    <Grid item xs={4}>
                        <Button id="basic-button" aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} >
                            <MenuIcon />
                        </Button>
                    </Grid>

                    <Menu id="basic-menu" anchorEl={anchorEl} open={open} MenuListProps={{ "aria-labelledby": "basic-button" }} >
                        <MenuItem onClick={handleClose}><Link to="/">Inicio</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="/about">Sobre Nosotros</Link></MenuItem>
                        <MenuItem onClick={handleClose}><Link to="contact">Contacto</Link></MenuItem>
                    </Menu>
                </Grid>
            </AppBar>
        </ThemeProvider >


    )
}

export default NavBar
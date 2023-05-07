import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box, Grid, Typography } from '@mui/material'
import theme from '../assets/MuiTheme'
import { ThemeProvider } from '@mui/system'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import CircularProgress from '@mui/material/CircularProgress';

function ImagesCarousel() {
    const url = import.meta.env.VITE_REACT_APP_API3
    const [datas, setDatas] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(url)
            const json = await data.json()
            setDatas(json)
            setLoading(false)
        }

        fetchData()

    }, [])

    return (<ThemeProvider theme={theme}>
        <Box id="ourwork" pt={5}>
            <Typography variant="h3" textAlign="center" mt={3} mb={1} fontFamily="Delicious Handrawn" sx={{ textDecoration: "wavy underline", opacity: 0.7 }}  >Nuestro Trabajo </Typography>
            {loading ? (<Box display="flex" justifyContent="center"><CircularProgress /></Box>) : (<Carousel NextIcon={<NavigateNextOutlinedIcon />} PrevIcon={<NavigateBeforeOutlinedIcon />} navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                        backgroundColor: "#cb6ce6",
                        borderRadius: 0,
                        visibility: "visible"
                    }
                }} >
                {
                    datas.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>)}

        </Box>
    </ThemeProvider>
    )
}

function Item(props) {
    return (
        <ThemeProvider theme={theme}>
            <Box zIndex={1} mt={3}>
                <Grid container mb={3} >
                    <Grid item xs={12} display="flex" justifyContent="center">
                        <h2>{props.item.name}</h2>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" mb={4}>
                        <img src={props.item.url} loading="eager" alt={props.item.name} title={props.item.name}
                            height="auto" width="auto" style={{ maxWidth: { xs: "60%", sm: "80%" }, maxHeight: "70vh", borderRadius: "4%" }} />
                    </Grid>

                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default ImagesCarousel
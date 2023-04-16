import { Grid } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import React, { useState } from 'react'
import theme from '../assets/MuiTheme'
import { useEffect } from 'react'
import Boxes from '../components/Boxes'
import StoreTitle from '../components/StoreTitle'
import CircularProgress from '@mui/material/CircularProgress';

const Store = () => {

    const [datas, setDatas] = useState()
    const [puddings, setPuddings] = useState()
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)

    const url = import.meta.env.VITE_REACT_APP_API1
    const pudUrl = import.meta.env.VITE_REACT_APP_API2


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(url)
            const json = await data.json()
            setDatas(json)
            setLoading(false)
        }

        fetchData()

    }, [])

    useEffect(() => {
        const fetchPudding = async () => {
            const pudData = await fetch(pudUrl)
            const json = await pudData.json()
            setPuddings(json)
            setLoading2(false)
        }
        fetchPudding()
    }, [])




    return (
        <ThemeProvider theme={theme}>

            <Grid container justifyContent="center" textAlign="center" pt={3} pb={2} mb={3} id="store">
                <Grid item xs={12} justifyContent="center" display="flex" flexWrap={"wrap"}>
                    <StoreTitle title={"Cajas"} />

                    {loading ? (<CircularProgress />) : (datas.map((data) => (
                        <Boxes key={data.id} data={data} />
                    )))}
                </Grid>
            </Grid>

            <Grid container justifyContent="center" textAlign="center" pb={2}>
                <Grid item xs={12} justifyContent="center" display="flex" flexWrap={"wrap"}>
                    <StoreTitle title={"Budines"} />
                    {loading2 ? (<CircularProgress />) : (puddings.map((data) => (
                        <Boxes key={data.id} data={data} />
                    )))}
                </Grid>
            </Grid>


        </ThemeProvider >
    )
}

export default Store
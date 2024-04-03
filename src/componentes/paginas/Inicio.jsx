import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Cart from '../elementos/Cart'
import crear_personas from '../../img/crear_personas.png'
import listar_personas from '../../img/listar_personas.png'

export const Inicio = () => {
    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    MENÚ
                </Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={6}>
                        <Cart
                          titulo = "Crear Persona"
                          descripcion = "En este panel puedes crear la cantidad de persona que desees."
                          img = {crear_personas}
                          ruta = 'crear'
                        />
                    </Grid>
                    <Grid xs={6}>
                        <Cart
                          titulo = "Listar Persona"  
                          descripcion = "En este panel puedes listar las personas creadas para gestionar."
                          img = {listar_personas}
                          ruta = 'listar'
                        />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

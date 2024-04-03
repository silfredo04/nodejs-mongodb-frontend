import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import { guardar } from '../../funciones/Funciones'
import toast, { Toaster } from 'react-hot-toast';

export const CrearPersona = () => {

    const navegar = useNavigate();

    const [formData, setFormData] = React.useState({
        nombre: '',
        apellido: '',
        apodo: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const guardarDatos = async(e) => {
        e.preventDefault();
        const result = await guardar(formData);
        if(result.status == "success"){
            toast.success(result.message);
            setFormData(
                {
                    nombre: '',
                    apellido: '',
                    apodo: '',
                    email: ''
                }
            );
        }else{
            toast.error(result.message);
        }   
    };

    const ir = () => {
        navegar('/')
    };

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Container maxWidth="sm">
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        CREAR PERSONAS
                    </Typography>
                    <form onSubmit={guardarDatos}>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="nombre"
                            name="nombre"
                            label="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="apellido"
                            name="apellido"
                            label="Apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="apodo"
                            name="apodo"
                            label="Apodo"
                            value={formData.apodo}
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Grid container spacing={2} columns={16}>
                            <Grid xs={8}>
                                <Button type="submit" variant="outlined">CREAR</Button>
                            </Grid>
                            <Grid xs={8}>
                                <Button onClick={ir} variant="outlined">REGRESAR</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Container>
        </>
    );
}
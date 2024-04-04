import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { obtenerEmpleado, actualizar, actualizarAvatar,api } from '../../funciones/Funciones'
import { Cargando } from "../../componentes/elementos/Cargando"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



export const EditarPersona = () => {
    const [empleado, SetEmpleado] = useState({});
    const [carga, SetCarga] = useState(true);
    const { id } = useParams();
    const navegar = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        SetEmpleado({ ...empleado, [name]: value });
    };

    const actualizarDatos = async (e) => {
        e.preventDefault();
        delete empleado.created_at
        delete empleado.estado
        delete empleado.__v
        delete empleado.image
        const res = await actualizar(empleado, empleado._id);
        if (res.status == "success") {
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }

        // subida de imagenes
        const inputFile = document.querySelector("#file");
        if (res.status == "success" && inputFile.files[0] != undefined) {
            // Recoger la imagen a subir
            const formData = new FormData();
            formData.append('file0', inputFile.files[0]);
            // Peticion para enviar el Fichero
            const resFichero = await actualizarAvatar(formData, empleado._id);
            if (resFichero.status == "success") {
                toast.success("y avatar cargado");
            } else {
                toast.success("error al cargar avatar...");
            }
        }
        navegar('/listar')
    }

    const obtenerPersona = async () => {
        const res = await obtenerEmpleado(id);
        if (res.status == "success") {
            SetEmpleado(res.empleadoId);
            SetCarga(false);
        }
    }

    const ir = () => {
        navegar('/listar')
    };

    useEffect(() => {
        obtenerPersona();
    }, [id]);
    return (
        <> {carga ? (<Cargando />) : (
            <>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
                <Box sx={{ width: '100%', maxWidth: 1000 }}>
                    <Typography variant="h4" gutterBottom>
                        Editando a {empleado.nombre + " " + empleado.apellido}....
                    </Typography>
                </Box>
                <Container maxWidth="sm">
                    <Box sx={{ marginTop: 4 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={15} sx={{ display: 'flex', justifyContent: 'center' }}> {/* Agrega esta línea */}
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar
                                        alt="Travis Howard"
                                        src={api + "obtenerimagen/" + empleado.image}
                                        sx={{ width: 200, height: 200 }} // Ajusta el tamaño del Avatar aquí
                                    />
                                </Stack>
                            </Grid>
                        </Grid>
                        <form onSubmit={actualizarDatos}>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="nombre"
                                name="nombre"
                                label="Nombre"
                                value={empleado.nombre}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="apellido"
                                name="apellido"
                                label="Apellido"
                                value={empleado.apellido}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="apodo"
                                name="apodo"
                                label="Apodo"
                                value={empleado.apodo}
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
                                value={empleado.email}
                                onChange={handleChange}
                                required
                            />
                            <Grid container spacing={2} columns={16}>
                                <Grid xs={8}>
                                    <Typography variant="h6" gutterBottom>
                                        Cargar imagen :
                                    </Typography>
                                </Grid>
                                <Grid spacing={5}>
                                    <div class="upload-button-container">
                                        <input type="file" id="file" name='file0' />
                                        <label for="file">
                                            <div class="upload-button">
                                                <div class="cloud-icon"></div>
                                            </div>
                                        </label>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} columns={16}>
                                <Grid xs={8}>
                                    <Button type="submit" variant="outlined">ACTUALIZAR</Button>
                                </Grid>
                                <Grid xs={8}>
                                    <Button onClick={ir} variant="outlined">REGRESAR</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Container>
            </>
        )
        }
        </>
    )
}

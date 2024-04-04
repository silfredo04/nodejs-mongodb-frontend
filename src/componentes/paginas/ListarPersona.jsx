import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { obtenerEmpleados, api, eliminar } from '../../funciones/Funciones';
import { Cargando } from '../elementos/Cargando';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const ListarPersona = () => {
    const [empleados, setEmpleados] = useState([]);
    const [carga, setCarga] = useState(true);
    const navegar = useNavigate();

    const eliminarPersona = async (id) => {
        const res = await eliminar(id);
        if (res.status == "success") {
            setCarga(true);
            try {
                const empleadosData = await obtenerEmpleados();

                if (empleadosData.status === "success") {
                    setEmpleados(empleadosData.empleados);
                }
            } catch (error) {
                console.error("Error al obtener los empleados:", error);
            } finally {
                setCarga(false);
            }
            toast.success(res.message);
        } else {
            toast.error(res.message);
        }
    }

    const editarPersona = (id) => {
        navegar('/editar/' + id);
    }
    useEffect(() => {
        const obtener = async () => {
            try {
                const empleadosData = await obtenerEmpleados();
                if (empleadosData.status === "success") {
                    setEmpleados(empleadosData.empleados);
                }
            } catch (error) {
                console.error("Error al obtener los empleados:", error);
            } finally {
                setCarga(false);
            }
        };
        obtener();
    }, []);

    return (
        <>
            {carga ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <Cargando />
                </Box>
            ) : (
                <>
                    <Toaster
                        position="top-right"
                        reverseOrder={false}
                    />
                    <Box sx={{ width: '100%', maxWidth: 1000 }}>
                        <Typography variant="h4" gutterBottom>
                            Listado de personas
                        </Typography>
                        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper' }}>
                            {empleados.map((empleado, index) => (
                                <React.Fragment key={index}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar alt={empleado.nombre} src={api + "obtenerimagen/" + empleado.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={empleado.nombre}
                                            secondary={empleado.apellido}
                                        />
                                        <Grid container spacing={2} columns={16}>
                                            <Grid xs={8}>
                                                <Button onClick={() => editarPersona(empleado._id)} variant="outlined">EDITAR</Button>
                                            </Grid>
                                            <Grid xs={8}>
                                                <Button onClick={() => eliminarPersona(empleado._id)} variant="outlined">ELIMINAR</Button>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                    {index < empleados.length - 1 && <Divider variant="inset" component="li" />}
                                </React.Fragment>
                            ))}
                        </List>
                    </Box>
                </>
            )}
        </>
    );
};


import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                py: 3,
                px: 2,
                textAlign: 'center',
                mt: 'auto', // Esto es importante para que el footer se pegue al final de la página
                width: '100%', // Ocupa todo el ancho disponible
                position: 'relative', // Esto asegura que el footer esté alineado al inicio
                left: 0, // Alinea el footer al inicio
            }}
        >
            <Typography variant="body1">
                © {new Date().getFullYear()} GESTION PERSONAS
            </Typography>
            <Typography variant="body2" mt={2}>
                Hecho con amor
            </Typography>
            <Typography variant="body2">
                <Link color="inherit" href="https://saorozcom.netlify.app/" target="_blank" rel="noopener noreferrer">
                    SAOROZCOM
                </Link>
            </Typography>
        </Box>
    );
}

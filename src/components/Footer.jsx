import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <Box sx={{backgroundColor:"#000"}}>
            <Container sx={{paddingY:"40px"}}>
                <Typography sx={{fontSize:"16px",color:"white",textAlign:"center"}}>
                    ويكي كورس ، جميع الحقوق محفوظة . {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    )
}

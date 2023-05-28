import { Box, Container, Typography,styled } from '@mui/material'
import React from 'react'

const Ground = styled(Box)({
    marginTop:"56px",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
})

const Text = styled(Typography)({
    fontWeight:"700",
    color:"white",
    textAlign:"center",
    backgroundColor:"#00000069",
    margin:"auto",
    padding:"30px"
})

export default function Banner() {
    return (
        <Ground className="ground" sx={{height:{lg:"calc(100vh - 56px)",md:"calc(80vh - 56px)",xs:"calc(60vh - 56px)"}}}>
            <Container>
                <Text sx={{fontSize:{xs:"20px",md:"24px",lg:"28px"},width:{lg:"60%",sm:"75%",xs:"100%"}}}>
                    العديد من الكورسات التي تلبي جميع الاختصاصات
                </Text>
            </Container>
        </Ground>
    )
}

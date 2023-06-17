import { Button, Container, Typography } from '@mui/material'
import {useNavigate} from 'react-router-dom'
import React from 'react'
export default function NotFound() {
    const navigate = useNavigate()    
    return (
        <Container sx={{marginY:"110px",minHeight:"60vh",textAlign:"center"}}>
            <Typography sx={{fontSize:"82px",fontWeight:"700",marginBottom:"12px"}}>404</Typography>
            <Typography sx={{fontSize:"16px",fontWeight:"600",marginBottom:"26px"}}>
            الصفحة التي تبحث عنها غير موجودة. ولكن يمكنك النقر فوق الزر أدناه للعودة إلى الصفحة الرئيسية.
            </Typography>
            <Button onClick={()=>navigate('/')} variant='contained'>الصفحة الرئيسية</Button>
        </Container>
    )
}

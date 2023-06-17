import React from 'react'
import {Container, Typography,Box} from '@mui/material'
import ReactPlayer from 'react-player'

export default function Lesson() {
    return (
        <Container sx={{marginY:"110px"}}>
            <Box sx={{minHeight:"60vh"}}>
                <Typography sx={{textAlign:"center",fontSize:{md:"28px",xs:"20px"},fontWeight:"700",marginBottom:"48px"}}>
                    01.HTML lesson one intro to html | دورة في لغة HTML
                </Typography>
                <Box sx={{height:{lg:"700px",md:"500px",sm:"400px",xs:"300px"}}}>
                    <ReactPlayer
                    width="100%"
                    height="100%"
                    url="https://www.youtube.com/watch?v=6QAELgirvjs&t=519s"/>
                </Box>
            </Box>
        </Container>
    )
}

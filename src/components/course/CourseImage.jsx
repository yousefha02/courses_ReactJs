import { Box,styled } from '@mui/material'
import React from 'react'

const Image = styled('img')({
    width:"350px",
    height:"263px"
})

export default function CourseImage({image}) {
    return (
        <Box sx={{display:"flex",justifyContent:"center",backgroundColor:"#0000001a",paddingX:"20px"}}>
            <Image src={image} alt={"load..."}/>
        </Box>
    )
}

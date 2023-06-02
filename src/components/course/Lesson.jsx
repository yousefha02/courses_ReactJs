import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Lesson({item,index}) {
    return (
        <Box sx={{marginBottom:"24px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Link to={`/lesson/${item.id}`}>
                <Typography sx={{color:"#21a7d0",fontSize:"15px"}}>
                    <span style={{color:"black"}}>{index+1} -</span> {item.title}
                </Typography>
            </Link>
            <Box sx={{display:"flex",columnGap:"4px",alignItems:"center"}}>
                <Typography sx={{fontSize:"14px"}}>{item.time}</Typography>
                <AccessTimeIcon sx={{fontSize:"18px"}}/>
            </Box>
        </Box>
    )
}

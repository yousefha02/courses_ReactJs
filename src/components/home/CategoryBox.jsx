import { Typography, styled } from '@mui/material'
import React from 'react'


const Wrapper = styled('div')({
    borderRadius:"5px",
    height:"260px",
    boxShadow:"0 0 5px 2px rgba(0,0,0,.4)",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    width:"100%",
    transition:"all 0.2s",
    ":hover":{
        transform:`translateY(-10px)`
    },
    color:"white",
    display:"flex",
    alignItems:"end",
    padding:"30px",
    position:"relative"
})

const TextWrapper = styled('div')({
    zIndex:3
})

function CategoryBox({category}) {
    return (
        <Wrapper sx={{backgroundImage:`url(${category.image})`}} className='overlay'>
            <TextWrapper>
                <Typography sx={{fontSize:"22px",fontWeight:"700",marginBottom:"6px"}}>{category.title}</Typography>
                <Typography>{category.coursesNumber}</Typography>
            </TextWrapper>
        </Wrapper>
    )
}

export default CategoryBox
import { Box,Container,styled,Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Course from '../reusableUi/Course'
import courses from '../../util/courses'

const Title = styled('p')({
    fontSize:"32px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"38px"
})


export default function BestCourses() {
    return (
        <Box sx={{backgroundColor:"#f9f8f8",paddingY:"40px"}}>
            <Container>
                <Title>كورسات متميزة</Title>
                <Grid container spacing={3}>
                {
                    courses.slice(0,6).map((course,index)=>
                    {
                        return(
                            <Grid item xs={4} key={index+'as1'}>
                                <Link to={`/course/${course.id}`}>
                                    <Course course={course}/>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
            </Container>
        </Box>  
    )
}

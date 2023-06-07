import React from 'react'
import {useParams} from 'react-router-dom'
import courses from '../util/courses'
import { Box, Container,Grid,Paper,styled } from '@mui/material'
import Lessons from '../components/course/Lessons'
import Details from '../components/course/Details'

const Title = styled("p")({
    fontSize:"26px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"38px"
})

export default function SingleCourse() {
    const {id} = useParams()
    const course = courses.find(course=>course.id===id)
    console.log(course)
    return (
        <Box sx={{marginTop:"110px"}}>
            <Title>{course.title}</Title>
            <Box sx={{backgroundColor:"#f3f8f9",paddingY:"60px"}}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={7} lg={8}>
                            <Lessons/>
                        </Grid>
                        <Grid item xs={12} md={5} lg={4}>
                            <Details course={course}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

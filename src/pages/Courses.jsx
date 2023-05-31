import { Container ,styled,Grid} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import courses from '../util/courses'
import Course from '../components/reusableUi/Course'
import {useParams } from 'react-router-dom'

const Title = styled('p')({
    fontSize:"32px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"38px"
})

export default function Courses() {
    const {id} = useParams()

    return (
        <Container sx={{marginY:"110px"}}>
                <Title>كورسات </Title>
                <Grid container spacing={3}>
                {
                    courses.filter(course=>course.categorId===id).map((course,index)=>
                    {
                        return(
                            <Grid item xs={12} sm={6} lg={4} key={index+'as1'}>
                                <Link to={`/course/${course.id}`}>
                                    <Course course={course}/>
                                </Link>
                            </Grid>
                        )
                    })
                }
                </Grid>
        </Container>
    )
}

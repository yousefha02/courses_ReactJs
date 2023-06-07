import { Box } from '@mui/material'
import React from 'react'
import CourseImage from './CourseImage'
import CourseInformation from './CourseInformation'

export default function Details({course}) {
    return (
        <Box>
            <CourseImage image={course.image}/>
            <CourseInformation course={course}/>
        </Box>
    )
}

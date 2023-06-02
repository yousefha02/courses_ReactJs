import React from 'react'
import lessons from '../../util/lessons.js'
import { Box, Paper } from '@mui/material'
import Lesson from './Lesson.jsx'

export default function Lessons() {
    return (
        <Paper sx={{padding:"30px"}}>
            {
                lessons.map((lesson,index)=><Lesson key={index+'aq'} item={lesson} index={index}/>)
            }
        </Paper>
    )
}

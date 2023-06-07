import { Paper,styled } from '@mui/material'
import React from 'react'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TranslateIcon from '@mui/icons-material/Translate';

const Title = styled("p")({
    fontSize:"15px",
    color:"#505050"
})

const WrapperBox = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"20px"
})

const TitleWrapper = styled("div")({
    display:"flex",
    columnGap:"8px",
    alignItems:"center"
})

export default function CourseInformation({course}) {
    return (
        <Paper sx={{marginTop:"40px",padding:"30px"}}>
            <WrapperBox>
                <TitleWrapper>
                    <PersonIcon sx={{color:"#2196f3",fontSize:"17px"}}/>
                    <Title>المحاضر</Title>
                </TitleWrapper>
                <Title>{course.teacher}</Title>
            </WrapperBox>
            <WrapperBox>
                <TitleWrapper>
                    <CastForEducationIcon sx={{color:"#2196f3",fontSize:"17px"}}/>
                    <Title>عدد الدروس</Title>
                </TitleWrapper>
                <Title>{course.lessons}</Title>
            </WrapperBox>
            <WrapperBox>
                <TitleWrapper>
                    <AccessTimeIcon sx={{color:"#2196f3",fontSize:"17px"}}/>
                    <Title>مدة الكورس</Title>
                </TitleWrapper>
                <Title>{(course.period /60).toFixed(2)}</Title>
            </WrapperBox>
            <WrapperBox>
                <TitleWrapper>
                    <TranslateIcon sx={{color:"#2196f3",fontSize:"17px"}}/>
                    <Title>اللغة</Title>
                </TitleWrapper>
                <Title>{course.language}</Title>
            </WrapperBox>
        </Paper>
    )
}

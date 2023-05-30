import { Box ,Divider,Paper,Rating,Typography,styled} from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const Image = styled('img')({
    width:"100%",
    height:"262px"
})

const Center = styled('div')({
    display:"flex",
    alignItem:"center",
})

export default function Course({course}) {
    return (
        <Box sx={{backgroundColor:"white",height:"100%",boxShadow:"0 0 30px #eee",border:"1px solid #dfe9eb"}}>
            <Image src={course.image} alt={course.title}/>
            <Box sx={{padding:"12px 16px"}}>
                <Rating name="read-only" value={5} size='small' readOnly sx={{marginBottom:"12px"}}/>
                <Typography sx={{fontSize:"22px",fontWeight:"700"}}>{course.title}</Typography>
                <Divider sx={{marginY:"18px"}}/>
                <Center sx={{justifyContent:"space-between",paddingBottom:"30px"}}>
                    <Center sx={{columnGap:"6px"}}>
                        <PersonIcon sx={{color:"#2196f3",fontSize:"20px"}}/>
                        <Typography sx={{fontSize:"14px"}}>{course.teacher}</Typography>
                    </Center>
                    <Center sx={{columnGap:"6px"}}>
                        <CastForEducationIcon sx={{color:"#2196f3",fontSize:"20px"}}/>
                        <Typography sx={{fontSize:"14px"}}>{course.lessons} درس</Typography>
                    </Center>
                </Center>
            </Box>
        </Box>
    )
}

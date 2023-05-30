import { Container, Grid, Typography,styled ,Box,Button} from '@mui/material'
import React from 'react'
import CategoryBox from './CategoryBox'
import categories from '../../util/categories'
import { Link } from 'react-router-dom'

const Title = styled(Typography)({
    fontSize:"32px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"32px"
})

export default function Categories() {
    return (
        <Container sx={{marginY:"60px"}}>
            <Title>تصنيفات الكورسات</Title>
            <Grid container spacing={3}>
                {
                    categories.slice(0,6).map((category,index)=>
                    {
                        return(
                            <Grid item xs={4}>
                                <Link to={`/category/${category.id}`}>
                                    <CategoryBox key={index+'aq1'} category={category}/>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display:"flex",justifyContent:'center',marginTop:"45px"}}>
                <Button color="secondary" variant='contained'>ما رأيك بالمزيد ... اضغط هنا</Button>
            </Box>
        </Container>
    )
}

import { Container, Grid, Typography,styled ,Box,Button} from '@mui/material'
import React from 'react'
import CategoryBox from '../reusableUi/CategoryBox'
import categories from '../../util/categories'
import { Link,useNavigate } from 'react-router-dom'

const Title = styled(Typography)({
    fontSize:"32px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"38px"
})

export default function Categories() {
    const navigate = useNavigate()

    return (
        <Container sx={{marginY:"60px"}}>
            <Title>تصنيفات الكورسات</Title>
            <Grid container spacing={3}>
                {
                    categories.slice(0,6).map((category,index)=>
                    {
                        return(
                            <Grid item xs={12} sm={6} lg={4}>
                                <Link to={`/category/${category.id}`}>
                                    <CategoryBox key={index+'aq1'} category={category}/>
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box sx={{display:"flex",justifyContent:'center',marginTop:"45px"}}>
                <Button color="secondary" variant='contained' onClick={()=>navigate('/courses')}>ما رأيك بالمزيد ... اضغط هنا</Button>
            </Box>
        </Container>
    )
}

import { Container,Grid,styled,Typography } from '@mui/material'
import React from 'react'
import CategoryBox from '../components/reusableUi/CategoryBox'
import { Link } from 'react-router-dom'
import categoires from '../util/categories'

const Title = styled(Typography)({
    fontSize:"32px",
    fontWeight:"700",
    textAlign:"center",
    marginBottom:"38px"
})

export default function Categoires() {
    return (
        <Container sx={{marginY:"110px"}}>
            <Title>قائمة تصنيفات الكورسات الكاملة</Title>
            <Grid container spacing={3}>
                {
                    categoires.map((category,index)=>
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
        </Container>
    )
}

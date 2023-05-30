import React from 'react'
import Banner from '../components/home/Banner'
import Categories from '../components/home/Categories'
import BestCourses from '../components/home/BestCourses'

export default function Home() {
    return (
        <div>
            <Banner/>
            <Categories/>
            <BestCourses/>
        </div>
    )
}

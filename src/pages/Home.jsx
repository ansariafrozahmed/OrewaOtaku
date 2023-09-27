import React from 'react'
import BannerSlides from '../components/BannerSlides'
import TopAiring from '../components/TopAiring/TopAiring'

const Home = () => {
    return (
        <div className='pt-5 lg:pt-0 '>
            <BannerSlides />
            <TopAiring />
        </div>
    )
}

export default Home
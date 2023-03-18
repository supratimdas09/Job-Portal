import React from 'react'
import BannerSliderReview from './components/BannerSliderReview'
import Footer from './components/Footer'
import Header from './components/Header'
import JobSection from './components/JobSection/JobSection'
import Navbar from './components/Navbar'
import Process from './components/Process'


function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Process/>
        <JobSection/>
        <BannerSliderReview/>
        <Footer/>
    </div>
  )
}

export default Home
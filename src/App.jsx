import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import AndroidSection from './components/AndroidSection'
import WhyUs from './components/WhyUs'
import LastBlog from './components/LastBlog'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <MainSection/>
      <SecondSection/>
      <AndroidSection/>
      <WhyUs/>
      <LastBlog/>
      <Footer/>
    </>
  )
}

export default App
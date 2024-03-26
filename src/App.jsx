import React from 'react'
import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import SecondSection from './components/SecondSection'
import AndroidSection from './components/AndroidSection'
import WhyUs from './components/WhyUs'

const App = () => {
  return (
    <>
      <Navbar/>
      <MainSection/>
      <SecondSection/>
      <AndroidSection/>
      <WhyUs/>
    </>
  )
}

export default App
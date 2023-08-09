import React from 'react'
import { Footer, Header, Introduction, Navbar, Project, School, Skills, Work } from '../components'

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <div className=' container max-w-screen-lg mx-auto mt-[100px] md:mt-[60px]'>
        <Header />
        <Skills />
        <Project />
        <Work />
        <School />
        <Introduction />
        <Footer />
      </div>
    </div>
  )
}

export default Home
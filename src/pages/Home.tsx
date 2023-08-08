import React from 'react'
import { Footer, Header, Navbar, Project, Skills, Work } from '../components'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=' container max-w-screen-lg mx-auto mt-[60px]'>
        <Header />
        <Skills />
        <Project />
        <Work />
        <Footer />
      </div>
    </div>
  )
}

export default Home
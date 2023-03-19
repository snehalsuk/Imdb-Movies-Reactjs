import React from 'react'
import Base from './Base'
import Popular from './Components/AddMovie/Popular'
import Footer from './Components/footer/Footer'
import Movie from './Components/Movie/Movie'
import NavbarHome from './Components/Navbar/NavbarHome'

const Home = () => {
  return (
    <>
    <Base>
    
    <Popular/>

<Movie/>
    
    </Base>
      
    
      </>
  )
}

export default Home
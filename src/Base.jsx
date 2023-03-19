import React from 'react'
import Footer from './Components/footer/Footer'
import NavbarHome from './Components/Navbar/NavbarHome'

const Base = ({title="Welcome to website",children}) => {
  return (
    <div className="container-fluid p-0 m-0">
    <NavbarHome/>
    {children}
    <Footer/>
</div>
  )
}

export default Base
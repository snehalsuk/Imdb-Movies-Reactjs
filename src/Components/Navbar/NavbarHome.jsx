import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, Form, Input, NavItem, NavLink } from 'reactstrap';
import { myAxios } from '../service/helper';

const NavbarHome = () => {
  const navigate=useNavigate();
  const[handlesearch,setHandleSearch]=useState()
  const [adddata, setAddData]=useState();
  
  const handleSearch=(e)=>{

    setHandleSearch(e.target.value)
    
    
      }


  
  const handleSeachOpt=()=>{
  
    

    return myAxios.get(`/movie/search/${handlesearch}`)
    .then((data)=>{
      // console.log(data);
    
   
    setAddData(data);
    // console.log(adddata.data);
    
  navigate("/search",{state:{data:adddata.data}})
    }).catch(error=>{
    
    })



}




  return (
    <>
    <Navbar className="nav_banner" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="" >MidNight</Navbar.Brand>
        <Nav className="me-auto">
        <NavItem>
              <NavLink tag={ReactLink} to="/home">
                Home
              </NavLink>
            </NavItem> 
            
            <NavItem>
              <NavLink tag={ReactLink} to="/trending">
                Trending
              </NavLink>
            </NavItem> 
         
        </Nav>
          <Nav>
             <Input type="search"
             placeholder='Search'
             onChange={(e)=> handleSearch(e)} 
             />
            

            <Button className='ml-1'
            onClick={handleSeachOpt} ><i class="fa fa-search" aria-hidden="true"></i></Button>
      
          </Nav>
      </Container>
     
    </Navbar>
    
  </>
  )
}

export default NavbarHome


import Carousel from 'react-bootstrap/Carousel';
import "./popular.css"
import React, { useEffect, useState } from 'react'
import { Card, Navbar } from 'reactstrap';
import NavbarHome from '../Navbar/NavbarHome';
import axios from 'axios';


const Popular = () => {


    const [users,setUsers]=useState([]);

  
   

    useEffect(()=>{

        loadUsers();

    },[]);

    const loadUsers= async()=>{
        const result=await axios.get("http://localhost:8080/movie/get");

        console.log(result.data);
        setUsers(result.data);

    }
  return (
  
    <>
 

     
   
    <div className="banner_text_image_container">

  
    <Carousel >
    
    {
      users.map(user =>{
    return (
    <Carousel.Item 
    interval={7000}
    >
  
       <img className="banner-img" src={`http://localhost:8080/movie/image/${user.imageName}`} />
       
      <Carousel.Caption>
      <div className="banner_butt">
         
     
   
   </div>
        <h3> {user.title}</h3>
       </Carousel.Caption>
      
    </Carousel.Item>
    
    
    )
  }
  ) 
  }
    </Carousel>
  
   

 

</div>
  

</>
  )
}
export default Popular
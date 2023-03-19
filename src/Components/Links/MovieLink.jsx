
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const MovieLink = () => {

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
      {
            users.map((user =>{
                return(
             
               <iframe  {...user.MovieLinks} />
          )}) ) }      
    </>
  )
}

export default MovieLink
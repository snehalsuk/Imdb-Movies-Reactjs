import axios from 'axios';
import {Card} from "reactstrap"
import Popular from '../AddMovie/Popular';
import React, { useEffect, useState } from 'react'
import "./movie.css";
import {  useNavigate } from 'react-router-dom';


const Movie = () => {
  const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    const [singledata, setSingleData]=useState({dat:""});
    

    
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
   

    useEffect(()=>{

        loadUsers();

    },[]);

    const loadUsers= async()=>{
        const result=await axios.get("http://localhost:8080/movie/get");

        console.log(result.data);
        setUsers(result.data);

    }


    const handleClick=(e)=>{
      console.log("clicked")
      
        console.log(e)
        console.log(singledata)
     setSingleData(e);
      navigate("/watchmovie", {state:{id:e.id,title:e.title,description:e.description,imageName:e.imageName}})
      
    }
  return (
    <div id="movie">
      <div >
       <h3 className="movie-banner-title">Trending Hollywood Movies</h3>
       </div>
    <div className="movie-container">
   
          {
            users.map((user,index)=>(
             
                <div className="movie-img">
                {/* <th scope="row" key={index}>{index+1}</th> */}
               
                {/* <td>{user.description}</td> */}
                <Card className="movie-card">
                <img className="cards__img"
                onClick={(e) => handleClick(user)} 
                src={`http://localhost:8080/movie/image/${user.imageName}`} />
                
                <div className="movie-title">{user.title}</div>
                {/* <td>{user.imageName}</td> */}
                </Card>
               </div>
               

          ))
          } 


    
        </div>


         

        </div>
        
      
  )
}

export default Movie
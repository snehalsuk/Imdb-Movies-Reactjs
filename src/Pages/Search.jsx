import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Base from '../Base';
import "./search.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Search = () => {
    const [searchstate,setSearchState]=useState([]);
    const location= useLocation();
    const notify = () => toast("feature coming soon");
    useEffect(()=>{
        console.log(location)
        setSearchState(location.state.data);
    
      
        
      })
  return (
    <>
    
    <Base>
    <div>
    {
    searchstate.map((user,index)=>(
  
    <div className="single_container">
  
  
 
      
       <Card className="card_img_container" >
       
       <h1 className="single_title">{user.description }: {user.title}</h1>

     <img 
       className="card_img"
      
       src={`http://localhost:8080/movie/image/${user.imageName}`}
       
       
  />
    
      
  
 <div className="playlist_container">
 <div className="playlist_butt">
 <Button className="play_butt " onClick={notify}><i class="fa-solid fa-backward"></i></Button>
 </div>
 <div className="playlist_butt">
 <Button className="play_butt" onClick={notify}><i class="fa-sharp fa-solid fa-play"></i></Button>
 </div>
 <div className="playlist_butt">
 <Button className="play_butt" onClick={notify}><i class="fa-solid fa-forward"></i></Button>
 </div>
 </div>
 

 </Card>      
 <ToastContainer />
 </div>
  
      
   )
 )

   }
 </div>
 </Base>
   </>
  )
}

export default Search
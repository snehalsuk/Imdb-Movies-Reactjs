import React from 'react'
import "./footer.css"

const Footer = () => {


  return (
    <section >

       
    
        <div className="footer_logo">
        
     
        <section class="mb-4">
    
        <a class="btn btn-outline-light btn-floating m-1" href="https://m.facebook.com/100002630854162" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

   
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.twitter.com" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.google.com" role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.instagram/snehal_sukhadeve" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

    
      <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/snehal-sukhadeve-2980551a2/" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/snehalsuk" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
     

  
    <div  >
  
      
  <a className="footer_home"  href="/home" >Home</a>

  <a className="footer_features" href="/trending">Features</a>



</div>

      </div>


      
        <section className="footer_copyright">
        <div className="footer_copy" >
    © 2020 Copyright : 
    <a className="footer_text" href="https://iinvestme.com/"> IinvestMe.com</a>
  </div>
        </section>
    </section>
    
   
  )
}

export default Footer
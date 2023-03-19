import axios from "axios";
import { myAxios } from "./helper"

export const createPostForm=(userData)=>{
return myAxios.post(`/movie/add`,userData)
.then((response)=> response.data)

}
export const signUp=(image,userData)=>{

   
    console.log(image);
    
    const formData= new FormData();
    formData.append("image",image);
    formData.append("netflixDto",userData);
    console.log(formData)
  
    return myAxios.post("/movie/upload/data",formData,{
    headers:{
         'Content-Type':'multipart/form-data'
        //  'Content-Type':'application/json'
     
   },
        body:JSON.stringify({
            formData:formData
        })

   
   
 })
.then((response)=>response.data)


// var formdata = new FormData();
// formdata.append("image", image);
// formdata.append("userData", userData);

// var requestOptions = {
// //   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// return myAxios.post("/movie/upload/data", requestOptions,{
//     headers:{
//                  'Content-Type':'multipart/form-data'
//                //  'Content-Type':'application/json'
             
//             }
// })
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
}

// export const loadAllPosts=()=>{
//     return myAxios.get(`/movie/get/`)
//     .then(response=>response.data)
//     console.log("getApi")
// }


export const uploadPostImage=(image)=>{
    let formData= new FormData();
    formData.append("image",image);
    console.log(formData)
    return myAxios.post(`/movie/image/`,formData,{
    
     
        headers:{
            'Content-Type':'multipart/form-data'
        }
     })
    .then((response)=>response.data)
}
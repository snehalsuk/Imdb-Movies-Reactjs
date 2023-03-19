import React, { useEffect, useRef } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'

import { useState } from 'react';

import { createPostForm, uploadPostImage } from './service/post-service';
import { signUp } from './service/post-service';



const ImageCarousel = () => {


const [user,setUser]=useState(undefined)
const [image,setImage]=useState(null)



// const [post,setPost]=useState({
//     title:'',
//     description:''
// })

const [data,setData]=useState({
    title:"",
    description:""
    
})


// const fieldChange=(e)=>{

//     setPost({...post,[e.target.name]:e.target.value})
// }

// const descriptionChanged=(e)=>{
//         // setPost({...post,'description':data})
//         setPost({...post,[e.target.name]:e.target.value})
// }

// const descriptionChanged=(e)=>{

//     setPost({...post,[e.target.name]:e.target.value})
// }

const submitForm=(e)=>{
    e.preventDefault();
    console.log(data);
    
    signUp(image,data).then((resp)=>{
        console.log(resp);
        console.log("success log");
        // createPostForm(data).then(data=>{

        setData({
            title:"",
            description:""
        })
       
    }).catch((error)=>{
        console.log(error)
        console.log("Error log")


      
    })
// })
}

const handleFileChange=(e)=>{
    console.log(e.target.files[0])
    setImage(e.target.files[0]);
}


//     const createPost=(e)=>{
//             e.preventDefault();
//             console.log("yes form submited ")
//             console.log(post);

//     createPostForm(post).then(data=>{

        
//         uploadPostImage(image).then(data=>{
            
//             console.log("Image uploaded successfully")
//         }).catch(error=>{
          
//             console.log(error)
//         })

       
//         console.log(post)
//         setPost({
//             title:'',
//             description:''
//         })
//     }).catch((error)=>{
       
//         console.log(error)
//     })

// }

const handleChange=(e,property)=>{
    console.log(e.target.value)
        setData({...data,[property]:e.target.value})
}
  return (
    <div className="wrapper">

    <Card>
        <CardBody>
            <Form 
            // onSubmit={createPost}
            onSubmit={submitForm}
            >
                <div className="my-3">
                <Label for="title">Title</Label>
                <Input type="text"
                id="title"
                placeholder="Enter here" 
                name='title'
                // onChange={fieldChange}
                onChange={(e)=>handleChange(e,'title')}
                value={data.password}
                />
                </div>
                <div className="my-3">
                <Label for="title">Description</Label>
                <Input type="textarea"
                id="description"
                placeholder="Enter here"
                style={{height:"100px"}} 
                name='description'
                // onChange={descriptionChanged}
                onChange={(e)=>handleChange(e,'description')}
                value={data.password}
                />
                {/* <JoditEditor
			ref={editor}
			value={post.description}
			onChange={descriptionChanged}
		/> */}
                </div>
                <div className="my-3">
                <Label for="image">Post Images</Label>
                <Input type="file"
                id="image"
                onChange={handleFileChange}
                />
                </div>
                <Container className="text-center">
                    <Button type="submit" color='primary'>Create</Button>
                    <Button color="danger ms-2">Reset</Button>
               
                </Container>
                

            </Form>

        </CardBody>


    </Card>
       
    </div>
  )
}

export default ImageCarousel
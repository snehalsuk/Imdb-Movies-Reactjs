import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { CardBody, CardHeader } from 'reactstrap'
import Base from '../../Base'

const Trending = (props) => {
  return (
    <Base>
    <Container style={{height:"50rem"}}>
    <Row className="mt-4">
             <Col sm={{size:7,offset:3}}>
             
 <Card style={{padding:"10px",width:"30rem"}}>
     <CardHeader style={{textAlign:"center",border:"none",color:"teal"}}>
       <h5>Movies</h5>
     </CardHeader>
     <CardBody>
 
        Trending movies  coming soon.....
     </CardBody>
             </Card>
 
             </Col>
             </Row> 
    </Container>
    
    </Base>
  )
}

export default Trending
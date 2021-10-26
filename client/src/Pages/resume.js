import React, {Component} from 'react';
import { Cont, Container,ImgLink} from './pagesStyles';
import  {Col, Row, Button} from 'react-bootstrap';
import resume from '../images/Resume.pdf'

const Resume = () => {
  return (
   



    <Cont>
    <Container>
    <Row>
      <Col sm={6}>
        <h3>Education</h3>


      </Col>
      <Col sm={6}>
   
       <h4>University of Sydney</h4>
       <p>Web Developer 2021</p>
       <div>
      <br/>
      </div>
   
       <h4>University Externado de Colomnia</h4>
       <p>Certificate, International Commerce 2009</p>
       <div>
      <br/>
      </div>

       <h4>University Politecnico GranColombiano</h4>
       <p>System Engineer 2006</p>
       <div>
      <br/>
      </div>
      <div>
      <hr/>
      </div>
     </Col>
    </Row>
    
    <Row>
      <Col sm={6}><h4>Work</h4>  
      </Col>
      <Col sm={6}>
      <h4>BKH Group</h4>
       <p>Carpenter 2021</p>
       <div>
      <br/>
      </div> 
       <h4>Pinetown Precision Engineering </h4>
       <p>Fanuc Programer  2015</p>
       <div>
      <br/>
      </div>  
       <h4>Partescol SAS</h4>
       <p>Production Manager 2015</p>
       <div>
      <br/>
      </div>
       <h4>Force Factory</h4>
       <p>Import Coordinator</p>
       <div>
      <br/>
      <br/>
      <br/>
      </div>  
      
      
      
      
      </Col>
    </Row>
    
     <Row>
      <Col sm={1}>  
       <a>< Button variant="dark" size="lg" href={resume} download="resume.pdf"> Resume</Button></a>
      </Col>
     </Row>
  </Container>
  </Cont>
















  );}
  
  

export default Resume;

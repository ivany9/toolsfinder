import React, { } from 'react';
// import profilephoto from '../images/Ce.gif';
import { Cont, Container, Photo} from './pagesStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row} from 'react-bootstrap';
import logo from '../images/favicon.ico'
import ivan from '../images/ivan.jpg'


const About = () => {
  return (
    
    
     

     <Cont>
    <Container>
    <Row>
      <Col sm={6}><Photo src={ivan}/></Col>
    </Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={6}>
      <h4>About Me</h4>
      <div>
       <br/>
       <br/>
      </div>
        <p>
        Graduated as a systems engineer in 2006 with a degree from Politecnico University, Colombia. Experience working in different roles within the field of 
        large volume production of heavy duty machinery and plastic injection models. CNC machinery programmer "FANUC language." 
        Experience importing parts for all types of motorcycles. </p>
        <div>
       <br/>
      </div>   
        <p>Living in Sydney Australia since 2015.  Developing new skills 
        as a carpenter, and now returning to work with my passion for technology. Obtaining my formal qualification as a web developer
        from the University of Sydney.
       </p>
       <div>
       <br/> 
     </div>        
         <p>Working in technologies including JavaScript, Node.js, React, CSS, MongoDB, MySQL.</p>
         <div>
       <br/>
      </div>
            <p> Passionate about riding motorcycles, spending an afternoon on my paddle board, and sitting down to develop and create on my computer.
           </p>
      </Col>  
    </Row>
  </Container>
  </Cont>
  )
  
}

export default About;



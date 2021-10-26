import { contains } from 'dom-helpers';
import {Form,Cont,ImgLink} from './pagesStyles';
import React, { useState } from 'react';
import {validateEmail,validata } from '../utils/helpers'
import  { Button} from 'react-bootstrap';

const Contact = () => {

   const [email,setEmail]=useState('');
   const [userName, setUserName]=useState('');
   const [texta,setText]=useState('');
   const [errorMessagename,setErrorMessagename]=useState('');
   const [errorMessageemail,setErrorMessageemail]=useState('');
   const [errorMessagedescription,setErrorMessagedescription]=useState('');

   const handleInputChange=(e) =>{
   
   const{target}=e;
   const inputType=target.name;
   const inputValue=target.value;
   
   

   if(inputType==='userName'){
    setUserName(inputValue);
   } else if (inputType==='email') {
    setEmail(inputValue);
    
   }else {
         
        setText(inputValue);
   }

  }

   const handleFormSubmit = (e) =>{

    e.preventDefault();
   
       if(!validata(userName)){
        //alert(userName);
         setErrorMessagename('Include name');
         return
         }
    
     else if(!validateEmail(email)){
          
        
         setErrorMessageemail('Invalid email');
         return;
         }
         else  if (!validata(texta)) {
          setErrorMessagedescription('Description empty');   
          return;  
         }

         setUserName('');
         setEmail('');
         setText('');
         setErrorMessageemail('');
         setErrorMessagename('');
         setErrorMessagedescription('');

   }






  return (
    
    <Cont>
      <Form>
        
        

    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input value={userName} onChange={handleInputChange} name="userName"  className="form-control" placeholder="name"/><p> {errorMessagename}</p>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input  value={email} onChange={handleInputChange}  name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="name@example.com" />
        <p> {errorMessageemail}</p>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea value={texta} onChange={handleInputChange} className="form-control" name="texta" rows="10"></textarea>  <p> {errorMessagedescription}</p>
    </div>
    <div>
      <br/>
      </div>
      < Button variant="dark" size="lg" onClick={handleFormSubmit}>Submit</Button>
    
     </Form>
     
    
</Cont> 

  );
};

export default Contact;

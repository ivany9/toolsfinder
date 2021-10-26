import React from 'react';
import {FooterLink,Container} from './FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   
    return (
        
        
         <Container>
       
       <FooterLink href="https://facebook.com/jorgivan/" ><FontAwesomeIcon icon={faFacebook}/></FooterLink>
       <FooterLink href="https://instagram.com/jivan298" ><FontAwesomeIcon icon={faInstagram}/></FooterLink>
       <FooterLink href="https://twitter.com/jorgivan298" ><FontAwesomeIcon icon={faTwitter}/></FooterLink>    
       <FooterLink href="https://github.com/ivany9" ><FontAwesomeIcon icon={faGithub}/></FooterLink> 
          
           
      </Container>
    );
  };
  export default Footer;






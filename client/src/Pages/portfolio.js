
import progresive from '../images/progresive-budget.gif'
import team from '../images/team-generator.gif'
import wheather from '../images/wheather-dashboard.gif'
import employee from '../images/employee-manager.gif'
import fitness from '../images/fitness-tracker.gif'
import car from '../images/car-enthusiats.gif'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImgLink,Cont} from './pagesStyles'
import React from 'react';


const project=[
  {
   title:"Team Profile Generator",
   image: team,
   url:"https://github.com/ivany9/Team-Profile-Generator.git",
   id:1,
   deploy:"https://ivany9.github.io/Team-Profile-Generator/"
  },
  {
      title:"Progressive Budget",
      image:progresive,
      url:"https://github.com/ivany9/Progressive-Budget.git",
      id:2,
      deploy:"https://progressibudget.herokuapp.com/"
     },
     {
      title:"Weather Dashboard",
      image: wheather,
      url:"https://github.com/ivany9/Weather-Dashboard.git",
      id:3,
      deploy:"https://ivany9.github.io/Weather-Dashboard/"
     },
     {
      title:"Employee Management System",
      image:employee,
      url:"https://github.com/ivany9/Employee-Management-System.git",
      id:4,
      deploy:"https://1drv.ms/v/s!Ap_psURWyWFqhzOratDxVNA5o1Rq?e=17FjeH"
     },
     {
      title:"Fitness Tracker",
      image:fitness,
      url:"https://github.com/ivany9/Fitness-Tracker.git",
      id:5,
      deploy:"https://fittness-track.herokuapp.com/"
     },
     {
      title:"Car Enthusiasts",
      image: car,
      url:"https://github.com/ChristopherBz/Car-Enthusiasts.git",
      id:6,
      deploy:"https://car-enthusiasts.herokuapp.com/"
     }
  
  ]
  

  const  Portfolio=()=> {
    return (
      <Cont>
      <div>
        <h4 className = "text-center mb-3 fw">Projects</h4>
        <div className = "d-flex flex-wrap justify-content-evenly">
        {project.map((projects)=>(
        <Card
        name = {projects.title}
        image = {projects.image}
        url = {projects.url}
        id = {projects.id}
        deploy={projects.deploy}
        />
        ))}
        </div>
      </div>
      </Cont>
    );
      
     
  }

  function Card(props) {
     
    const style = {
      width:"25rem"
    } 

    return (
        <div className="card m-3" style={style}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title fw-bold">{props.name}</h5>
                
            </div>
            <div className="card-body d-flex justify-content-center ">
             
            <ImgLink   href={props.url}><FontAwesomeIcon icon={faGithub} /></ImgLink> 
            <ImgLink   href={props.deploy}><FontAwesomeIcon icon={faCoffee}/></ImgLink>
              
            </div>
        </div>
    )
   }
  

 export default Portfolio;










import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Me from '../../Images/Me.jpg';
import './About.css';

function About() {
  return (
    <div>
        <Container>
        <div className="About">
       <h1> About Me </h1>
       <p>"I love providing solutions to problems with logical and critical thinking. I love working with teams to achieve systemic and organized goals."</p>
         
         <div className="lines"></div>
        <div className="About-section">
         <div className="text">
            <h3> My Passion </h3>
            <div className="lines2"></div>
            <p> I am a Nigerian who developed interest for coding during my last days in secondary/high school. I am passionate about being part of projects, building and adding stuff together to get results. I love providing solutions to problems with logical and critical thinking. I love working with teams to achieve systemic and organized goals. I love understanding how things work and being able to use that knowledge for creativity.
                I decided to become a web-developer because this gives me the opportunity to design, create, work with other wonderful minds and develop the best web projects.
                Coding and web development as a whole has been my doorway into the world of my dreams.
                I am currently open to Internships and Junior developer roles.
            </p>
            <Button className='btn btn-danger button'> Contact Me </Button>

         </div>
         <div className="image">
            <div className="bg-red"></div>
            <img src={Me} alt="" className='img-fluid'/>
         </div>

         </div>

    </div>
    </Container>
    </div>
  )
}

export default About
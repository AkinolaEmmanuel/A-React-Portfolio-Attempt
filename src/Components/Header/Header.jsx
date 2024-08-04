import React from 'react'
import { Container, Button } from 'react-bootstrap';
import './Header.css';
import AE from './../../Images/Akinola Emmanuel.jpg'


function Header() { 
  return (
    <div>
     <Container>
        <div className="hero-section">
          <div className="hero-left">
        <h1> Hey! I am Emmanuel. </h1>
        <h1> I am a Web Developer. </h1>
        <h6> I design,build and interact with the frontend and the backend of websites and web applications.</h6>
        <Button className='btn-danger'> Hire Me </Button>
        <Button className='Button2 btn-danger'> Learn More </Button>
        </div>
        <div className="hero-right">
          <img src={AE} alt="" />
        </div>
        </div>
     </Container>
    </div>

  ) 
  }

export default Header

// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header
import React from 'react';
import './Nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Link} from 'react-router-dom';
import {BsLinkedin, BsWhatsapp, BsInstagram, BsTwitter} from 'react-icons/bs'

function Nav() {
  return (
    <div>

        {/*Beginning of Navbar*/}

    <div className="Nav-container">
        <div className='Nav-left'>
            <h3> AkinolaEmmanuel </h3>
        </div>
        <div className='Nav-center'>
            <ul>
                <li> Home </li>
                <li> About </li>
                <li> Portfolio </li>
                <li> Contact </li>
                {/* <li> <Link to= '/'> Home </Link> </li>
                <li> <Link to='/About'> About </Link> </li> */}
                {/* <li> <Link to='/Portfolio'> Portfolio </Link> </li> */}
                {/* <li> <Link to='/Contact'> Contact </Link> </li> */}
            </ul>
        </div>

        <div className="Nav-right">
            <ul>
                <li>  <BsLinkedin size={23}/> </li>
                <li>  <BsWhatsapp size={23}/> </li>
                <li>  <BsInstagram size={23}/> </li>
                <li>  <BsTwitter size={23}/> </li>
            </ul>
        </div>
        
        {/* <div className="Nav-right">
       <span className='icons'> <BsLinkedin size={30}/> </span>
       <span className='icons'> <BsWhatsapp size={30}/> </span>
       <span className='icons'><BsInstagram size={30}/> </span>
       <span className='icons'> <BsTwitter size={30}/> </span> 
        </div> */}
    </div>     
      





    </div>
  )
}

export default Nav
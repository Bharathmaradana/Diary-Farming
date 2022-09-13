import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WiDayCloudy } from "react-icons/wi";
import './styles.css';
import Button from 'react-bootstrap/esm/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic from './wallpaperflare.com_wallpaper.jpg';
import Body from './Body';
import Footer from './Footer';
import AOS from 'aos';
import {MDBBtn} from 'mdb-react-ui-kit';
import {motion} from "framer-motion";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Heading() {
 
 
  return (  

    <div className='div-1'>
      
    <Navbar className="navbar-1" expand="lg" >
  
      <Navbar.Brand href="#home" className="brand--1">
        
        <WiDayCloudy  />
        Enregistrer
       
        
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end button">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="btn-1"><Button variant='primary'>Home</Button></Nav.Link>
          <Nav.Link href="#link" className="btn-2"><Button variant='primary'>DashBoard</Button></Nav.Link>
          <Nav.Link href="#login" className="btn-3"><Button variant='primary'>Login</Button></Nav.Link>
         <Nav.Link href="#register" className="btn-4"><Button variant='primary'>Register</Button></Nav.Link>
       
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
    <Container>
<motion.div  initial = {{opacity:0}} animate={{ opacity:1}} transition={{delay:0.5,duration:2.5}}>
    <Row>
        <Col  data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
           

           <h1 className="tag">
            Don't Let The Product Drop From Your <span>Hand</span>
           </h1>
        
          <p>Here we are to spread the information and Reduce the waste of MILK PRODUCTS!!!!!!!!</p>
          
          <Button variant="primary">Live Preview</Button>
        
        </Col>
        <Col >
             <img src={pic} className="img-fluid img-1"  />
    </Col>
    </Row>
    </motion.div>
   
  </Container>
   <Body />
   <Footer /> 
  </div>
  )
}
  


export default Heading
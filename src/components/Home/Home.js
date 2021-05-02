import React from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects/Projects';
import './Home.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div >
               <div id="home" className='banner'>
               <Container>
  <Row>
    <Col md={{ span: 6, offset: 3 }}> 
    <Jumbotron style={{ marginTop:'30px', background:'transparent'}}>
    <h1 className='header-font'> <span style={{color:'white'}}>Hello I'm </span> <span style={{color:'salmon'}}>SUMAIYA NAWSHEEN</span></h1>
  <h5 className='header-font' style={{color:'white'}}>
   I'm a full-stack Web Developer.
  </h5>
  <p>
  <a href='#about'><Button className='header-font' variant="outline-info" style={{ marginTop:'20px'}}><span style={{color: 'white'}}>Visit my Profile 
      </span><FontAwesomeIcon icon={faArrowDown} className='icons-style fa-2x' style={{border: '1px solid transparent',background:'transparent'}}/></Button></a> 
  
  </p>
</Jumbotron>
    </Col>
  </Row>
</Container>

</div>
<NavBar/>
<About id='about'/>
<Projects/>
<Blog/>
<Contact/>
<Footer/>
        </div>
    );
};

export default Home;
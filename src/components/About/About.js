import React from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import ProfilePic from '../../images/sumaiya_Nawsheen.png';
import './About.css'
import fast from '../../images/fast.jpg';
import responsive from '../../images/responsive.jpg';
import intuitive from '../../images/intuitive.jpg';
import dynamic from '../../images/dynamic.jpg';

const About = () => {
    return (
        <div id="about"  style={{height:'16%', textAlign:'center',marginBottom:'5px', background:'rgb(230, 247, 255)'}}>
            <div style={{marginBottom:'5px'}}>
            <h1 className="underline-small" style={{marginTop:'15px',marginBottom:'50px'}}>About</h1>
            </div>
            

<CardDeck  xs={1} md={4} lg={4} style={{height:'6%'}}>
  <Card >
    <Card.Img variant="top" src={fast}/>
    <Card.Body>
      <Card.Title>Fast</Card.Title>
      <Card.Text>
      Fast load times and lag free interaction, my highest priority.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={responsive} />
    <Card.Body>
      <Card.Title>Responsive</Card.Title>
      <Card.Text>
       My layouts will work on any device, big or small.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={intuitive} />
    <Card.Body>
      <Card.Title>Intuitive</Card.Title>
      <Card.Text>
       Strong preference for easy to use, intuitive UX/UI.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={dynamic} />
    <Card.Body>
      <Card.Title>Dynamic</Card.Title>
      <Card.Text>
       Websites don't have to be static, I love making pages come to life.
      </Card.Text>
    </Card.Body>
  </Card>
</CardDeck>


            <Container style={{height:'8%'}}>
  <Row xs={1} md={2}>
    <Col><img src={ProfilePic} alt='' style={{width:'75%',height:'325px', marginTop:'50px'}}/>
    <h3>Who am I?</h3>
<p>I'm a Front-End Developer from Bangladesh.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
    </Col>

    <Col>
    <div class="wrap" style={{width:'100%'}}>
        <h2> Expert in </h2>
        <br/>

        <h3>HTML/CSS</h3>
        <div class="line line1"  style={{background:'rgb(88, 54, 73)'}}>95%</div>
        <h3>JavaScript</h3>
        <div class="line line2" style={{background:'rgb(88, 54, 73)'}}>80%</div>
        <h3>Bootstrap</h3>
        <div class="line line3" style={{background:'rgb(88, 54, 73)'}}>60%</div>
        <h3>Wordpress</h3>
        <div class="line line4" style={{background:'rgb(88, 54, 73)'}}>15%</div>
    </div>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default About;
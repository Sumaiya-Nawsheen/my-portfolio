import React from 'react';
import emailjs  from 'emailjs-com';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const Contact = () => {


// auto email send
  function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_2tgud3r', 'template_gyriyqa', e.target, 'user_t9BblcFz77JW8cY0AGTZW')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }

   
// main return of the function
    return (
        <div id="contact"  style={{height:'450px', textAlign:'center', marginBottom:'5px',backgroundColor:'	rgb(218, 204, 255)'}}>
        <div style={{}}>
            <h1 className="underline-small" style={{marginTop:'15px'}}>Contact Me</h1>
            </div>
            <h3>Have a question or want to work together?</h3>
  <Container className="mt-5" style={{}}>
  <Row>
    <Col md={{ span: 6, offset: 3 }}> 
  
  <Form className="contact-form" onSubmit={sendEmail}>
  <Form.Group  controlId="FormInputName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control required type="email" placeholder="Email Address"  name="email"/>
  </Form.Group>
  <Form.Group>
  <Form.Control type="text" placeholder="Message" as='textarea' name="message"/>
</Form.Group>
  <Button variant="danger" type="submit" value="Send" style={{borderRadius:'20px'}}>
    Submit
  </Button>
</Form>

</Col>
  </Row>
</Container>
  
    </div> 
    );
};

export default Contact;
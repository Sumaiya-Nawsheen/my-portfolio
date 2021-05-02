import React from 'react';
import emailjs  from 'emailjs-com';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';


const Contact = () => {


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

   

    return (
        <div id="contact" className ='mt-3 ' style={{height:'500px', textAlign:'center', border:'1px solid grey'}}>
        <h1 className="underline-small">Contact Me</h1>
       

  

  <Container>
  <Row>
    <Col md={{ span: 6, offset: 3 }}> 
  <Jumbotron>
  <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="name" /><br/>
      <label>Email</label>
      <input type="email" name="email" /><br/>
      <label>Message</label>
      <textarea name="message" /><br/>
      <input type="submit" value="Send" />
    </form>
</Jumbotron>
</Col>
  </Row>
</Container>
  
 

    </div> 
    );
};

export default Contact;
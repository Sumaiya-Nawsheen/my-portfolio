import React from 'react';
import { Card, Carousel, Container } from 'react-bootstrap';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            :'rgb(230, 247, 255)'
  }
}; 
Modal.setAppElement('#root')
const ProjectsDetail = ({ modalIsOpen, closeModal, pDetails}) => {
    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2>Hello</h2>
         
          <div>{pDetails.name}</div>
          <Container  style={customStyles}>
          <Card>
          <Carousel fade>

  <Carousel.Item>
    <img
      className="d-block w-75"
      src={pDetails.img1}
      style={{ height:'300px'}}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-75"
      src={pDetails.img2}
      style={{height:'300px'}}
      alt="Second slide"
    />
 <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-75"
      src={pDetails.img3}
      style={{ height:'300px'}}
      alt="Third slide"
    />
     <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>



<Carousel.Item>
    <img style={{ height:'300px'}}
      className="d-block w-75"
      src={pDetails.img4}
      alt="Forth slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-75"
      src={pDetails.img5}
      style={{ height:'300px'}}
      alt="Fifth slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>

  </Carousel>

    <Card.Body >
      <Card.Title>{pDetails.features}</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
          </Container>
  
        </Modal>
            
        </div>
    );
};

export default ProjectsDetail;
import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import ProjectsDetail from '../ProjectsDetail/ProjectsDetail';

const ProjectCard = ({detail}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div>


    <Col xs={6}>
    <Card style={{ width: '18rem' }} className="text-center">
    <Card.Header>{detail.name}</Card.Header>
    <Card.Img variant="top" src={detail.img1} />
    <Card.Body>
  
    <Card.Text>
    {detail.features}
    </Card.Text>
  </Card.Body>
  <Card.Footer><Button onClick={openModal} variant="primary">View Detail</Button></Card.Footer>
  <ProjectsDetail modalIsOpen={modalIsOpen} pDetails={detail} closeModal={closeModal}></ProjectsDetail>
</Card>
    </Col>
  
        </div>
    );
};

export default ProjectCard;
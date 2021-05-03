import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';


const projectsDetail = [
{
name:'Spicy Kitchen',
features: 'Online Restaurant Management System'

},
{
  name: 'Dhaka Ridz',
  features: 'Online Transport Booking System'
},
// {
//   name: 'Destination Anywhere',
//   features: 'Online Travel Agency'
// }
]


const Projects = () => {

    return (
        <div id="projects" className ='mt-3' style={{height:'500px', textAlign:'center', border:'1px solid grey'}}>
        <h1 className="underline-small">Projects</h1>

        <div>
        <Container>
  <Row>
        {
          projectsDetail.map(detail => <ProjectCard detail={detail}></ProjectCard>

          )
          }
          </Row>
</Container>
        </div>
   
 </div>
    );
};



export default Projects;
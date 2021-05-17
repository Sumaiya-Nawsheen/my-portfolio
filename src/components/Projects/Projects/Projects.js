import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
// images
import spicy1 from '../../../images/spicy 1.jpg';
import spicy2 from '../../../images/spicy2.jpg';
import spicy3 from '../../../images/spicy3.jpg';
import spicy4 from '../../../images/spicy4.jpg';
import spicy5 from '../../../images/spicy5.jpg';

const projectsDetail = [
{
name:'Spicy Kitchen',
features: 'Online Restaurant Management System',
img1: `${spicy1}`,
img2: `${spicy2}`,
img3: `${spicy3}`,
img4: `${spicy4}`,
img5: `${spicy5}`,

},
{
  name: 'Dhaka Ridz',
  features: 'Online Transport Booking System',
  img1: `${spicy1}`,
img2: `${spicy2}`,
img3: `${spicy3}`,
img4: `${spicy4}`,
img5: `${spicy5}`,
},
{
  name: 'Destination Anywhere',
  features: 'Online Travel Agency',
  img1: `${spicy1}`,
img2: `${spicy2}`,
img3: `${spicy3}`,
img4: `${spicy4}`,
img5: `${spicy5}`,
},
{
  name: 'Sportsaholic',
  features: 'Popular Sports Teams',
  img1: `${spicy1}`,
img2: `${spicy2}`,
img3: `${spicy3}`,
img4: `${spicy4}`,
img5: `${spicy5}`,
}
]


const Projects = () => {

    return (
        <div id="projects"  style={{height:'5%', textAlign:'center', marginBottom:'5px', background:'rgba(229, 229, 255, 0.5)'}}>
        <h1 className="underline-small" style={{marginTop:'15px',marginBottom:'50px'}}>Projects</h1>

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
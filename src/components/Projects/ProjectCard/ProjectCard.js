import React, { useState } from 'react';
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
       <div className="col-md-7 mb-5">
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{detail.name}</h5>
                    <h6>{detail.features}</h6>
                    <p> SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand text-uppercase">Book Appointment</button>
                    <ProjectsDetail modalIsOpen={modalIsOpen} pDetails={detail} closeModal={closeModal}></ProjectsDetail>
                    </div>
            </div>
        </div>
        </div>
    );
};

export default ProjectCard;
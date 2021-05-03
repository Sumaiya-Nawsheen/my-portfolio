import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
 

const footerStyle = {
    background:'transparent',
    backgroundImage: `url('https://flevix.com/wp-content/uploads/2020/01/Fade-In-Background.svg')`,
    padding: '0px 7px',
}
const Footer = () => {
    return (
        <div className ='' style={{height:'125px', textAlign:'center', border:'1px solid grey', backgroundColor:'#339999'}}>
        <div className ='mt-3' style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <a href='https://www.facebook.com/nawsheen.progga' target='_blank' rel="noreferrer"><FontAwesomeIcon style={footerStyle} className='icons-style fa-3x' icon={faFacebookF}></FontAwesomeIcon></a>
        <a href='https://www.linkedin.com/in/sumaiya-nawsheen-5572a91b0/' target='_blank' rel="noreferrer"><FontAwesomeIcon style={footerStyle} icon={faLinkedinIn} className='icons-style fa-3x'/></a>
        <a href='https://github.com/Sumaiya-Nawsheen' target='_blank' rel="noreferrer"><FontAwesomeIcon style={footerStyle} icon={faGithub} className='icons-style fa-3x'/></a>
        <a href='https://www.instagram.com/nawsheenprogga/' target='_blank' rel="noreferrer"><FontAwesomeIcon style={footerStyle} icon={faInstagram} className='icons-style fa-3x'/></a>

        </div>
      
        <footer className ='mt-4'>SUMAIYA NAWSHEEN &copy; 2021 </footer>
     
        
    </div> 
    );
};

export default Footer;
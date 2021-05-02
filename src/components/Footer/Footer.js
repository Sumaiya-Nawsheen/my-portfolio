import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className ='mt-3' style={{height:'200px', textAlign:'center', border:'1px solid grey'}}>
        <h1>Footer</h1>
        
        <a href='https://www.facebook.com/nawsheen.progga' target='_blank' rel="noreferrer"><FontAwesomeIcon className='icons-style fa-2x' icon={faFacebookF}></FontAwesomeIcon></a>

<FontAwesomeIcon icon={faGoogle} className='icons-style fa-2x'/>
<a href='https://www.linkedin.com/in/sumaiya-nawsheen-5572a91b0/' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className='icons-style fa-2x'/></a>
        <footer>SUMAIYA NAWSHEEN &copy; 2021 </footer>
    </div> 
    );
};

export default Footer;
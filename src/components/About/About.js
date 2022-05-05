import React from 'react';
import logo from '../../images/Logo.svg';
import './About.css';

const About = () => {
    return (
        <div className='about'>
            <h2>About Us</h2>
            <img src={logo} alt="" />
        </div>
    );
};

export default About;
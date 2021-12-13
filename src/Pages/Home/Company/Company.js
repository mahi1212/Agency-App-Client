import React from 'react';
import air from '../../../Images/airbnb.png';
import slack from '../../../Images/slack.png';
import google from '../../../Images/google.png';
import uber from '../../../Images/uber.png';
import netflix from '../../../Images/netflix.png';
import './Company.css'

const Company = () => {
    return (
        <div className='box-border md:flex justify-center md:mt-8 pt-4 pb-28 px-24 bg-white z-50 '>
            <div className='mini-container'>
                <img src={slack} alt="company" />
            </div>
            <div className='mini-container'>
                <img src={google} alt="company" />
            </div>
            <div className='mini-container'>
                <img src={uber} alt="company" />
            </div>
            <div className='mini-container'>
                <img src={netflix} alt="company" />
            </div>
            <div className='mini-container'>
                <img src={air} alt="company" />
            </div>
        </div>
    );
};

export default Company;
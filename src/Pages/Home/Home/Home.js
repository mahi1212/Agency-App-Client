import React from 'react';
// import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Feedbacks from '../Feedbacks/Feedbacks';
import Services from '../Services/Services';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Company></Company>
            <Services></Services>
            <Works></Works>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;
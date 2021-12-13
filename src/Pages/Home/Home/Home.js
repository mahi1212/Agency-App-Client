import React from 'react';
// import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Company></Company>
            <Services></Services>
            
        </div>
    );
};

export default Home;
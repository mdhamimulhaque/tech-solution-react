import React from 'react';
import Footer from '../../../Footer/Footer';
import Header from '../../../Header/Header';
import AboutCompany from '../AboutCompany/AboutCompany';
import HomeClint from '../HomeClint/HomeClint';
import HomeSecondBanner from '../HomeSecondBanner/HomeSecondBanner';
import HomeTopBanner from '../HomeTopBanner/HomeTopBanner';
import OurServices from '../OurServices/OurServices';
import TecnologyIndex from '../TechnologyIndex/TecnologyIndex';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HomeTopBanner></HomeTopBanner>
            <HomeClint></HomeClint>
            <AboutCompany></AboutCompany>
            <WhyChooseUs></WhyChooseUs>
            <OurServices></OurServices>
            <HomeSecondBanner></HomeSecondBanner>
            <TecnologyIndex></TecnologyIndex>
            <Footer></Footer>
        </div>
    );
};

export default Home;
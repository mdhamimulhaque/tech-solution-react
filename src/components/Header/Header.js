import React from 'react';
import "./Header.css";
import MainHeader from './MainHeader/MainHeader';
import TopHeader from './TopHeader/TopHeader';

const Header = () => {
    return (
        <>
           <TopHeader></TopHeader>
           <MainHeader></MainHeader>
        </>
    );
};

export default Header;
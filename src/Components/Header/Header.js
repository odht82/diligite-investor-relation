import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HeroSection from '../HeroSection/HeroSection';
import Background from './Background';

const Header = () => {
    return (
        <div className="header">
            <Navigation></Navigation>
            <HeroSection></HeroSection>
            <Background></Background>
        </div>
    );
};

export default Header;
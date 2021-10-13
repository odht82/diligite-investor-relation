import React from 'react';
import './HeroSection.css'
import HeroDivOne from './HeroDivOne/HeroDivOne';
import HeroDivTwo from './HeroDivTwo/HeroDivTwo';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <HeroDivOne></HeroDivOne>
                <HeroDivTwo></HeroDivTwo>
            </div>
        </div>
    );
};

export default HeroSection;
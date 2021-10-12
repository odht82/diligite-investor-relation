import React from 'react';
import './HeroDivTwo.css';
import QuarterOne from './QuarterOne/QuarterOne';
import QuarterTwo from './QuarterTwo/QuarterTwo';

const HeroDivTwo = () => {
    return (
        <div>
            <div className='hero-div-two'>
                <h4 className='result-center'>Result center</h4>
                <div className='quarter'>
                    <QuarterOne></QuarterOne>
                    <QuarterTwo></QuarterTwo>
                </div>
            </div>
        </div>
    );
};

export default HeroDivTwo;
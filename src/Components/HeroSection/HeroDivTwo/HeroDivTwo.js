import React from 'react';
import './HeroDivTwo.css';
import QuarterOne from './QuarterOne/QuarterOne';
import QuarterTwo from './QuarterTwo/QuarterTwo';

const HeroDivTwo = () => {
    return (
        <div className='hero-div-two'>
            <h4 className='result-center'>Result center</h4>
            <div className='quarter'>
                <QuarterOne></QuarterOne>
                <QuarterTwo></QuarterTwo>
            </div>
            <button className="result-center-btn">
                Annual Reports
            </button>
        </div>
    );
};

export default HeroDivTwo;
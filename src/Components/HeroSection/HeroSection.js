import React from 'react';
import './HeroSection.css'

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <div className='hero-div'>
                    <h4 className='heading-top'></h4>
                    <h1 className='heading'></h1>
                    <p className='heading-desc'></p>
                    <button className='hero-btn'></button>
                </div>
                <div className='hero-div'>
                    <h4 className='result-center'></h4>
                    <div className='quarter'>
                        <h5 className='quarter-one'>Q1-2021</h5>
                    </div>
                    <div className='quarter'>
                        <h5 className="quarter-two">Q2-2021</h5>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                        <div className="calender">
                            <p className="cal-mnth"></p>
                            <div className="cal-date"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
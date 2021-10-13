import React from 'react';
import './AtAGlance.css'
import glanceDecorOne from '../../Assets/analysis-ring.png';
import glanceDecorTwo from '../../Assets/analysis-pillar.png';
import gradientChart from '../../Assets/gradient-chart.png';
import ZigZagChart from '../../Assets/zig-zag-chart.png';
import marketPillar from '../../Assets/market-pillar.png';


const AtAGlance = () => {
    return (
        <>
            <div className="decoration-glance">
                <img src={glanceDecorOne} alt="" className="glance-decor-one" />
                <img src={glanceDecorTwo} alt="" className="glance-decor-two" />
            </div>
            <div className="glance">
                <div className="glance-container">
                    <h1 className="glance-heading">
                        At A Glance
                    </h1>
                    <div className="glance-cards">
                        <div className="glance-result-card">
                            <div className="glance-heading-container">
                                <h3 className="glance-card-heading">
                                    Key Investor
                                    Indication
                                </h3>
                            </div>
                            <div className="glance-report-chart">
                                <img src={gradientChart} alt="" className='gradient-chart-image' />
                            </div>
                            <div className="glance-btn-container">
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="glance-result-card">
                            <div className="glance-heading-container">
                                <h3 className="glance-card-heading">
                                    Business Model
                                </h3>
                            </div>
                            <div className="glance-report-chart">
                                <img src={ZigZagChart} alt="" className='gradient-chart-image' />
                            </div>
                            <div className="glance-btn-container">
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="glance-result-card">
                            <div className="glance-heading-container">
                                <h3 className="glance-card-heading">
                                    Market &<br />Competition
                                </h3>
                            </div>
                            <div className="glance-report-chart">
                                <img src={marketPillar} alt="" className='gradient-chart-image' />
                            </div>
                            <div className="glance-btn-container">
                                <button className="learn-more-btn">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default AtAGlance;
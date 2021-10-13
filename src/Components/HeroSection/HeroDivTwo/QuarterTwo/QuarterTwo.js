import React from 'react';
import './QuarterTwo.css';
import CalenderMnth from '../CalenderMnth/CalenderMnth';

const QuarterTwo = () => {
    return (
        <div className='quarter-container'>
            <h5 className="quarter-two">Q2-2021</h5>
            <div className="calender">
                <p className="cal-mnth"></p>
                <div className="cal-date">
                    <CalenderMnth></CalenderMnth>
                    <CalenderMnth></CalenderMnth>
                    <CalenderMnth></CalenderMnth>
                    <CalenderMnth></CalenderMnth>
                    <CalenderMnth></CalenderMnth>
                    <CalenderMnth></CalenderMnth>
                </div>
            </div>
        </div>
    );
};

export default QuarterTwo;
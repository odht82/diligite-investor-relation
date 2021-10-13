import React from 'react';
import CalenderMnth from '../CalenderMnth/CalenderMnth';
import './QuarterOne.css';

const QuarterOne = () => {
    return (
        <div className="quarter-container">
            <h5 className="quarter-One">Q1-2021</h5>
            <div className="calender">
                <CalenderMnth></CalenderMnth>
                <CalenderMnth></CalenderMnth>
                <CalenderMnth></CalenderMnth>
                <CalenderMnth></CalenderMnth>
                <CalenderMnth></CalenderMnth>
                <CalenderMnth></CalenderMnth>
            </div>
        </div>
    );
};

export default QuarterOne;
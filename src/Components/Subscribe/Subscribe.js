import React from 'react';
import './Subscribe.css'
const Subscribe = () => {
    return (
        <div>
            <div className="subscribe">
                <div className="subscribe-container">
                    <h1 className="suscribe-heading">Subscribe Newsletter</h1>
                    <div className="subscribe-input">
                        <input className="email-input" type="text" placeholder="Put your Email" />
                        <button className="subscribe-button">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
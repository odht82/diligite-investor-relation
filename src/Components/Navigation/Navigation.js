import React from 'react';
import './Navigation.css';
import logo from "../../logo192.png";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className="navigation-container">
                <div className="logo">
                    <img src={logo} alt="" className="logo-diligite" />
                    <p className='logo-text'>INVESTOR<br />RELATION</p>
                </div>
                <div className="navbar">
                    <ul className="nav">
                        <li className="active">FINANCIAL RESULT</li>
                        <li className="nav-btn">CONTACT</li>
                        <li className="nav-btn">GUIDANCE</li>
                    </ul>
                </div>
                <div className="profile-info">
                    <p className='sign-up'>SIGN UP</p>
                    <p className='sign-in'>SIGN IN</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
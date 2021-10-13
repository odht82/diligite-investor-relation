import React from 'react';
import './FooterBody.css';
import logo from '../../../logo192.png';
import facebookIcon from '../../../Assets/facebook.png';
import googleIcon from '../../../Assets/google.png';
import twitterIcon from '../../../Assets/Twitter.png';
import location from '../../../Assets/location.png';
import phone from '../../../Assets/Phone.png';
import email from '../../../Assets/email.png';

const FooterBody = () => {
    return (
        <div className="footer-body">
            <div className="footer-container">
                <div className="conpany-info">
                    <div className="footer-logo">
                        <img src={logo} alt="" className="footer-logo-diligite" />
                        <p className='footer-logo-text'>INVESTOR RELATION</p>
                    </div>
                    <div className="info">
                        <div className="info-secs">
                            <img src={location} alt="" className="info-icon" />
                            <p className="info-text">226/3,10/A,<br />West Dhanmondi,<br /> Dhaka, Bangladesh</p>
                        </div>
                        <div className="info-secs">
                            <img src={phone} alt="" className="info-icon" />
                            <p className="info-text">+880 9638162885</p>
                        </div>
                        <div className="info-secs">
                            <img src={email} alt="" className="info-icon" />
                            <p className="info-text">mail.diligite@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="links">
                        <div className="footer-div">
                            <ul className="link-list">
                                <li className="heading-link">FINANCIAL REPORTS</li>
                                <li className="norm-link">RESULTS</li>
                                <li className="norm-link">ANALYSIS</li>
                                <li className="norm-link">PREDICTIONS</li>
                                <li className="norm-link">CONTACT</li>
                                <li className="norm-link">GUIDANCE</li>
                            </ul>
                        </div>
                        <div className="footer-div">
                            <ul className="link-list">
                                <li className="heading-link">BUSINESS LINKS</li>
                                <li className="norm-link">DILIGITE HOME</li>
                                <li className="norm-link">PRIVACY POLICY</li>
                                <li className="norm-link">CONTACT</li>
                            </ul>
                        </div>
                        <div className="footer-div">
                            <ul className="link-list">
                                <li className="heading-link">HELP & SUPPORTS</li>
                                <li className="norm-link">HELP CENTER</li>
                                <li className="norm-link">SUPPORT SESSION</li>
                                <li className="norm-link">CONTACT SUPPORT</li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-link">
                        <img src={googleIcon} alt="" className="social-media" />
                        <img src={twitterIcon} alt="" className="social-media" />
                        <img src={facebookIcon} alt="" className="social-media" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBody;
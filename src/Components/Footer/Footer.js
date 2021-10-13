import React from 'react';
import Copyright from '../Copyright/Copyright';
import Subscribe from '../Subscribe/Subscribe';
import './Footer.css'
import FooterBody from './FooterBody/FooterBody';

const Footer = () => {
    return (
        <div>
            <Subscribe></Subscribe>
            <div className="footerbody">
                <FooterBody></FooterBody>
            </div>
            <Copyright></Copyright>
        </div>
    );
};

export default Footer;
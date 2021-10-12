import React from 'react';
import './Background.css';
import decorOne from '../../Assets/left-top-corner.png';
import decorTwo from '../../Assets/left-bottom-corner.png';
import decorThree from '../../Assets/right-top-corner.png';


const Background = () => {
    return (
        <div>
            <img src={decorOne} className='decorOne' alt="" />
            <img src={decorTwo} className='decorTwo' alt="" />
            <img src={decorThree} className='decorThree' alt="" />
        </div>
    )
};

export default Background;
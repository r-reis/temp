import React from 'react';
import Menu from './Menu';
import Classes from './Classes';
import '../styles/css/home.css';

export default function Home(){
    return(
        [<div className="r_main">
            <Menu/>
            <div className="r_main__banner">
                <div className="r_text">
                    <strong>Learn to be a <u>samurai.</u></strong>
                    <span>Become a master of Japanese cuisine in one month.</span>
                </div>
                <div className="r_cta">
                    <a className="r_button" href="#classes">Explore content</a>
                    <a className="r_scroll_button" href="#classes">down</a>
                </div>
            </div>
        </div>,
        <Classes/>]
    );
}
import React from 'react';
import ClasseModule from './ClasseModule';
import '../styles/css/classes.css';

export default function Classes(){
    return(
        <div className="r_classes" id="classes">
           <section className="r_classes__menu">
                <span href="/" className="r_classes__logo">Classes</span>
                <div className="r_menu__sub">
                    <a href="Explore">Classes</a>
                    <a href="Explore">Schedule</a>
                </div>
            </section>
            <div className="r_classes__banner">
                <ClasseModule/>
            </div>
        </div>
    );
}
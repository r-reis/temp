import React from 'react';
import '../styles/css/menu.css';

export default function Menu(){
    return(
        <section className="r_menu">
            <a href="/" className="r_logo">SAMURAI TRAINING</a>
            <div className="r_menu__sub">
                <a href="Explore">Explore</a>
                <a href="Explore">Modules</a>
                <a href="Explore">Questions</a>
            </div>
        </section>
    );
}
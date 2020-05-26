import React from 'react';
import imagesArr from './images';

export default function ClasseModule(){
    return(        
        <div className="r_classes__wrapper">
            <article className="r_classe">
                <figure className="r_st_item">
                    <div className="r_profile">
                        <img src={imagesArr[0]}/>
                        <span>Foundation</span>
                        <span>Basic</span>
                    </div>
                    <img src={imagesArr[1]}/>
                </figure>
                <strong>Samurai Basics</strong>
                <figcaption>
                    Introduction of Japanese Cuisine course, How to make DASHI(fish stock), 
                    Vegetable cutting, Salmon filet, Salmon avocado rice bowl...
                    <span className="r_cta">See more</span>
                </figcaption>
            </article>      
            <article className="r_classe">
                <figure className="r_st_item">
                    <div className="r_profile">
                        <img  src={imagesArr[2]}/>
                        <span>Essential</span>
                        <span>Medium</span>
                    </div>
                    <img  src={imagesArr[3]}/>
                </figure>
                <strong>Samurai Classes</strong>
                <figcaption>
                    Introduction of Japanese Cuisine course, How to make DASHI(fish stock) 
                    to famous Tempura, Sashimi, Yakitori, Tonkatsu, Izakaya...
                    <span className="r_cta">See more</span>
                </figcaption>
            </article>        
            <article className="r_classe">
                <figure className="r_st_item">
                    <div className="r_profile">
                        <img  src={imagesArr[4]}/>
                        <span>Samurai</span>
                        <span>Advanced</span>
                    </div>
                    <img  src={imagesArr[5]}/>
                </figure>
                <strong>Master Classes</strong>
                <figcaption>
                    You will get the direct access to the experienced Japanese Master 
                    chefs...
                    <span className="r_cta">See more</span>
                </figcaption>
            </article>        
            <article className="r_classe">
                <figure className="r_st_item">
                    <div className="r_profile">
                        <img  src={imagesArr[6]}/>
                        <span>Master</span>
                        <span>Pro</span>
                    </div>
                    <img  src={imagesArr[7]}/>
                </figure>
                <strong>Workshops</strong>
                <figcaption>
                    Tempura course, Midsize fish test Sashimi practicec, Sashimi test, 
                    Vegetable cutting test, Salmon meal menu setup, Salmon meal menu prep...
                    <span className="r_cta">See more</span>
                </figcaption>
            </article>        
            <article className="r_classe">
                <figure className="r_st_item">
                    <div className="r_profile">
                        <img  src={imagesArr[8]}/>
                        <span>Honor</span>
                        <span>Final</span>
                    </div>
                    <img  src={imagesArr[9]}/>
                </figure>
                <strong>Certification</strong>
                <figcaption>
                    If you wish to apply for certification, please go to 
                    the homepage below and apply online...
                    <span className="r_cta">See more</span>
                </figcaption>
            </article>         
        </div>
    );
}
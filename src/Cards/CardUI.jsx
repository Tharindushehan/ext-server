import React from 'react';

import './card-style.css';


const Card = props => {
    return (

        <div className="card1 text-center">
            <br/><br/>
            <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className="card1-img-top"/>
            </div>
            <div className="card1-body text-dark">
                <h4 className="card1-title">{props.title}</h4>
                <p className="card1-text text-secondary">
                    {props.text}
                </p>
                <a href="#" className="btn btn-outline-success">{props.btn}</a>
            </div>
            
        </div>

    );
}

export default Card;
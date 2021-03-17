import React from "react";

function Card(props){
    return ( 
        <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
                <div className="card-header">
                    <h3>{props.name}</h3>
                </div>
                <div className="card-body">
                    <h2 className="price-text">{props.price}</h2>
                    <p>{props.pirority}</p>
                    <p>{props.matches}</p>
                    <p>{props.messages}</p>
                    <p>{props.usage}</p>
                    <button type="button" className={props.btn}>Sign Up</button>
                </div>
            </div>
        </div>            
    );
}

export default Card;
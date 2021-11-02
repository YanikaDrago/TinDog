import React from "react";

function Icon(props){
    return(
        <div className="feature-box col-lg-4">
            <i className={props.icon}></i>
            <h3 className="feature-title">{props.title}</h3>
            <p>{props.text}</p>
        </div> 
    )
}

export default Icon;
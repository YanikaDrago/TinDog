import React from "react";
import Navbar from "./Navbar"

function Title(){
    return (   
    <section className="colored-section" id="title">
            <div className="container-fluid">
                <Navbar />
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="big-heading">Meet new and interesting dogs nearby.</h1>
                        <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
                        <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
                    </div>
                    <div className="img-title col-lg-6">
                        <img className="title-image" src="images/iphone6.png" alt="iphone-mockup"></img>
                    </div>
                </div>    
            </div>
        </section>       
    )
}

export default Title;
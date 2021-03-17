import React from "react";

function Cta(){
    return(
    <section className="colored-section" id="cta">
        <div className="container-fluid">
            <h3 className="big-heading">Find the True Love of Your Dog's Life Today.</h3>
            <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple"></i> Download</button>
            <button type="button" className="btn btn-light btn-lg download-button"><i className="fab fa-google-play"></i> Download</button>
        </div>
    </section>
    )
}

export default Cta;
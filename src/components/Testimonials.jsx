import React from "react";

function Testimonials(){
    return(
    <section className="colored-section" id="testimonials">
        <div id="testimonial-carousel" className="carousel slide" data-ride="false">
            <div className="carousel-inner">
                <div className="carousel-item active container-fluid">
                    <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                    <img className="testimonial-image" src="images/dog-img.jpg" alt="dog-profile"></img>
                    <em>Pebbles, New York</em>
                </div>
                <div className="carousel-item container-fluid">
                    <h2 className="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                    <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile"></img>
                    <em>Beverly, Illinois</em>
                </div>
            </div>
            <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </section>
    )    
}

export default Testimonials;
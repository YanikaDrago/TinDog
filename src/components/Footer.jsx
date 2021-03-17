import React from "react";

function Footer(){
    return (
        <footer className="white-section" id="footer">
            <div className="container-fluid">
                <i className="footer-icon fab fa-twitter"></i>
                <i className="footer-icon fab fa-facebook-f"></i>
                <i className="footer-icon fab fa-instagram"></i>
                <i className="footer-icon fas fa-envelope"></i>
                <p id="copyright">{"© Copyright " + new Date().getFullYear() + " TinDog"}</p>
            </div>
        </footer>
    )
}

export default Footer;
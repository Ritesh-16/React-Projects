import React from "react";

function Footer(){

    const date = new Date();
    const currentYear = date.getFullYear();
    return(
        <div className="foot">
            <footer className="footer">Created in {currentYear}</footer>
        </div>
    )
}

export default Footer;
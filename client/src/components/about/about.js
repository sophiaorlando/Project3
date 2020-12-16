import React from 'react';
import "./about.css";

function AboutContainer() {

    return(
        <div id="about-cont">
            <div id="home-banner">
                <h1 className="about-title"> About Sneaker Freakers</h1>
                    <p className="about-paragraph">
                    Sneaker Freakers is a React Library based interactive <br />
                    application, that allows users to search <br />
                    for sneakers by brand, through <br /> a third party API.{" "}
                    </p>
            </div>
        </div>
  );
        
}

export default AboutContainer;
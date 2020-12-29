import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
// import Image from "../../assets/images/shoe-red-black.jpg";

import "./about.css";

function AboutContainer() {

    return(
        <div id="about-cont">
            <MDBContainer>
                <MDBRow>          
                    <MDBCol md="5" id="text-col">
                        <h1 className="about-title"> About Sneaker Freakers</h1>
                        <p className="about-paragraph">
                            This collaborative application is used as a resource for
                            sneaker-heads to find featured sneakers by brands like; Adidas,
                            Reebok, Jordan, Puma, and more. Users may view details about a
                            specified sneaker and share their thoughts through an interactive
                            blog page.{" "}
                        </p>
                        <Link to="/blog" className="btn btn-outline-secondary" role="button">
                            Visit Blog
                        </Link>
                    </MDBCol>


                    <MDBCol md="5" id="about-img">
                        {/* <img src={Image} alt="cover" className="w-cover" id="about-sneaker-img" /> */}
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
  );
        
}

export default AboutContainer;
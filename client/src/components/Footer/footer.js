import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

import "./footer.css";


function FooterDisplay() {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">       
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://secret-beyond-86832.herokuapp.com/home">SneakerFreakers</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default FooterDisplay;
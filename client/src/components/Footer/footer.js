import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./footer.css";


function navbar() {
    return (
        <MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">       
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.goat.com"> SneakerFreakers </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default navbar;
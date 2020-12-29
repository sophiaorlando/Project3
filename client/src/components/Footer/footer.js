// import React from "react";
// import { MDBContainer, MDBFooter } from "mdbreact";

// import "./footer.css";


// function FooterDisplay() {
//     return (
//         <MDBFooter color="blue" className="font-small pt-4 mt-4" id="footer">       
//         <div className="footer-copyright text-center py-3">
//           <MDBContainer fluid>
//             &copy; {new Date().getFullYear()} Copyright: <a href="https://secret-beyond-86832.herokuapp.com/home">SneakerFreakers</a>
//           </MDBContainer>
//         </div>
//       </MDBFooter>
//     )
// }

// export default FooterDisplay;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import "./footer.css";


function FooterDisplay() {
  return (
    <MDBFooter id="footer" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-center">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Specs</h5>
            <p>
              Sneaker Freakers is a React Library based interactive application,
              that allows users to search for sneakers by brand, through a third
              party API.
            </p>
            <p>
              Technology Used: Axios, Express, JsonWebToken, Mongoose,
              MaterialUI, Bootstrap, Jquery, React-Bootstrap, Slate
            </p>
            <br />
            <a
              href="https://github.com/sophiaorlando/Project3"
              className="btn btn-outline-secondary"
              role="button"
            >
              Learn More
            </a>
          </MDBCol>
          <MDBCol md="6">
            <h5 id="title">Meet The Devolopers</h5>
            <MDBCol
              md="12"
              id="developers"
              // className="justify-content-center d-flex"
            >
              <MDBRow>
                <MDBCol md="6">
                  <a href="https://github.com/codywalter">
                    <img
                      src="https://avatars2.githubusercontent.com/u/64040128?s=460&u=332d811fc39028c76a977822a9cb9bc8d96387e1&v=4"
                      className="git-icon img-fluid"
                    />
                  </a>
                  <br />
                  <a href="https://github.com/codywalter"> Cody Walter</a>
                </MDBCol>
                <MDBCol md="6">
                  <img
                    src="https://avatars2.githubusercontent.com/u/58449282?s=460&u=c64fb6f574c0b7fcd1f7b6030fac5c7f46bc817c&v=4"
                    className="git-icon"
                  />{" "}
                  <br />
                  <a href="https://github.com/mchisem">Maya Chisem</a>
                  {/* </div> */}
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <img
                    src="https://avatars2.githubusercontent.com/u/66695379?s=460&u=128673e5a562c0628083bccdf879555f25493fd2&v=4"
                    className="git-icon"
                  />
                  <br />
                  <a href="https://github.com/sophiaorlando">Sophia Orlando</a>
                  {/* </li> */}
                </MDBCol>
                <MDBCol md="6">
                  <img
                    src="https://avatars2.githubusercontent.com/u/57122209?s=460&u=549157b022673d202b081dce4744dbdf9d8e6e75&v=4"
                    className="git-icon"
                  />
                  <br />
                  <a href="https://github.com/tajohnsonn">Taylor Johnson</a>
                  {/* </li> */}
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: {" "}
          <a href="http://sneaker-freaker.herokuapp.com/"> SneakerFreakers </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
export default FooterDisplay;
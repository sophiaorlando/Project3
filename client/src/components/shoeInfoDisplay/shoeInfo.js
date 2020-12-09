import React from "react";
import { Link } from "react-router-dom";
import {  MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotesIcon from '@material-ui/icons/Notes';

import "./shoeInfo.css";

function SneakerInfo(props) {

  // const state = {
  //   image: "",
  //   shoe: "", 
  //   price: 0,
  //   color: "",
  //   gender: "",
  //   releaseDate: ""
  // };
  
    // colorway: "White/Deep Royal Blue-White"
    // gender: "preschool"
    // id: "790bbb3e-877a-452e-9f58-45b2624cb3ca"
    // media: {imageUrl: "https://stockx.imgix.net/Nike-Air-Force-1-Low-Whit…press&trim=color&q=90&dpr=2&updated_at=1603481985", smallImageUrl: "https://stockx.imgix.net/Nike-Air-Force-1-Low-Whit…press&trim=color&q=90&dpr=2&updated_at=1603481985", thumbUrl: "https://stockx.imgix.net/Nike-Air-Force-1-Low-Whit…press&trim=color&q=90&dpr=2&updated_at=1603481985"}
    // name: "White Deep Royal Blue (PS)"
    // releaseDate: "2020-12-15"
    // retailPrice: 58
    // shoe: "Nike Air Force 1 Low"
    // styleId: "CU0816-102"
    // title: "Nike Air Force 1 Low White Deep Royal Blue (PS)"
    // year: 2020

    console.log(props);
    // console.log(props.match.params);

    return (

    <div>

      <MDBCard
        className="my-5 px-5 mx-auto"
        id="shoe-info-container"
        style={{ fontWeight: 300, maxWidth: "90%" }}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src="https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-mens-shoe-flCCX4.jpg"
                    alt=""
                  />
                    <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">
                        {props.match.params.id}
                    </h6>
                  <p className="font-weight-bold dark-grey-text">
                    $170
                  </p>
                </div>
              </div>
            </MDBCol>

            <MDBCol md="12" lg="6">
              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
               <MDBRow>
                  <MDBCol md="9">
                    <h2 className="font-weight-bold dark-grey-text">
                        Nike Air Force 1 Low (PS)
                    </h2>
                    <div className="d-flex justify-content-between"></div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "1.5rem"
              }}>
                <MDBRow>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Color:
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                            White/Deep Royal Blue-White
                      </MDBCol>
                        <MDBIcon  icon="angle-double-right" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                <MDBRow>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Gender:
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                          Preschool
                      </MDBCol>
                        <MDBIcon icon="angle-double-right" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div className="mb-4">
                <MDBRow>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Release date:
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                          2020-12-15
                      </MDBCol>
                        <MDBIcon icon="angle-double-right" />
                    </div>
                  </MDBCol>
                </MDBRow>
              </div>

              <Link
              to="/wishlist"
              >
                <FavoriteIcon className="icon"></FavoriteIcon>
              </Link>

              <Link
              key={props.history}
              to="/note"
              >
                <NotesIcon className="icon"></NotesIcon>
              </Link>
              
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      </div>
      
    )
}

export default SneakerInfo;
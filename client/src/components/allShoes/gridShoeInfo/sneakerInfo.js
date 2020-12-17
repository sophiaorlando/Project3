import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  MDBRow, MDBCol, MDBIcon, MDBCard, MDBCardBody, MDBMask, MDBView } from "mdbreact";
import NotesIcon from '@material-ui/icons/Notes';

import "../../shoeInfoDisplay/shoeInfo.css";

function IndividualSneakerInfo(props) {
  
  console.log(props.match.params.id)

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [color, setColor] = useState("");


  // make a function that calls the data from api to insert in sneaker database info
  useEffect (() => {
    fetch(
      `https://api.thesneakerdatabase.com/v1/sneakers/${props.match.params.id}`
    )
      .then((res) => res.json())
      .then((result) => {
      console.log(result.results);
      setName(result.results[0].name)
      setGender(result.results[0].gender)
      setTitle(result.results[0].title);
      setReleaseDate(result.results[0].releaseDate);
      setPrice(result.results[0].retailPrice);
      setImage(result.results[0].media.imageUrl);
      setColor(result.results[0].colorway);

    })

  },[]) 
 
    return (

    <div>

      <MDBCard
        className="my-5 px-5 mx-auto"
        id="shoe-info-container"
        style={{ fontWeight: 300, maxWidth: "90%"}}
      >
        <MDBCardBody style={{ paddingTop: 0 }}>
          <MDBRow>
            <MDBCol md="12" lg="6">
              <div className="mb-4">
                <MDBView hover rounded className="z-depth-1-half mb-4">
                  <img
                    className="img-fluid"
                    src={image}
                    alt=""
                  />
                    <MDBMask overlay="white-slight" className="waves-light" />
                </MDBView>
                <div className="d-flex justify-content-between">
                    <h6 className="font-weight-bold">
                        {name}
                    </h6>
                  <p className="font-weight-bold dark-grey-text">
                    ${price}
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
                        {title}
                    </h2>
                    <div className="d-flex justify-content-between"></div>
                  </MDBCol>
                </MDBRow>
              </div>

              <div style={{
                borderBottom: "1px solid #e0e0e0",
              }}>
                <MDBRow>
                  <MDBCol md="9">
                    <p className="font-weight-bold dark-grey-text">
                      Color:
                    </p>
                    <div className="d-flex justify-content-between">
                      <MDBCol size="11" className="text-truncate pl-0 mb-3">
                            {color}
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
                          {gender}
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
                          {releaseDate}
                      </MDBCol>
                        <MDBIcon icon="angle-double-right" />
                    </div>
                  </MDBCol>
                </MDBRow>
                <Link
                    key={props.history}
                    to="/note"
                    >
                      <NotesIcon id="icon"></NotesIcon>
                    </Link>
              </div>
              
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>

      </div>
      
    )
}

export default IndividualSneakerInfo;
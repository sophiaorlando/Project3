import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBCardText } from "mdbreact";
import NotesIcon from '@material-ui/icons/Notes';
import Footer from "../Footer/footer";


import "../searchBar/searchBar";
import "./allShoes.css";
import { Link } from "react-router-dom";

function gridTable(props) {

  console.log(props)

  const [brand, setBrand] = useState("");

    useEffect (() => {
      fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=21&brand=${props.match.params.id}`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result.results);
          setBrand(result.results);  
        })
      }, []) 



return (
    
    <div id="all-shoes-cont">
    
    <MDBContainer style={{textAlign:"center", marginTop:"10%"}}>

      <h2 id="all-shoes-brand">Viewing 20+ {props.match.params.id} Shoes</h2>

        
        <MDBRow id="all-shoes-row">
        {brand && brand.map(item => (

            <MDBCol size="4">
              <Link to={"/shoeInfo" + item.id}>
                <MDBCard narrow ecommerce className='mb-2' id="all-shoes-card">
                  <MDBCardFooter id="all-shoes-footer" className='px-1'>
                      <span className='float-left' style={{textDecoration: "none", color:"black"}}>
                        ${item.retailPrice}
                      </span>
                      <span className='float-right' style={{textDecoration: "none", color:"black"}}>
                        <NotesIcon></NotesIcon>
                        {/* {item.releaseDate} */}
                      </span>
                    </MDBCardFooter>

                    <MDBCardImage
                    cascade
                    top
                    src={item.media.imageUrl}
                    alt='shoe photo'
                  />
                  <MDBCardBody cascade>
                    {/* <p style={{fontSize: "14px", textDecoration:"none", color:"black"}}>
                        {item.title}
                    </p> */}
                    <MDBCardFooter id="all-shoes-footer" className='px-1'>
                      <span style={{textDecoration: "none", color:"black"}}>
                        {item.title}
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                  </MDBCard>
                </Link>
            </MDBCol>

                    ))}

        </MDBRow>

    </MDBContainer>

    <Footer></Footer>
    </div>
);
}

export default gridTable;
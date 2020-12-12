import React from "react";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBCardText } from "mdbreact";
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotesIcon from '@material-ui/icons/Notes';
import Footer from "../Footer/footer";

import "../allShoes/allShoes.css";

function gridTable(props) {

  const handleWishlistUpdate = () => {
    console.log("------");
    // console.log(AuthInfo.authToken);
    axios
      .post("/api/wishlist/wishlist", {
        headers: {
          "content-type": "application/json",
          // "x-auth-token": `${AuthInfo.authToken}`
        }
      })
      .then(response => {
        console.log(response);
      });
  };

return (
    
    <div>
    
    <MDBContainer style={{textAlign:"center", marginTop:"8%"}}>
        
        <h2>View All Shoes</h2>

        <MDBRow style={{padding: "6%"}}>
            <MDBCol size="3">
            <MDBCard narrow ecommerce className='mb-2'>
            <MDBCardTitle>
                      <strong>
                      {/* {name} */}
                      </strong>
                    </MDBCardTitle>
                    <MDBCardImage
                    cascade
                    top
                    src='https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-mens-shoe-flCCX4.jpg'
                    alt='shoe photo'
                  />
                  <MDBCardBody cascade>
                    <MDBCardFooter className='px-1'>
                      <span className='float-left'>
                      {/* {title} */}
                      </span>
                      <span className='float-right'>
                      <FavoriteIcon className="icon" onClick={() => handleWishlistUpdate()}></FavoriteIcon>
                        <NotesIcon></NotesIcon>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>

    <Footer></Footer>
    </div>
);
}

export default gridTable;
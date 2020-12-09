import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardFooter, MDBCardText } from "mdbreact";
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotesIcon from '@material-ui/icons/Notes';
import Footer from "../Footer/footer";
import "../searchBar/searchBar";

import "../allShoes/allShoes.css";

function gridTable(props) {
    console.log(props)

return (
    
    <div>
        {/* <h1>View All</h1> */}

        {/* {sneakers[0] !== undefined && sneakers[0].name !== undefined ? (
        sneakers.map(({ name, title }) => {
          return ( */}
    <MDBContainer>
        <MDBRow style={{padding: "6%"}}>
            <MDBCol size="3">
            <MDBCard narrow ecommerce className='mb-2'>
            <MDBCardTitle>
                      <strong>
                      {/* Nike Air Force 1 Low (PS) */}
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
                      {/* $69 */}
                      {/* {title} */}
                      </span>
                      <span className='float-right'>
                       <FavoriteIcon></FavoriteIcon>
                        <NotesIcon></NotesIcon>
                      </span>
                    </MDBCardFooter>
                  </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
    {/* );
  })
) : (
  <></>
)} */}


    <Footer></Footer>
    </div>
);
}

export default gridTable;
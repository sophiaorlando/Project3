import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBCardImage } from "mdbreact";

import "../wishlistTable/wishlistTable.css";

function WishlistTable() {
    return(
      <div>
        <MDBTable style={{marginTop:"10%"}}>
        <MDBTableHead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Date Added</th>
          </tr>
        </MDBTableHead>
         
        <MDBTableBody>
          <tr>
            <td>
              <MDBCardImage
               src='https://static.nike.com/a/images/f_auto/q_auto:eco/t_PDP_864_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-mens-shoe-flCCX4.jpg'
               alt='shoe photo'
               style={{height:"15vh"}}
              >
              </MDBCardImage>
            </td>
            <td>Shoe Name</td>
            <td>$$$$</td>
            <td>Date Added</td>
          </tr>
        </MDBTableBody>

      </MDBTable>
      </div>
    )
}

export default WishlistTable;
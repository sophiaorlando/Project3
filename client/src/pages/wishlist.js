import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";

const Wishlist = () => {
  return (
    <MDBTable>
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
          <td>Image</td>
          <td>Shoe Name</td>
          <td>$$$$</td>
          <td>Date Added</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>Shoe Name</td>
          <td>$$$$</td>
          <td>Date Added</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>Shoe Name</td>
          <td>$$$$</td>
          <td>Date Added</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default Wishlist;

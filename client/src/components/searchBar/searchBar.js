import React, { useState } from "react";
import "./searchBar.css"


// import App from "../App.js"

function SearchBar(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setBrand] = useState("");
  const [sneakers, setSneakers] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=${brand}`
      )
        //&releaseDate=lte:2019-10-11&name=travis%20scott
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          setBrand("");
          setSneakers(result);
          console.log(result);
        });
    }
  };
  return(
    <div>
    <div className="search-box col">
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => setBrand(e.target.value)}
      value={brand}
      onKeyPress={search}
    />
  </div>

  {/* <Form>
  <Form.Group>
    <Form.Label>Search Sneakers</Form.Label>
    <Form.Control className="search-bar" type="text" placeholder="Search Sneaker Brands"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          onSubmit={search}
    />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  </Form> */}
{/* 
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}

        {typeof sneakers.results != "undefined" ? (
          <div>
            <h3>{sneakers.results[0].brand}</h3>
          </div>
        ) : (
          ""
        )}
    </div>


  )
}
export default SearchBar;

// import React from "react";
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <MDBFormInline className="md-form">
//         <MDBIcon icon="search" />
//         <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
//       </MDBFormInline>
//     </MDBCol>
//   );
// }

// export default SearchPage;
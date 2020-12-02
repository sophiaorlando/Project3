import React from "react";
import { Jumbotron } from 'react-bootstrap';
import "./jumbotron.css";

import SearchBar from "../searchBar/searchBar";

function CompJumbo(){

  return (
    <div>
      <Jumbotron>
        <SearchBar />
      </Jumbotron>
    </div>
  )
}

export default CompJumbo;
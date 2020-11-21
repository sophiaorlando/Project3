import React, { useState } from "react";
import { Jumbotron } from 'react-bootstrap';
import "./jumbotron.css"
import SearchBar from "../searchBar/searchBar"

function CompJumbo(){


  return (
<div>
  <Jumbotron>
<h1 className="glow">Sneaker Freakers</h1>
<SearchBar />
  </Jumbotron>
  
</div>

  )
}

export default CompJumbo;
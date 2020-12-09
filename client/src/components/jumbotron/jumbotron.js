import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./jumbotron.css";
import SearchBar from "../searchBar/searchBar";
import NavBar from "../Navbar/navBar";

function CompJumbo() {
  return (
    <div>
      <NavBar></NavBar>
      <Jumbotron></Jumbotron>
      <SearchBar />
    </div>
  );
}

export default CompJumbo;

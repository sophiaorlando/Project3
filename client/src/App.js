import React, { useState } from "react";
import CompJumbo from "./components/jumbotron/jumbotron"


import "./App.css";

const api = {
  url:
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott",
};

function App() {

  return (
    <main>

      <CompJumbo />
    </main>
  );
}

export default App;

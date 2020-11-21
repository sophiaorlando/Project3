import React, { useState } from "react";
import CompJumbo from "./components/jumbotron/jumbotron"
import SearchBar from "./components/searchBar/searchBar"


import "./App.css";

const api = {
  url:
    "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott",
};

function App() {
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

  return (
    <main>
      {/* <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          onKeyPress={search}
        />
      </div> */}
      {/* <SearchBar /> */}

      {typeof sneakers.results != "undefined" ? (
        <div>
          <div>{sneakers.results[0].brand}</div>
        </div>
      ) : (
        ""
      )}
      <CompJumbo />

      {/* <div>{sneakers.results}</div> */}
      {/* <div>{!sneakers ? sneakers.results[0].brand : "No results to display"}</div> */}
    </main>
  );
}

export default App;

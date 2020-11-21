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
    <div className="search-box">
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      onChange={(e) => setBrand(e.target.value)}
      value={brand}
      onKeyPress={search}
    />
  </div>
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
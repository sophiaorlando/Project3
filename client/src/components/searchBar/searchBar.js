import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import "./searchBar.css"

import SneakerResult from "../SneakerResultImgs/index";
// import AllShoes from "../allShoes/allShoes";


function SearchBar(props) {

  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setBrand] = useState("");
  const [sneakers, setSneakers] = useState({});
  const [redirect, setRedirect] = useState(false)

  const brandsList = [
    { brandName: "Adidas" },
    { brandName: "Asics" },
    { brandName: "Converse" },
    // { brandName: "Jordan" },
    // { brandName: "New Balance" },
    { brandName: "Nike" },
    // { brandName: "Puma" },
    { brandName: "Reebok" },
    { brandName: "Saucony" },
    { brandName: "Under Armour" },
    // { brandName: "Vans" }
  ]
  const defaultBrands = {
    options: brandsList,
    getOptionLabel: (option) => option.brandName,
  };


  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=${brand}`
      )
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded(true);
          setBrand("");
          setSneakers(result);
          // console.log(result.results);
        });
    }
  };
  return (
    <div>
      <div>
      <div className="brand-search"> 
            <div className="search-box col">
              <Autocomplete
                {...defaultBrands}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) =>
                  <TextField {...params}
                    placeholder="Search brand..."
                    margin="normal"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    onKeyPress={search}
                  />}
              />
            </div>
          </div>
      </div>

      {/* <AllShoes key={{sneakers}}/> */}
      {/* <SneakerResult key={sneakers}></SneakerResult> */}
    </div>
  )
}

export default SearchBar;
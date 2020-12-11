import React, { useState, Component } from "react";
import { Router, Route, Redirect, IndexRoute, Link, hashHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AllShoes from "../allShoes/allShoes"

import "./searchBar.css"

function SearchBar() {

  //   class Search extends Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //       results: [],
  //       term: '',
  //     };

  //     this.submit = this.submit.bind(this);
  //     this.changeTerm = this.changeTerm.bind(this);

  //   }
  // }

  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setBrand] = useState("");
  const [sneakers, setSneakers] = useState({});
  const [redirect, setRedirect] = useState(false)

  const brandsList = [
    { brandName: "Adidas" },
    { brandName: "Asics" },
    { brandName: "Converse" },
    { brandName: "Jordan" },
    { brandName: "New Balance" },
    { brandName: "Nike" },
    { brandName: "Puma" },
    { brandName: "Reebok" },
    { brandName: "Saucony" },
    { brandName: "Under Armour" },
    { brandName: "Vans" }
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
          // console.log(result);
          console.log(result.results);
          setRedirect(true)
          // return(
          //   <Redirect to="/allShoes/"/>
          // )
        });
    }
  };

  return (

    <div>
      <div>
        {
          redirect ? <Redirect to="/allShoes" /> : <div className="brand-search">
            <div className="search-box col">
              <Autocomplete
                {...defaultBrands}
                id="auto-complete"
                autoComplete
                includeInputInList
                renderInput={(params) =>
                  <TextField {...params}
                    // label="Search brand..."
                    placeholder="Search brand..."
                    margin="normal"
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    onKeyPress={search}
                  />}
              />
            </div>
          </div>
        }
      </div>
    </div>

  )
}
export default SearchBar;


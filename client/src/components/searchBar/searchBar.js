import React, { useState } from "react";

// import Jumbotron from '../jumbotron/jumbotron';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import CarouselApp from "../brandCarousel/carousel"

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CardActionArea, Card, CardMedia, CardContent } from '@material-ui/core';
import SneakerResults from "../SneakerResultImgs/index"

import "./searchBar.css"

function SearchBar() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setBrand] = useState("");
  // props.sneakers.results[0].media.imageUrl
  const [sneakers, setSneakers] = useState({});

  // const [sneakers, setSneakers] = useState({ results: [{ media: { imgUrl: "https://via.placeholder.com/150" } }] });

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

  // let sneakerData = sneakers.results.map(sneaker => {
  //   const SneakerImg = sneaker.media.imageUrl
  // })

  return (

    <div>
      <div className="brand-search">
        <div className="search-box col" style={{ width: 300 }}>
          <Autocomplete
            {...defaultBrands}
            id="auto-complete"
            autoComplete
            includeInputInList
            renderInput={(params) =>
              <TextField {...params}
                label="Search brand..."
                margin="normal"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                onKeyPress={search}
              />}
          />
        </div>
      </div>
      <SneakerResults
      sneakers={sneakers}
      />
    </div>


  )
}
export default SearchBar;


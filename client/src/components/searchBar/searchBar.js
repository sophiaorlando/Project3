import React, { useState, Component } from "react";

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { CardActionArea, Card, CardMedia, CardContent } from '@material-ui/core';


import "./searchBar.css"

function SearchBar(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setBrand] = useState("");
  const [sneakers, setSneakers] = useState({});

  const brandsList = [
    {brandName: "Adidas"},
    {brandName: "Asics"},
    {brandName: "Converse"},
    {brandName: "Jordan"},
    {brandName: "New Balance"},
    {brandName: "Nike"},
    {brandName: "Puma"},
    {brandName: "Reebok"},
    {brandName: "Saucony"},
    {brandName: "Under Armour"},
    {brandName: "Vans"}
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
          console.log(result.results);
        });
    }
  };

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
    
      {typeof sneakers.results != "undefined" ? (
        
        <div>
          <Container className="product-container">
            <Typography variant="h4" className="brand-title">
              {sneakers.results[0].brand}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <a
                    href="/shoeInfo.js"
                    >
                    <CardMedia
                      className="media"
                      image={sneakers.results[0].media.imageUrl}
                    />
                    </a>
                    <CardContent>
                      <h5>{sneakers.results[0].name}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={sneakers.results[1].media.imageUrl}
                    />
                    <CardContent>
                    <h5>{sneakers.results[1].name}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardActionArea>
                    <CardMedia
                      className="media"
                      image={sneakers.results[2].media.imageUrl}
                    />
                    <CardContent>
                      <h5>{sneakers.results[2].name}</h5>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </div>


        ) : (
          ""
        )}
    </div>


  )
}
export default SearchBar;
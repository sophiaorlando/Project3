import '../searchBar/searchBar'
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import "./style.css";

function Example(props) {

    // console.log(props.sneakers.results)
    var name = ""

    if (props.sneakers.results) {
        name = props.sneakers.results[0].brand
    }
    var rows = [
        //first row
        {
            name: [
                "",
                "",
                ""
            ],
            image: [
                "",
                "",
                ""
            ],
            id: [
                "",
                "",
                ""
            ]
        },
        // second row
        {
            name: [
                "",
                "",
                ""
            ],
            image: [
                "",
                "",
                ""
            ],
            id: [
                "",
                "",
                ""
            ]
        },
        // third row
        {
            name: [
                "",
                "",
                ""
            ],
            image: [
                "",
                "",
                ""
            ],
            id: [
                "",
                "",
                ""
            ]
        }
    ];
    if (props.sneakers.results) {
        const filteredResults = props.sneakers.results.filter(sneaker =>
            sneaker.media.imageUrl !== "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0")
        filteredResults.map((sneaker) => {
        })
        for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
            for (let cardCounter = 0; cardCounter < 3; cardCounter++) {
                rows[rowCounter].name[cardCounter] = filteredResults[cardCounter + rowCounter*3].title
                rows[rowCounter].id[cardCounter] = filteredResults[cardCounter + rowCounter*3].id
                rows[rowCounter].image[cardCounter] = filteredResults[cardCounter + rowCounter*3].media.imageUrl
            }            
        }
    }
  
    return (
        <Carousel
            autoPlay={false}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
        >
            {
                rows.map((row, i) => <CarouselRows key={i} row={row} name={name} />)
            }
        </Carousel>
    )
}

function CarouselRows(props) {
    
    return (
        <div>
            <h1>{props.name}</h1>
            <br></br>
            <div id="carousel">
            
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper>
                        <Link to={"/shoe" + props.row.id[0]}>
                        <img src={props.row.image[0]} style={{ height: "auto" }}></img>
                        <p>{props.row.name[0]}</p>
                        </Link>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                    <Link to={"/shoe" + props.row.id[1]}>
                        <img src={props.row.image[1]} style={{ height: "auto" }}></img>
                        <p>{props.row.name[1]}</p>
                    </Link>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                    <Link to={"/shoe" + props.row.id[2]}>
                        <img src={props.row.image[2]} style={{ height: "auto" }}></img> 
                        <p>{props.row.name[2]}</p> 
                    </Link>                  
                    </Paper>
                </Grid>

                <Link to= {"/allShoes" + props.name}>
                <Button className="CheckButton">
                    View More
                </Button>
                </Link>
            </Grid>

            </div>
        </div>
    )
}
export default Example;
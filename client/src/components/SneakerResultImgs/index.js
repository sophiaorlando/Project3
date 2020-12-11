import '../searchBar/searchBar'
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


function Example(props) {
    console.log(props.sneakers.results)
    var name = "Shoe Brand"
    if (props.sneakers.results) {
        name = props.sneakers.results[0].brand
    }
    var rows = [
        //first row
        {
            description: [
                "adidas Climacool Vento Black Scarlet Gold",
                "Saucony Kinvara 11 Prinkshop (W)",
                "Converse Chuck Taylor All-Star 70s Ox Kith x Bergdorf Goodman"
            ],
            image: [
                "https://stockx.imgix.net/images/adidas-Climacool-Vento-Black-Scarlet-Gold.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607177075",
                "https://stockx.imgix.net/Saucony-Kinvara-11-Prinkshop-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1600242208",
                "https://stockx.imgix.net/images/Converse-Chuck-Taylor-All-Star-70s-Ox-Kith-x-Bergdorf-Goodman.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606849762"
            ]
        },
        // second row
        {
            description: [
                "Under Armour Embiid One Origin (GS)",
                "Converse Chuck Taylor All-Star 70s Hi Brain Dead Egret",
                "Reebok Kamikaze II Low Dime Blue"
            ],
            image: [
                "https://stockx.imgix.net/Under-Armour-Embiid-One-Origin-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1600508235",
                "https://stockx.imgix.net/images/Converse-Chuck-Taylor-All-Star-70s-Hi-Brain-Dead-Egret.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1605740827",
                "https://stockx.imgix.net/images/Reebok-Kamikaze-II-Low-Dime-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607103225"
            ]
        },
        // third row
        {
            description: [
                "adidas Ultra Boost 2.0 DNA Stefon Diggs",
                "Puma RS-Dreamer J Cole Ebony and Ivory",
                "Saucony Jazz Low Pro Stars & Stripes"
            ],
            image: [
                "https://stockx.imgix.net/images/adidas-Ultra-Boost-2-DNA-Stefon-Diggs.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1606895069",
                "https://stockx.imgix.net/images/Puma-RS-Dreamer-J-Cole-Ebony-and-Ivory.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1607107260",
                "https://stockx.imgix.net/Saucony-Jazz-Low-Pro-Stars-Stripes.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590726649"
            ]
        }
    ];
    if (props.sneakers.results) {
        const filteredResults = props.sneakers.results.filter(sneaker =>
            sneaker.media.imageUrl !== "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0")
        console.log(filteredResults)
        filteredResults.map((sneaker) => {
        })
        for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
            for (let cardCounter = 0; cardCounter < 3; cardCounter++) {
                rows[rowCounter].description[cardCounter] = filteredResults[cardCounter + rowCounter*3]?.title ? filteredResults[cardCounter + rowCounter*3]?.title : "No Shoes to display"
                rows[rowCounter].image[cardCounter] = filteredResults[cardCounter + rowCounter*3]?.media.imageUrl ? filteredResults[cardCounter + rowCounter*3]?.media.imageUrl : "https://lh3.googleusercontent.com/wftalourGzppS4SxOY5a0AXifIIjRKfnG039lxUE1LoS_9DxaBjc4zfRnhaITuIZiFU=w895-rwa"
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
    console.log(props)
    return (
        <div>
            <h2>{props.name}</h2>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper>
                        <p>{props.row.description[0]}</p>
                        <img src={props.row.image[0]} style={{ width: "150px", height: "100px" }}></img>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <p>{props.row.description[1]}</p>
                        <img src={props.row.image[1]} style={{ width: "150px", height: "100px" }}></img>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <p>{props.row.description[2]}</p>
                        <img src={props.row.image[2]} style={{ width: "150px", height: "100px" }}></img>
                    </Paper>
                </Grid>
                <Button className="CheckButton">
                    View All Shoes
            </Button>
                {/* </Paper> */}
            </Grid>
        </div>
    )
}
export default Example;
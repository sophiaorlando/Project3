// import React from "react";
// import { Link } from "react-router-dom";
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import { CardActionArea, Card, CardMedia, CardContent } from '@material-ui/core';

// function SneakerResImg(props) {

//   return (
//     <div>

//       {typeof props.sneakers.results != "undefined" ? (

//         <div>
//           <Container className="product-container">
//             <Typography variant="h4" className="brand-title">
//               {props.sneakers.results[0].brand}
//             </Typography>
//             <Grid container spacing={3}>

//               {props.sneakers.results.map(shoeData => (
//                 <Grid key={shoeData.id} id={shoeData.id}  item xs={12} sm={6} md={4}>
//                   <Link to={"/shoe" + shoeData.id}>
//                   <Card className="card"
//                   >
//                     <CardActionArea>
//                       <CardMedia
//                         key={shoeData.media.imageUrl}
//                         className="media"
//                         image={shoeData.media.imageUrl}
//                       />
//                       <CardContent>
//                         <h5>{shoeData.name}</h5>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                   </Link>
//                 </Grid>
//               ))}

//             </Grid>
//           </Container>

//         </div>

//       ) : (
//           ""
//         )}
//     </div>

//   )
// }

// export default SneakerResImg;


import '../searchBar/searchBar';
import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function Example(props) {
    // console.log(props.sneakers.results)
    // var name = "Shoe Brand"
    // if (props.sneakers.results) {
    //     name = props.sneakers.results[0].brand
    // }
    var rows = [
        //first row
        {
            description: [
                "1",
                "2",
                "3"
            ],
            image: [
                "random img",
                "random img",
                "random img"
            ]
        },
        // second row
        {
            description: [
                "4",
                "5",
                "6"
            ],
            image: [
                "random img",
                "random img",
                "random img"
            ]
        },
        // third row
        {
            description: [
                "7",
                "8",
                "9"
            ],
            image: [
                "random img",
                "random img",
                "random img"
            ]
        },
    ];
    if (props.sneakers.results) {
        const filteredResults = props.sneakers.results.filter(sneaker =>
            sneaker.media.imageUrl !== "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0")
        console.log(filteredResults)
        filteredResults.map((sneaker) => {
        })
        for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
            for (let cardCounter = 0; cardCounter < 3; cardCounter++) {
                rows[rowCounter].description[cardCounter] = filteredResults[cardCounter + rowCounter*3].name
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
                {/* <Button className="CheckButton">
                    Check it out!
            </Button> */}
                {/* </Paper> */}
            </Grid>
        </div>
    )
}
export default Example;

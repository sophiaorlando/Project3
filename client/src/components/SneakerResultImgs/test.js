import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';

function Example() {

    const [isLoading, setIsLoading] = useState(false)
    const [nikeMedia, setNikeMedia] = useState([]);
    // const [adidasMedia, setAdidasMedia] = useState([])

    fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=nike`
      )
        .then((res) => res.json())
        .then((result) => {
            setIsLoading(true)
            // console.log(result.results);
            setNikeMedia(result.results);
        });

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

    if(nikeMedia.result) {const filteredResults = nikeMedia.filter(sneaker =>

        nikeMedia.media.imageUrl !== "")
        console.log(filteredResults)
     
        filteredResults.map((sneaker) => {
        })

    let rowCounter = 0; rowCounter < 3; rowCounter++

    for (let rowCounter = 0; rowCounter < 3; rowCounter++) {
        // const element = array[rowCounter];

        for (let cardCounter = 0; cardCounter < 3; cardCounter++) {
            // const element = array[cardCounter];
            // rows[rowCounter].description[cardCounter] = filteredResults[cardCounter + rowCounter*3].name
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

function CarouselRows() {
    // console.log()

    return (
        <div>
            <h2>{nikeMedia[0]?.name || ""}</h2>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <Paper>
                        {/* <p>{nikeMedia.row.description[0]}</p> */}
                        <img src={nikeMedia.row.image[0]} style={{ width: "150px", height: "100px" }}></img>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        {/* <p>{nikeMedia.row.description[1]}</p> */}
                        <img src={nikeMedia.row.image[1]} style={{ width: "150px", height: "100px" }}></img>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        {/* <p>{nikeMedia.row.description[2]}</p> */}
                        <img src={nikeMedia.row.image[2]} style={{ width: "150px", height: "100px" }}></img>
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

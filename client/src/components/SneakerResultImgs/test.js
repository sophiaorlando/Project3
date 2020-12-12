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

            <MDBContainer>
                <h2 className="h1-responsive font-weight-bold text-left my-5">
                   Just in Nike
                </h2>
                
                <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"
                slide
                >
                
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>            
                            <MDBCardGroup>
                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[0]?.title || ""}>
                                    <MDBCardImage 
                                    src= {nikeMedia[0]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[0]?.name || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[1]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[1]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[1]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[2]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[2]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[2]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText> 
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>

                


                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>      


        
        </div>
    )
}
export default Example;

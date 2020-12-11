import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCarousel, MDBCarouselInner, 
    MDBCarouselItem, MDBContainer,MDBView, MDBCardTitle, MDBCardGroup, MDBCardText } from "mdbreact";
import "./justInShoes.css";


function JustIn() {

    // const [isLoading, setIsLoading] = useState(false);
    const [nikeMedia, setNikeMedia] = useState([]);
    const [adidasMedia, setAdidasMedia] = useState([]);

    fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=nike`
      )
        .then((res) => res.json())
        .then((result) => {
            // setIsLoading(true)
            // console.log(result.results);
            setNikeMedia(result.results);
        });

    fetch(
        `https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=adidas`
        )
        .then((res) => res.json())
        .then((result) => {
            // setIsLoading(true)
            setAdidasMedia(result.results);
        });

    
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

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <MDBCardGroup>
                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[3]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[3]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[3]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[4]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[4]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[4]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[5]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[5]?.media.imageUrl || ""}  
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[5]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>                
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <MDBCardGroup>
                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[6]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[6]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                    <MDBCardTitle tag="h5">{nikeMedia[6]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                        </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[7]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[7]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[7]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + nikeMedia[8]?.title || ""}>
                                    <MDBCardImage 
                                    src={nikeMedia[8]?.media.imageUrl || ""}  
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{nikeMedia[8]?.title || ""}</MDBCardTitle>
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


            <MDBContainer>
                <h2 className="h1-responsive font-weight-bold text-left my-5">
                   Just in Adidas
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
                                <Link to={"/shoe" + adidasMedia[0]?.title || ""}>
                                    <MDBCardImage 
                                    src= {adidasMedia[0]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[0]?.name || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[1]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[1]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[1]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[2]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[2]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[2]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText> 
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <MDBCardGroup>
                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[3]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[3]?.media.imageUrl || ""}
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[3]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[4]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[4]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[4]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[5]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[5]?.media.imageUrl || ""}  
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[5]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>                
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>
                            </MDBCardGroup>
                        </MDBView>
                    </MDBCarouselItem>

                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <MDBCardGroup>
                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[6]?.title || ""}>

                                    <MDBCardImage 
                                    src={adidasMedia[6]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                    <MDBCardTitle tag="h5">{adidasMedia[6]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                        </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[7]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[7]?.media.imageUrl || ""} 
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[7]?.title || ""}</MDBCardTitle>
                                        <MDBCardText></MDBCardText>
                                    </MDBCardBody>
                                </Link>
                                </MDBCard>

                                <MDBCard>
                                <Link to={"/shoe" + adidasMedia[8]?.title || ""}>
                                    <MDBCardImage 
                                    src={adidasMedia[8]?.media.imageUrl || ""}  
                                    alt="MDBCard image cap" 
                                    top hover
                                    overlay="white-slight" />
                                    <MDBCardBody>
                                        <MDBCardTitle tag="h5">{adidasMedia[8]?.title || ""}</MDBCardTitle>
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

export default JustIn;
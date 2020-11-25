import React from "react";
import CompJumbo from "../components/jumbotron/jumbotron";
import BrandCarousel from "../components/brandCarousel/carousel";

function home() {
    return (
        <div>
            <CompJumbo></CompJumbo>
            <BrandCarousel></BrandCarousel>
        </div>
    )
}

export default home;
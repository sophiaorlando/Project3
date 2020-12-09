import React from "react";
import CompJumbo from "../components/jumbotron/jumbotron";
import JustInShoes from "../components/justInShoes/justInShoes";
import ScrollUp from "../components/scrollUp/scrollUp";
import Footer from "../components/Footer/footer";

// import SneakerCarousel from "../components/SneakerResultImgs/test";

export default function HomePage() {
    return (
        <div id="top">
            <CompJumbo></CompJumbo>
            <JustInShoes></JustInShoes>
            {/* <SneakerCarousel></SneakerCarousel> */}
            <ScrollUp></ScrollUp>
            <Footer></Footer>
        </div>
    )
}

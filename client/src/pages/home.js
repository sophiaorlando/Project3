import React from "react";
import CompJumbo from "../components/jumbotron/jumbotron";
// import JustInShoes from "../components/justInShoes/justInShoes";
// import ScrollUp from "../components/scrollUp/scrollUp";
import Footer from "../components/Footer/footer";

import SearchBar from "../components/searchBar/searchBar";

export default function HomePage() {
    return (
        <div>
            <CompJumbo></CompJumbo>
            <SearchBar></SearchBar>
            {/* <JustInShoes></JustInShoes> */}
            {/* <ScrollUp></ScrollUp> */}
            {/* <Footer></Footer> */}
        </div>
    )
}

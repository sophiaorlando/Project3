import React from "react";
import CompJumbo from "../components/jumbotron/jumbotron";
import JustInShoes from "../components/justInShoes/justInShoes";
import ScrollUp from "../components/scrollUp/scrollUp";
import Footer from "../components/Footer/footer";

export default function HomePage() {
    return (
        <div>
            <CompJumbo></CompJumbo>
            <JustInShoes></JustInShoes>
            <ScrollUp></ScrollUp>
            <Footer></Footer>
        </div>
    )
}

import React from "react";
import CompJumbo from "../components/jumbotron/jumbotron";
import SearchBar from "../components/searchBar/searchBar";
import About from "../components/about/about";
import Footer from "../components/Footer/footer";

export default function HomePage() {
    return (
        <div>
            <CompJumbo></CompJumbo>
            <SearchBar></SearchBar>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

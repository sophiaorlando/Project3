import React from "react";
import ScrollUp from "../components/scrollUp/scrollUp";
import Footer from "../components/Footer/footer";
import SearchBar from '../components/searchBar/searchBar'

export default function HomePage() {
    return (
        <div>
            <SearchBar />
            <ScrollUp></ScrollUp>
            <Footer></Footer>
        </div>
    )
}

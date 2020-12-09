import axios from "axios";

// https://api.thesneakerdatabase.com/v1/sneakers?limit=50

// 
// FILTERING
// descending order of sneaker
// https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=vans&sort=retailPrice:desc

// ascending order of sneaker
// https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=vans&sort=retailPrice:asc

// brand and release year
// https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseYear=gte:2019

// Gender
// https://api.thesneakerdatabase.com/v1/genders



export default {
    displaySneakers: function() {
        return axios.get("https://api.thesneakerdatabase.com/v1/sneakers?");
    }
    };
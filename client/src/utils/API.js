import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomBrands: function() {
    return axios.get("https://api.thesneakerdatabase.com/v1/brands");
  },
  getShoeBrand: function(brand) {
    return axios.get("https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=" + brand);
  },
  getShoeGender: function(genders) {
    return axios.get("https://api.thesneakerdatabase.com/v1/genders" + genders);
  }
};


import React, { useState } from "react";

import "./App.css";

const api = {
  url: "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott"
}


function App() {

  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [sneakers, setSneakers] = useState({})

  const search = () => {
    fetch("https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott")
      .then(res => res.json())
      .then((result) => {
        setIsLoaded(true)
        setSneakers(result)
        console.log(result)
      })
  }


  return (
    <main>
      <div className="search-box">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
          // onChange={e => setQuery(e.target.value)}
          // value={query}
          onKeyPress={search}
        />
      </div>
    </main>
  );
}


export default App;

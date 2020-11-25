import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navBar";
import Wrapper from "./components/Wrapper/wrapper";
import Home from "./pages/home";
// import Footer from "./components/Footer/footer";

import "./App.css";

// const api = {
//   url:
//     "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott",
// };

function App() {

  return (
    <Router>
      <main>
        <Navbar></Navbar>
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
        {/* <Footer></Footer> */}
      </main>
    </Router>
  );
}

export default App;

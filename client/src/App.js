import React, { useState } from "react";
// import CompJumbo from "./components/jumbotron/jumbotron";
// import Navbar from "./components/Navbar";
import AuthForm from "./components/auth/AuthForm";
import { AuthContext } from "./components/auth/auth";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

// const api = {
//   url:
//     "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan&releaseDate=lte:2019-10-11&name=travis%20scott",
// };

function App() {
  const existingToken = localStorage.getItem("token") || "";
  const existingUsername = localStorage.getItem("username") || "";
  const [authToken, setAuthToken] = useState(existingToken);
  const [username, setUsername] = useState(existingUsername);
  const setUserName = (data) => {
    if (!data) {
      localStorage.removeItem("username");
      setUsername("");
    } else {
      localStorage.setItem("username", data);
      setUsername(data);
    }
  };

  const setToken = (data) => {
    if (!data) {
      localStorage.removeItem("token");
      setAuthToken("");
    } else {
      localStorage.setItem("token", JSON.stringify(authToken));
      setAuthToken(data);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        authToken,
        setAuthToken: setToken,
        username,
        setUserName: setUserName,
      }}
    >
      <BrowserRouter>
        <main>
          <AuthForm />
          {/* <Navbar></Navbar>
      <CompJumbo /> */}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

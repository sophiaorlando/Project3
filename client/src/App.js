import React, { useState } from "react";
import AuthForm from "./components/auth/AuthForm";
import PrivateRoute from "./components/route_types/PrivateRoute";
import Home from "./pages/home";
import { AuthContext } from "./components/auth/auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navBar";
import NoteApp from "./components/note_app/NoteApp";
import NotePage from "./components/NotePage/Note";
import ShoePage from "./components/shoeInfoDisplay/shoeInfo";
import WishListPage from "./pages/wishlist";
import AllShoes from "./components/allShoes/allShoes";
// import Footer from "./components/Footer/footer";

import "./App.css";

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
      localStorage.setItem("token", JSON.stringify(data));
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
      <main>
        <BrowserRouter>
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={AuthForm} />
            <Route exact path="/login" component={AuthForm} />
            <Route exact path="/signup" component={AuthForm} />
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/note" component={NoteApp} />
            <PrivateRoute exact path="/new" component={NoteApp} />
            <PrivateRoute exact path="/user" component={NotePage} />
            <PrivateRoute exact path="/wishlist" component={WishListPage} />
            <PrivateRoute exact path="/shoe:id" component={ShoePage} />
            <PrivateRoute exact path="/allShoes:id" component={AllShoes} />
          </Switch>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </main>
    </AuthContext.Provider>
  );
}

export default App;

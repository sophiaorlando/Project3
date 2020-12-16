import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthForm from "./components/auth/AuthForm";
import { AuthContext } from "./components/auth/auth";
import PrivateRoute from "./components/route_types/PrivateRoute";
import Navbar from "./components/Navbar/navBar";
import Home from "./pages/home";
import NoteApp from "./components/note_app/NoteApp";
import NotePage from "./components/NotePage/Note";
import ShoePage from "./components/shoeInfoDisplay/shoeInfo";
import AllShoes from "./components/allShoes/allShoes";
import PostList from "./components/Blog/PostList";
import Post from "./components/Blog/Post";

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
            <PrivateRoute exact path="/shoe:id" component={ShoePage} />
            <PrivateRoute exact path="/allShoes:id" component={AllShoes} />
            <PrivateRoute exact path="/blog" component={PostList} />
            <PrivateRoute exact path="/posts/:id" component={Post} />
          </Switch>
        </BrowserRouter>
      </main>
    </AuthContext.Provider>
  );
}

export default App;

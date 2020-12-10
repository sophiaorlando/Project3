import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, Button, TextField } from "@material-ui/core";
import { Link, withRouter, Redirect } from "react-router-dom";
import { useAuth } from "./auth";

import "../auth/AuthForm.css";

const AuthForm = (props) => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Log In");
  const { setUserName, setAuthToken, username } = useAuth();

  const authenticate = async () => {
    const basePath = "api/auth/"; // server side path
    let url = basePath;

    if (action === "Log In") {
      url += "login";
    }

    console.log(url);
    console.log(action);

    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username: userName, password }),
    });

    const json = await response.json();
    console.log(json);
    if (response.ok) {
      setAuthToken(json.token);
      setUserName(json.user.username); // auth context provider.
      setUsername(json.user.username);
    } else {
      alert(json.msg);
    }
  };

  useEffect(() => {
    if (props.action) {
      setAction(props.action);
    } else {
      if (props.location.pathname === "/signup") {
        setAction("Sign Up");
      } else {
        setAction("Log In");
      }
    }
  }, [props]);

  const components = [
    <TextField
      placeholder="Username"
      name="username"
      value={userName}
      onChange={(e) => setUsername(e.target.value)}
    />,
    <TextField
      placeholder="Password"
      name="password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />,
    <Button variant="contained" color="primary" onClick={() => authenticate()}>
      {action}
    </Button>,
  ];

  if (username) {
    return <Redirect to="/home" />;
  }

  return (
    <main>
      <div id="background" style={{height:"100vh", backgroundImage:"url(https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", zIndex:" 999999999"}}>
    <Grid
      container
      direction="row"
      item
      xs={12}
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justify="center"
        component={Card}
        item
        spacing={3}
        xs={8}
        md={4}
        style={{ padding: "20px" }}
      >
        <Grid container item xs={12} justify="center">
          <Typography variant="h3">{action}</Typography>
        </Grid>
        {components.map((component) => {
          return (
            <Grid
              container
              item
              direction="column"
              xs={12}
              alignItems="stretch"
            >
              {component}
            </Grid>
          );
        })}
        {action === "Log In" ? (
          <Link to="/signup">Don't have an account? Sign Up</Link>
        ) : (
          <Link to="/login">Already Have An Account? Log In</Link>
        )}
      </Grid>
    </Grid>
    </div>
    </main>
  );
};

export default withRouter(AuthForm);




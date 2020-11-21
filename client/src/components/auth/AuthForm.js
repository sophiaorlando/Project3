import React, { useState, useEffect } from "react";
import { Grid, Card, Typography, Button, TextField } from "@material-ui/core";
import { useAuth } from "./auth";

const AuthForm = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [action, setAction] = useState("Sign In");
  const { setUserName, setAuthToken, user_name } = setAuth();

  const authenticate = async () => {
    // SERVER SIDE PATH
    const basePath = "/api/auth/";
    let url = basePath;

    if (action === "Sign In") {
      url += "login";
    }
    console.log(url);
    const response = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();
    if (response.ok) {
      setAuthToken(json.token);
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
      }
    }
    {
      setAction("Sign In");
    }
  }, [props]);

  const components = [
    <TextField
      placeholder="Username"
      name="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />,
    <TextField
      placeholder="Password"
      name="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />,
    <Button variant="contained" color="primary" onClick={() => authenticate()}>
      {action}
    </Button>,
  ];

  if (username) {
  }

  return (
    <Grid
      container
      direction="row"
      item
      xs={12}
      justify="center"
      alignItems="center"
    >
      <Grid
        container
        direction="column"
        alignItems="stretch"
        alignItems="center"
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
        {action === "Sign Up" ? (
          <Link to="/signup"> Don't have an account? Sign up!</Link>
        ) : (
          <Link to="/login">Already have an account? Sign in!</Link>
        )}
      </Grid>
    </Grid>
  );
};

export default AuthForm;

import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import "./navBar.css";

export default function SearchAppBar() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography className="title" variant="h6" noWrap>
            <Link
              to="/"
              id="link"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              SNEAKER FREAKERS
            </Link>
          </Typography>
          <div className="search">
            <InputBase
              placeholder="Search…"
              className="input"
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <AccountCircle className="account-circle"></AccountCircle>
          <IconButton
            edge="start"
            className="menu-btn"
            color="inherit"
            aria-label="open drawer"
            // onClick={openMenu()}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className="menu-btn"
            color="inherit"
            aria-label="open drawer"
            href="/wishlist"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* <aside className="side-bar"> */}
        <h3>Menu Items</h3>
        <ul>
          <li>Log In</li>
          <li>Sign Out</li>
        </ul>
        {/* </aside> */}
      </AppBar>
    </div>
  );
}

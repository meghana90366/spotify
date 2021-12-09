import React from "react";
import Logo from "./../Pages/HeaderComponent/Logo";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import NavHome from "./../LeftComponents/NavHome";
import NavSearch from "./../LeftComponents/NavSearch";
import "../LeftComponents/NavBar.css";

const UserLeftBlock = () => {
  return (
    <div className="UserleftBlock">
      <Logo />
      <Router>
        <Route exact>
          <span>
            <Link to="./NavHome">
              <i class="fas fa-home"></i>Home
            </Link>
          </span>
        </Route>
        <Route exact>
          <span>
            <Link to="./NavSearch">
              <i class="fas fa-search"></i>Search
            </Link>
          </span>
        </Route>
        <Route exact>
          <span>
            <Link>
              <i class="fal fa-books"></i>Your Library
            </Link>
          </span>
        </Route>
        <Route>
          <span>
            <Link>
              <i class="far fa-plus-square"></i> Create Play List
            </Link>
          </span>
        </Route>
        <Route>
          <span>
            <Link>
              <i class="fad fa-heart-square"></i> Liked Songs
            </Link>
            <p id="line"></p>
          </span>
        </Route>
        <Route>
          <span id="instal">
            <Link>
              <i class="fal fa-arrow-circle-down"></i> install app
            </Link>
          </span>
          <p id="line1"></p>
        </Route>
      </Router>
    </div>
  );
};

export default UserLeftBlock;

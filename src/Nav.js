import React from "react";
import icon from "./omni_icon.png";
import { NavLink } from "react-router-dom";
import "./App.css";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <img
            src={icon}
            width="80px"
            height="80px"
            alt=""
            className="ml-4"
          ></img>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">
              <NavLink
                exact
                to="/"
                className="nav-item nav-link text-white h5"
                activeClassName="item"
              >
                HOME
              </NavLink>
              <NavLink
                exact
                to="/marketplace"
                className="nav-item nav-link text-white h5"
                activeClassName="item"
              >
                MARKETPLACE
              </NavLink>
              <NavLink
                exact
                to="/wallet"
                className="nav-item nav-link text-white h5"
                activeClassName="item"
              >
                WALLET
              </NavLink>
              <NavLink
                exact
                to="/sort"
                className="nav-item nav-link text-white h5"
                activeClassName="item"
              >
                $ORT
              </NavLink>
            </div>
            <button
              class="btn btn-outline-light my-2 my-sm-0 ml-auto px-4 btn-lg mr-3"
              type="submit"
            >
              + CONNECT
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

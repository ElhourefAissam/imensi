import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar";
import Routes from "./router";

export default function R() {
  return (
    <Router>
      <div className="App ">
        <NavBar />
        <div className="mx-20 my-10">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

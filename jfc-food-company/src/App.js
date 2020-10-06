import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navibar from "./components/Navbar";
import BuildAMeal from "./components/BuildAMeal";
import Catering from "./components/Catering";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/build-a-meal" component={BuildAMeal} />
        <Route exact path="/catering" component={Catering} />
      </Switch>
      <h1>JFC Food Company website under construction</h1>
    </div>
  );
}

export default App;

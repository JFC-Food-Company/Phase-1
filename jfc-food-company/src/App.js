import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navibar from "./components/Navbar";
import BuildAMeal from "./components/BuildAMeal";
import Catering from "./components/Catering";
import AboutUs from "./components/AboutUs";
import KetoMenu from "./components/KetoMenu";
import ChefsChoiceMenu from "./components/ChefsChoiceMenu"

function App() {
  return (
    <div className="App">
      <Navibar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/build-a-meal" component={BuildAMeal} />
        <Route exact path="/catering" component={Catering} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/keto" component={KetoMenu} />
        <Route exact path="/chefs-choice" component={ChefsChoiceMenu} />
      </Switch>
      <h1>JFC Food Company website under construction</h1>
    </div>
  );
}

export default App;

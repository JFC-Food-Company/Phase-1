import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navibar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import MealWrapper from "./components/MealChoiceWrapper";
import { catering } from "./menus/catering";
import { byom } from "./menus/byom";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path="/build-a-meal"
          render={(props) => (
            <MealWrapper {...props} data={byom} title="Build Your Own Meal" />
          )}
        />
        <Route
          exact
          path="/catering"
          render={(props) => (
            <MealWrapper {...props} data={catering} title="Catering" />
          )}
        />
        <Route exact path="/about" component={AboutUs} />
      </Switch>
      <h1>JFC Food Company website under construction</h1>
    </div>
  );
}

export default App;

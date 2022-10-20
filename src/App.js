import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Products from "./components/Products";
import Locations from "./components/Locations";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Error from "./Error";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/locations">
          <Locations />
        </Route>
        <Route exact path="/careers">
          <Careers />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        {/* Rendering an error 404 page when the user typed in the wrong url */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>

  )
}
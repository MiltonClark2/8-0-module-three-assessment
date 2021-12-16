import { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Home  from './components/Home';
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import People from "./components/People";


function App() {
  return (
    <Router>
       <Home />


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Locations" >
            <Locations />
          </Route>
          
          <Route path="/people" >
            <People />
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
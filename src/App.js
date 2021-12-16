import { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Home  from './components/Home';
import Locations from "./components/Locations";
import Movies from "./components/Movies";


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
          
          {/* <Route path="/people" component={People} /> */}
        </Switch>
    </Router>
    
  );
}

export default App;
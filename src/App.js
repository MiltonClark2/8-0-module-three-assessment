import { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import Home  from './components/Home';











function App() {
  return (
    <Router>
        <Home />


        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/movies" component={Movies} /> */}
          {/* <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} /> */}
        </Switch>
    </Router>
    
  );
}

export default App;
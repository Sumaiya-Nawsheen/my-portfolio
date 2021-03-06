import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  
  return (
    <div>
      <Router>
 
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;

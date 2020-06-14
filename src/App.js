import React from 'react';
import './App.css';
import Learn from './components/Learn'
import Home from './components/Home'
import CovidMap from './components/CovidMap'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Learn} />
        <Route path="/COVID19" component={CovidMap} />
      </Switch>
  </Router>
    </div>
  );
}

export default App;

{/*
Components folder 
 -Home
 -App
 -StateIcon 

  stateicon   ->
  Home        ->      App =====> index.js(root)  ===> html ======> browser
  Map          ->    
  Learn       ->      

*/}
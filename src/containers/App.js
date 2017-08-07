import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Surfboards from './Surfboards';
import './App.css';

const Home = () => <h1>Welcome to Kai's Surfboard Shop</h1>;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/Surfboards">Surfboards</Link>
            <Link to="/Surfboards/new">Add A Surfboard</Link>
            <Link to="/About">About</Link>
          </div>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/surfboards" component={Surfboards} />
          <Route path="/about" render={() => <h1>About Kai's Surfboard Shop</h1>} />
        </div>
      </Router>
    );
  }
}

export default App;
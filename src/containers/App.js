import React, { Component } from 'react';

import Surfboards from './Surfboards';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      surfboards: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/surfboards`)
      .then(response => response.json())
      .then(surfboards => this.setState({ surfboards }))
  }

  render() {
    return (
      <div className="App">
        <Surfboards surfboards={this.state.surfboards} />
      </div>
    );
  }
}

export default App;
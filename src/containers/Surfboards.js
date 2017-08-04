import React, { Component } from 'react';
import { connect } from 'react-redux';

import SurfboardCard from '../components/SurfboardCard';
import SurfboardForm from './SurfboardForm';
import { getSurfboards } from '../actions/surfboards';
import './Surfboards.css';

class Surfboards extends Component {

  componentDidMount() {
    this.props.getSurfboards()
  }
  
  render() {
    return (
      <div className="SurfboardsContainer">
        <h1>Surfboards</h1>
        {this.props.surfboards.map(surfboard => <SurfboardCard key={surfboard.id} surfboard={surfboard} />)}
        <SurfboardForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    surfboards: state.surfboards
  })
}

 export default connect(mapStateToProps, { getSurfboards })(Surfboards);

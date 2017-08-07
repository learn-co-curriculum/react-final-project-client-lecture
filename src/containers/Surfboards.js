import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import SurfboardCard from '../components/SurfboardCard';
import SurfboardForm from './SurfboardForm';
import Surfboard from '../components/Surfboard';
import { getSurfboards } from '../actions/surfboards';
import './Surfboards.css';

class Surfboards extends Component {

  componentDidMount() {
    this.props.getSurfboards()
  }
  
  render() {
    const { match, surfboards } = this.props;

    return (
      <div>
        <Switch>
          <Route path={`${match.url}/new`} component={SurfboardForm} />
          <Route path={`${match.url}/:surfboardId`} component={Surfboard} />
          
          <Route exact path={`${match.url}`} render={() => (
            <div className="SurfboardsContainer">
              <h1>Surfboards</h1>
              {surfboards.map(surfboard => <SurfboardCard key={surfboard.id} match={match} surfboard={surfboard} />)}
            </div>
          )} />
        </Switch>
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

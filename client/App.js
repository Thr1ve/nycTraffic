import './app.css';
import React from 'react';
import { connect } from 'react-redux';

import Map from './containers/Map'

import { getStreets } from './actions';

const App = React.createClass({
  componentDidMount() {
    this.props.dispatch(getStreets())
  },

  render() {
    return (
      <div>
        <Map />
      </div>
    )
  }
});

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);

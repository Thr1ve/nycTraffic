import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import Map from './containers/Map'
import Dashboard from './containers/Dashboard';

import { init } from './actions';

const App = React.createClass({
  componentDidMount() {
    this.props.dispatch(init());
  },

  render() {
    return (
      <div>
        <Dashboard />
        <Map />
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);

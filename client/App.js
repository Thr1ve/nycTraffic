import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import NycMap from './containers/NycMap'
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
        <NycMap />
      </div>
    );
  }
});

export default connect()(App);

import React from 'react';
import { connect } from 'react-redux';

import { toggleWater, toggleStreets } from '../actions';
import { blue } from '../lib';

const style = { position: 'fixed', top: '0', left: '0', color: blue };

const Dashboard = React.createClass({

  toggleWater() { this.props.dispatch(toggleWater()); },

  toggleStreets() { this.props.dispatch(toggleStreets()); },

  render() {
    return (
      <div style={style}>
        <p onClick={this.toggleWater}> Toggle Water </p>
        <p onClick={this.toggleStreets}> Toggle Streets </p>
      </div>
    );
  }
});

export default connect()(Dashboard);

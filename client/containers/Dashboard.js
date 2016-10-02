import React from 'react';
import { connect } from 'react-redux';

import { toggleWater, toggleStreets } from '../actions';

const Dashboard = React.createClass({

  toggleWater() { this.props.dispatch(toggleWater()); },

  toggleStreets() { this.props.dispatch(toggleStreets())},

  render() {
    return (
      <div style={{ position: 'fixed', top: '0', left: '0', color: '#50E3C2' }}>
        <p onClick={this.toggleWater}> Toggle Water </p>
        <p onClick={this.toggleStreets}> Toggle Streets </p>
      </div>
    );
  }
});

export default connect()(Dashboard);

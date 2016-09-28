import React from 'react';
import { connect } from 'react-redux';

import { getPaths } from './actions';

const App = React.createClass({
  componentDidMount() {
    this.props.dispatch(getPaths())
  },

  render() {
    return (
      <div>
        Hi
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

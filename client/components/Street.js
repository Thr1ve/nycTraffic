import React, { PropTypes } from 'react';

const Street = React.createClass({
  render() {
    return (
      <path d={this.props.path} fill="none" strokeWidth={0.3} stroke="#27c93f" />
    );
  }
});

Street.propTypes = {
  path: PropTypes.string.isRequired
};

export default Street;

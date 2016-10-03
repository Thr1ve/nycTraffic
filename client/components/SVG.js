import React from 'react';

const SVG = React.createClass({
  render() {
    return (
      <svg
          viewBox="0 0 100 90"
          height={window.innerHeight} width={window.innerWidth}
          style={{
            background: '#000'
          }}
        >
        {this.props.children}
      </svg>
    );
  }
});

export default SVG;
